var posts=["2024/01/07/aaaaaaacccccc/","2024/01/05/hello-world/","2024/01/06/aaaaaaaaaa/","2024/01/06/云萌 Windows系统一键激活工具/","2024/01/06/易飞文字识别 免费在线批量图片文字识别工具/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };