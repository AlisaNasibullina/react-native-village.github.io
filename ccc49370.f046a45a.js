(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{144:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(160),m=t(164),c=t(154);var i=function(e){const{nextItem:a,prevItem:t}=e;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},o=t(184);a.default=function(e){const{content:a}=e,{frontMatter:t,metadata:n}=a,{title:c,description:s,nextItem:d,prevItem:g,editUrl:u}=n,{hide_table_of_contents:E}=t;return r.a.createElement(l.a,{title:c,description:s},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(m.a,{frontMatter:t,metadata:n,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,u&&r.a.createElement("a",{href:u,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(d||g)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(i,{nextItem:d,prevItem:g}))),!E&&a.rightToc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{headings:a.rightToc})))))}},164:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(155),m=t(145),c=t(163),i=t(154),o=t(171),s=t(157),d=t(47),g=t.n(d);const u=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:d,isBlogPostPage:E=!1}=e,{date:v,permalink:h,tags:p,readingTime:_}=n,{author:f,title:b,image:N,keywords:k}=t,w=t.author_url||t.authorURL,y=t.author_title||t.authorTitle,I=t.author_image_url||t.authorImageURL,x=Object(s.a)(N,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,k&&k.length&&r.a.createElement("meta",{name:"keywords",content:k.join(",")}),N&&r.a.createElement("meta",{property:"og:image",content:x}),N&&r.a.createElement("meta",{property:"twitter:image",content:x}),N&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+b})),r.a.createElement("article",{className:E?void 0:"margin-bottom--xl"},(()=>{const e=E?"h1":"h2",a=v.substring(0,10).split("-"),t=a[0],n=u[parseInt(a[1],10)-1],m=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",g.a.blogPostTitle)},E?b:r.a.createElement(i.a,{to:h},b)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:v,className:g.a.blogPostDate},n," ",m,", ",t," ",_&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(_)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},I&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:w,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:I,alt:f})),r.a.createElement("div",{className:"avatar__intro"},f&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},f)),r.a.createElement("small",{className:"avatar__subtitle"},y)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:o.a},a)),(p.length>0||d)&&r.a.createElement("footer",{className:"row margin-vert--lg"},p.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),p.map(({label:e,permalink:a})=>r.a.createElement(i.a,{key:a,className:"margin-horiz--sm",to:a},e))),d&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:n.permalink,"aria-label":"Read more about "+b},r.a.createElement("strong",null,"Read More"))))))}},184:function(e,a,t){"use strict";var n=t(0),r=t.n(n);var l=function(e,a,t){const[r,l]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{let n,m;function c(){const c=function(){let e=0,a=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!a;){const r=n[e],{top:l}=r.getBoundingClientRect();l>=0&&l<=t&&(a=r),e+=1}return a}();if(c){let t=0,n=!1;for(m=document.getElementsByClassName(e);t<m.length&&!n;){const e=m[t],{href:i}=e,o=decodeURIComponent(i.substring(i.indexOf("#")+1));c.id===o&&(r&&r.classList.remove(a),e.classList.add(a),l(e),n=!0),t+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}})},m=t(48),c=t.n(m);const i="table-of-contents__link";function o({headings:e,isChild:a}){return e.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},e.map(e=>r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:i,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(o,{isChild:!0,headings:e.children})))):null}a.a=function({headings:e}){return l(i,"table-of-contents__link--active",100),r.a.createElement("div",{className:c.a.tableOfContents},r.a.createElement(o,{headings:e}))}}}]);