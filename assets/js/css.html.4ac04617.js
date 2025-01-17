"use strict";(self.webpackChunkxifan_blog=self.webpackChunkxifan_blog||[]).push([[581],{301:(n,e,s)=>{s.r(e),s.d(e,{comp:()=>b,data:()=>v});var a=s(641);const l=(0,a.Lk)("p",null,"面试题总结系列，这里只列出来出现频率比较高且觉得有必要的题目，",-1),i=(0,a.Lk)("h3",{id:"_1-什么是bfc-🏳️‍🌈",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#_1-什么是bfc-🏳️‍🌈"},[(0,a.Lk)("span",null,"1. 什么是BFC 🏳️‍🌈")])],-1),t=(0,a.Lk)("p",null,"BFC是一种排列html的规则",-1),o=(0,a.Lk)("li",null,[(0,a.Lk)("p",null,"BFC触发方式"),(0,a.Lk)("p",null,"根元素，即HTML标签 浮动元素：float值为left、right overflow值不为 visible，为 auto、scroll、hidden display值为 inline-block、table-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid 定位元素：position值为 absolute、fixed")],-1),p=(0,a.Lk)("p",null,"作用",-1),r=(0,a.Lk)("p",null,"清除元素浮动，设置父容器overflow值不为none，即hidden、auto、scroll",-1),c=(0,a.Lk)("p",null,"阻止相邻元素的margin合并，设置元素的display为inline、inline-*或table-caption ；",-1),d={href:"https://segmentfault.com/a/1190000013023485#item-1",target:"_blank",rel:"noopener noreferrer"},u=(0,a.Fv)('<p><a href="/examples/BFC.html" target="_blank">查看效果</a></p><h3 id="_2-盒模型-🏳️‍🌈" tabindex="-1"><a class="header-anchor" href="#_2-盒模型-🏳️‍🌈"><span>2. 盒模型 🏳️‍🌈</span></a></h3><ul><li><p>怪异盒模型（border-box）</p><p>元素最终宽度 = content大小(100px)</p></li><li><p>标准盒模型（content-box）</p><p>元素最终宽度 = border(4px) + padding(40px) + content大小(100px)</p></li></ul><h3 id="_3-position定位的区别-🏳️‍🌈" tabindex="-1"><a class="header-anchor" href="#_3-position定位的区别-🏳️‍🌈"><span>3. position定位的区别 🏳️‍🌈</span></a></h3><ul><li><p><strong>relative</strong>：相对于自身定位；</p></li><li><p><strong>absolute</strong>：相对于父级或组件元素position不为static，即relative，absolute，fixed，sticky；</p></li><li><p><strong>fixed</strong>：相对于浏览器窗口；</p></li><li><p><strong>sticky</strong>：相对于父级或祖先滚动容器定位；</p></li></ul><h3 id="_4-说下重绘和回流及优化-🏳️‍🌈" tabindex="-1"><a class="header-anchor" href="#_4-说下重绘和回流及优化-🏳️‍🌈"><span>4. 说下重绘和回流及优化 🏳️‍🌈</span></a></h3><p><strong>回流：当DOM结构、样式或布局发生变化时，浏览器重新计算元素的几何属性（如位置、尺寸等）</strong>；首先浏览器遍历渲染树，计算每个可见节点在屏幕上的位置和大小等几何属性；在这个过程中，因为节点几何属性的变化，又需要对受影响节点重新计算布局，同时回流的时候必定会触发重绘，所以频繁回流会占用大量的资源来进行布局计算。</p><p><strong>重绘：当元素的视觉样式发生变化（如颜色、背景等），但不影响布局时，浏览器会进行重绘</strong>；在布局完成之后，按照渲染树的顺序，逐个绘制节点，包括颜色、边框、渲染背景、文字、图像等内容。</p><p>优化方法： 1. 减少DOM节点数量，减少或者集中DOM的操作和访问； 2. 使用<code>transform</code>和<code>opacity</code>代替布局属性的修改； 3. 通过<code>requestAnimationFrame</code>批量更新DOM样式，避免每次操作都触发回流；</p><h3 id="_5-实现一个正方形-🏳️‍🌈" tabindex="-1"><a class="header-anchor" href="#_5-实现一个正方形-🏳️‍🌈"><span>5. 实现一个正方形 🏳️‍🌈</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 20vw<span class="token punctuation">;</span>\n    <span class="token comment">/* width: 20vw;\n    height: 20vw; */</span>  <span class="token comment">/* 1. 高度使用vw单位，会随页面宽度变化而变化 */</span>\n    \n    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n    <span class="token property">aspect-ratio</span><span class="token punctuation">:</span> 1 <span class="token punctuation">;</span> <span class="token comment">/* 2. 使用aspect-ratio属性，需要设置宽度，高度会自动填充为所设置的宽度比例 */</span>\n<span class="token punctuation">}</span>\n\n\n&lt;div class=<span class="token string">&quot;box&quot;</span>&gt;&lt;/div&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="/examples/css-square.html" target="_blank">查看效果</a></p>',12),h={},b=(0,s(6262).A)(h,[["render",function(n,e){const s=(0,a.g2)("ExternalLinkIcon");return(0,a.uX)(),(0,a.CE)("div",null,[l,i,t,(0,a.Lk)("ul",null,[o,(0,a.Lk)("li",null,[p,r,c,(0,a.Lk)("p",null,[(0,a.Lk)("a",d,[(0,a.eW)("参考链接"),(0,a.bF)(s)])])])]),u])}]]),v=JSON.parse('{"path":"/blogs/interview/css.html","title":"高频面试题中的CSS（二）","lang":"en-US","frontmatter":{"title":"高频面试题中的CSS（二）","date":"2024-03-18T00:00:00.000Z","categories":["interview"],"tags":["CSS"]},"headers":[{"level":3,"title":"1. 什么是BFC 🏳️‍🌈","slug":"_1-什么是bfc-🏳️‍🌈","link":"#_1-什么是bfc-🏳️‍🌈","children":[]},{"level":3,"title":"2. 盒模型 🏳️‍🌈","slug":"_2-盒模型-🏳️‍🌈","link":"#_2-盒模型-🏳️‍🌈","children":[]},{"level":3,"title":"3. position定位的区别 🏳️‍🌈","slug":"_3-position定位的区别-🏳️‍🌈","link":"#_3-position定位的区别-🏳️‍🌈","children":[]},{"level":3,"title":"4. 说下重绘和回流及优化 🏳️‍🌈","slug":"_4-说下重绘和回流及优化-🏳️‍🌈","link":"#_4-说下重绘和回流及优化-🏳️‍🌈","children":[]},{"level":3,"title":"5. 实现一个正方形 🏳️‍🌈","slug":"_5-实现一个正方形-🏳️‍🌈","link":"#_5-实现一个正方形-🏳️‍🌈","children":[]}],"git":{"createdTime":1737108179000,"updatedTime":1737108179000,"contributors":[{"name":"稀饭","email":"lixifan@ane56.com","commits":1}]},"filePathRelative":"blogs/interview/css.md"}')}}]);