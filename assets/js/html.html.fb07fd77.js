"use strict";(self.webpackChunkxifan_blog=self.webpackChunkxifan_blog||[]).push([[3989],{7133:(e,l,t)=>{t.r(l),t.d(l,{comp:()=>p,data:()=>u});var o=t(641);const n=(0,o.Fv)('<p>面试题总结系列，从html开始，这里只列出来出现频率比较高且觉得有必要的题目，</p><h3 id="_1-输入一个url-回车之后到页面渲染的过程-🏳️‍🌈" tabindex="-1"><a class="header-anchor" href="#_1-输入一个url-回车之后到页面渲染的过程-🏳️‍🌈"><span>1. 输入一个URL，回车之后到页面渲染的过程 🏳️‍🌈</span></a></h3><ol><li>地址解析与URL分析；</li><li>DNS解析；</li><li>和服务器建立连接；</li><li>客户端发送请求；</li><li>服务器处理请求并将对应内容给客户端；</li><li>断开连接；</li><li>客户端接收文件，解析HTML；</li><li>页面渲染；</li></ol>',3),a=(0,o.Lk)("h3",{id:"_2-性能优化-🏳️‍🌈",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#_2-性能优化-🏳️‍🌈"},[(0,o.Lk)("span",null,"2. 性能优化 🏳️‍🌈")])],-1),i=(0,o.Lk)("li",null,[(0,o.Lk)("p",null,[(0,o.Lk)("strong",null,"性能指标")]),(0,o.Lk)("p",null,"性能指标可以分为加载完成时间，首次内容绘制（First Contentful Paint，FCP），最大内容绘制（Largest Contentful Paint，LCP），可交互时间（Time to Interactive，TTI）...一类，这个看团队中的要求。")],-1),s=(0,o.Lk)("p",null,[(0,o.Lk)("strong",null,"性能优化")],-1),d=(0,o.Lk)("p",null,"这里只是简单的列下优化方向，",-1),r=(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,"首屏加载：加载前的预加载、预解析，加载中的页面渲染优化，加载后的数据、任务切片。"),(0,o.Lk)("li",null,"代码优化：HTML、JS、CSS优化，框架中的Vue、React代码优化。"),(0,o.Lk)("li",null,"构建工具：webpack、vite，静态资源的压缩、提取、缓存。"),(0,o.Lk)("li",null,"项目架构：微前端、渲染队列、加载优先级。")],-1),c=(0,o.Lk)("li",null,[(0,o.Lk)("p",null,[(0,o.Lk)("strong",null,"业务场景的优化")]),(0,o.Lk)("ol",null,[(0,o.Lk)("li",null,[(0,o.eW)("接口数据太多如何优化？ "),(0,o.Lk)("strong",null,"网络方面"),(0,o.eW)("，数据流式读取，避免一次性返回所有的数据； "),(0,o.Lk)("strong",null,"渲染方面"),(0,o.eW)("，分页，分片渲染，虚拟滚动，canvas绘制内容，webwork；")])])],-1),g=(0,o.Fv)('<h3 id="_3-浏览器缓存-🏳️‍🌈" tabindex="-1"><a class="header-anchor" href="#_3-浏览器缓存-🏳️‍🌈"><span>3. 浏览器缓存 🏳️‍🌈</span></a></h3><p><strong>强缓存</strong>，只要资源未过期直接读取本地资源并返回200，通过<code>Expires</code>和<code>Cache-Control:max-age=&lt;seconds&gt;</code>两个请求头来控制，为了更精确的控制（<code>max-age</code>参数为请求的相对时间、减少<code>max-age</code>值来手动刷新），<code>Cache-Control</code>的优先级比<code>Expires</code>更高。</p><p><strong>协商缓存</strong>，强缓存失效时，浏览器携带上一次请求返回的响应头中的缓存标记（如<code>ETag</code>、<code>Last-Modified</code>等）向服务器发起请求，查询缓存的资源是否有效；资源没更新，就返回304，通知浏览器读取本地缓存，否则返回新的内容；参数的优先级方面，<code>ETag</code>要高于<code>Last-Modified</code>，因为<code>ETag</code>有更高的唯一性，对比资源变化会更加精准，资源如果已更新，就返回新的资源，状态码200。</p><p>正常情况下，都是先读取强缓存，再读取协商缓存，但是有几种情况是直接读取协商缓存：</p><ol><li><p><code>cache-control</code>的值为<code>must-revalidate</code>，表示客户端必须与服务器进行确认以验证缓存的有效性，即使强缓存仍然有效。</p></li><li><p><code>cache-control</code>的值为<code>no-cache</code>，表示客户端不应直接使用缓存，而是需要与服务器验证资源的有效性。</p></li><li><p><code>cache-control</code>的值为<code>max-age=0</code>，设置资源有效时间为0，会直接发起协商缓存的请求。</p></li></ol><h3 id="_4-script属性async和defer的区别-🏳️‍🌈" tabindex="-1"><a class="header-anchor" href="#_4-script属性async和defer的区别-🏳️‍🌈"><span>4. script属性async和defer的区别 🏳️‍🌈</span></a></h3><p>两个属性都是下载时不阻塞页面，区别是在下载完成之后的执行顺序，</p><ul><li><p><strong>async</strong>：下载时不阻塞页面的解析，但是下载完成之后会立即执行，执行顺序根据下载完成时间。</p></li><li><p><strong>defer</strong>：下载时不阻塞页面的解析，下载完成之后按照在HTML中的顺序执行。</p></li></ul><h3 id="_5-cookie、sessionstorage和localstorage的区别-🏳️‍🌈" tabindex="-1"><a class="header-anchor" href="#_5-cookie、sessionstorage和localstorage的区别-🏳️‍🌈"><span>5. cookie、sessionStorage和localStorage的区别 🏳️‍🌈</span></a></h3><table><thead><tr><th></th><th>cookie</th><th>sessionStorage</th><th>localStorage</th></tr></thead><tbody><tr><td><strong>存储容量</strong></td><td>4KB</td><td>5MB</td><td>5MB</td></tr><tr><td><strong>过期时间</strong></td><td>手动设置，如果未设置过期时间，那么在浏览器关闭时cookie会过期</td><td>页面关闭自动过期</td><td>不会自动过期，只能手动删除</td></tr><tr><td><strong>共享范围</strong></td><td>任意窗口</td><td>当前窗口或者使用window.open打开的窗口单向共享</td><td>任意窗口</td></tr><tr><td><strong>与服务器的交互</strong></td><td>每次HTTP请求都会自动携带cookie</td><td>不参与通信</td><td>不参与通信</td></tr></tbody></table><h3 id="_6-如何减少dns的解析时间" tabindex="-1"><a class="header-anchor" href="#_6-如何减少dns的解析时间"><span>6. 如何减少DNS的解析时间</span></a></h3><p><strong>启动DNS预解析</strong>；浏览器在解析HTML时，遇到配置了预解析的<code>&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//example.com&quot;&gt;</code>，会发起一个异步的DNS查询，等到资源请求时，就不用再等待DNS解析。</p><p><strong>使用 CDN</strong>；CDN会将内容分发到离用户更近的节点，减少跨地域DNS查询的时间</p>',13),h={},p=(0,t(6262).A)(h,[["render",function(e,l){const t=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[n,(0,o.Lk)("p",null,[(0,o.eW)("更详细的可以看"),(0,o.bF)(t,{to:"/blogs/article/9.%E8%BE%93%E5%85%A5%E4%B8%80%E4%B8%AAURL%EF%BC%8C%E5%9B%9E%E8%BD%A6%E4%B9%8B%E5%90%8E%E5%88%B0%E9%A1%B5%E9%9D%A2%E6%B8%B2%E6%9F%93%E7%9A%84%E9%82%A3%E4%BA%9B%E4%BA%8B.html"},{default:(0,o.k6)((()=>[(0,o.eW)("输入一个URL，回车之后到页面渲染的那些事")])),_:1})]),a,(0,o.Lk)("ul",null,[i,(0,o.Lk)("li",null,[s,d,r,(0,o.Lk)("p",null,[(0,o.eW)("更多可以看"),(0,o.bF)(t,{to:"/blogs/article/8.%E5%86%99%E7%BB%99%E8%87%AA%E5%B7%B1%E7%9A%84%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.html"},{default:(0,o.k6)((()=>[(0,o.eW)("写给自己的前端性能优化")])),_:1})])]),c]),g])}]]),u=JSON.parse('{"path":"/blogs/interview/html.html","title":"高频面试题中的HTML（一）","lang":"en-US","frontmatter":{"title":"高频面试题中的HTML（一）","date":"2024-03-18T00:00:00.000Z","categories":["interview"],"tags":["HTML"]},"headers":[{"level":3,"title":"1. 输入一个URL，回车之后到页面渲染的过程 🏳️‍🌈","slug":"_1-输入一个url-回车之后到页面渲染的过程-🏳️‍🌈","link":"#_1-输入一个url-回车之后到页面渲染的过程-🏳️‍🌈","children":[]},{"level":3,"title":"2. 性能优化 🏳️‍🌈","slug":"_2-性能优化-🏳️‍🌈","link":"#_2-性能优化-🏳️‍🌈","children":[]},{"level":3,"title":"3. 浏览器缓存 🏳️‍🌈","slug":"_3-浏览器缓存-🏳️‍🌈","link":"#_3-浏览器缓存-🏳️‍🌈","children":[]},{"level":3,"title":"4. script属性async和defer的区别 🏳️‍🌈","slug":"_4-script属性async和defer的区别-🏳️‍🌈","link":"#_4-script属性async和defer的区别-🏳️‍🌈","children":[]},{"level":3,"title":"5. cookie、sessionStorage和localStorage的区别 🏳️‍🌈","slug":"_5-cookie、sessionstorage和localstorage的区别-🏳️‍🌈","link":"#_5-cookie、sessionstorage和localstorage的区别-🏳️‍🌈","children":[]},{"level":3,"title":"6. 如何减少DNS的解析时间","slug":"_6-如何减少dns的解析时间","link":"#_6-如何减少dns的解析时间","children":[]}],"git":{"createdTime":1737108179000,"updatedTime":1737108179000,"contributors":[{"name":"稀饭","email":"lixifan@ane56.com","commits":1}]},"filePathRelative":"blogs/interview/html.md"}')}}]);