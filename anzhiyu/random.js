var posts=["2024/01/05/hello-world/","2024/01/06/易飞文字识别 免费在线批量图片文字识别工具 977e079ad6a045ce96850edbe0e6e1bb/","2024/01/06/aaaaaaaaaa/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };