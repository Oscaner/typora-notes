!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.fc52d2160db79e8682f040071cfd6ba3.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.a07ecf0810710ab2d0c43dfdf2c2f604.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.9c38f2fe8038a0beebed4dcdbd9b57d7.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed/embed",paths:["lounge/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.2f2f40d40785c9541a90e9086c8770a3.js",a.body.appendChild(c)}();