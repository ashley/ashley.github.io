(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{LZFG:function(e,t,a){e.exports={articleList:"PostsListing-module--article-list--3ReSK",articleBox:"PostsListing-module--article-box--3M6_I",right:"PostsListing-module--right--2MxCO",meta:"PostsListing-module--meta--3cFzL",postCoverImage:"PostsListing-module--post-cover-image--2iZ5N"}},Mdw5:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var n=a("q1tI"),r=a.n(n),o=a("TJpk"),i=a.n(o),l=a("83Zx"),s=a("lPsB"),c=a("IpnI"),m=a.n(c);t.default=function(e){var t=e.data,a=e.pageContext;return r.a.createElement(l.a,null,r.a.createElement("main",null,r.a.createElement(i.a,{title:' "'+a.category+'" - '+m.a.siteTitle}),r.a.createElement("h1",null,"Category:"," ",a.category),r.a.createElement(s.a,{postEdges:t.allMarkdownRemark.edges})))};var d="866404667"},lPsB:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("LZFG"),l=a.n(i);t.a=function(e){var t=e.postEdges,a=function(){var e=[];return t.forEach((function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,categories:t.node.frontmatter.categories,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})})),e}();return r.a.createElement("div",{className:l.a.articleList},a.map((function(e){return r.a.createElement(o.Link,{to:e.path,key:e.title},r.a.createElement("article",{className:l.a.articleBox},r.a.createElement("div",{className:l.a.right},r.a.createElement("h3",null,e.title),r.a.createElement("div",{className:l.a.meta},e.date," — ",r.a.createElement("span",null,e.categories.join(" / "))," ","— ",e.timeToRead," Min Read"," "),r.a.createElement("img",{className:l.a.postCoverImage,src:e.cover,alt:"post-picture"}),r.a.createElement("p",null,e.excerpt))))})))}}}]);
//# sourceMappingURL=component---src-templates-category-js-15710d91cb943f961a5f.js.map