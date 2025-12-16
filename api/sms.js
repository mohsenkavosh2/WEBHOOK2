// api/sms.js
export default function handler(req, res) {
  console.log('درخواست دریافت شد:', req.method);
  
  if (req.method === 'POST') {
    const message = req.body?.text || req.body?.message || '';
    console.log('پیام:', message);
    
    if (message.trim() === '1') {
      console.log('✅ پیام "1" دریافت شد - باید کلید S فشرده شود');
      
      return res.status(200).json({
        success: true,
        action: 'press_s_key',
        message: 'پیام "1" دریافت شد',
        time: new Date().toISOString()
      });
    }
    
    return res.status(200).json({
      success: false,
      message: 'پیام نامعتبر است. لطفاً "1" بفرستید.'
    });
  }
  
  // اگر GET بود (برای تست)
  return res.status(200).json({
    status: 'سرویس وب‌هوک فعال است',
    instruction: 'برای تست، POST {"text": "1"} به این آدرس بفرستید',
    endpoint: '/api/sms'
  });
}
