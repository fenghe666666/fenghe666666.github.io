var posts=["2024/01/06/aaaaaaaaaa/","2024/01/05/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };