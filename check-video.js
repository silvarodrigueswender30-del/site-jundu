const https = require('https');

https.get('https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/jundu/video-home-2.mp4', (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  console.log('Headers:', res.headers);
  const size = res.headers['content-length'];
  if (size) {
    console.log(`Size: ${(parseInt(size, 10) / (1024 * 1024)).toFixed(2)} MB`);
  }
}).on('error', (e) => {
  console.error(e);
});
