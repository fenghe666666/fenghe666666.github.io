var posts=["2024/01/08/PDFgear：让你的PDF文件处理更加便捷/","2024/01/08/PixPin：截图新选择，OCR、长图、动图、窗口一键搞定！/","2024/01/08/SuperCopy超级复制：解除网页复制限制，轻松复制所需内容/","2024/01/05/hello-world/","2024/01/08/UC网盘文件传输助手 免费文件传输工具/","2024/01/08/一键卸载无用软件！让你的Windows系统焕然一新！/","2024/01/06/云萌 Windows系统一键激活工具/","2024/01/08/免费又好用的图片批量压缩格式转换软件/","2024/01/08/免费，无广告、识别准，轻松解决你的所有文件扫描需求/","2024/01/08/别再安装不常用的应用了，一个软件提供80多个实用小工具/","2024/01/06/易飞文字识别 免费在线批量图片文字识别工具/","2024/01/08/在线工具宝库，帮小忙让你效率翻倍！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };