var posts=["posts/31263.html","posts/5013.html","posts/47906.html","posts/14182.html","posts/26005.html","posts/41149.html","posts/12330.html","posts/6570.html","posts/10555.html","posts/19896.html","posts/24588.html","posts/33267.html","posts/37720.html","posts/50479.html","posts/4295.html","posts/48522.html","posts/46410.html","posts/28937.html","posts/23052.html","posts/18656.html","posts/22120.html","posts/113.html","posts/33135.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };