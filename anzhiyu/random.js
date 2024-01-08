var posts=["2024/01/08/PixPin：截图新选择，OCR、长图、动图、窗口一键搞定！/","2024/01/08/UC网盘文件传输助手 免费文件传输工具/","2024/01/05/hello-world/","2024/01/06/易飞文字识别 免费在线批量图片文字识别工具/","2024/01/06/云萌 Windows系统一键激活工具/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };