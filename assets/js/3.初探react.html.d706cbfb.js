"use strict";(self.webpackChunkxifan_blog=self.webpackChunkxifan_blog||[]).push([[2535],{7366:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>o,data:()=>c});var t=a(641);const p=[(0,t.Fv)('<h2 id="一、jsx-语法规则" tabindex="-1"><a class="header-anchor" href="#一、jsx-语法规则"><span>一、jsx 语法规则</span></a></h2><ul><li>1.定义虚拟 DOM 时，不用写引号</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>文字<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token comment">/* 不用写引号 */</span><span class="token punctuation">}</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.标签中混入 JS 表达式时要用{}</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>clickEvent<span class="token punctuation">}</span><span class="token operator">&gt;</span>click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n        <span class="token punctuation">{</span><span class="token comment">/* 此处用{}包裹 */</span><span class="token punctuation">}</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3.样式的类名不要用 class，要用 className</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">&quot;btn&quot;</span><span class="token operator">&gt;</span>click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>4.内联样式</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token comment">// 要用 style={{key:value}}的形式去写</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>button style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>5.只有一个根标签</p></li><li><p>6.组件必须首字母大写</p></li></ul><h2 id="二、事件" tabindex="-1"><a class="header-anchor" href="#二、事件"><span>二、事件</span></a></h2><ul><li>React 事件绑定属性的命名采用驼峰式写法，而不是小写。</li><li>需要传入一个函数作为事件处理函数，而不是一个字符串。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 原生js</span>\n<span class="token operator">&lt;</span>button onclick<span class="token operator">=</span><span class="token string">&quot;addList&quot;</span><span class="token operator">&gt;</span>添加<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n\n<span class="token comment">// react</span>\n<span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>addList<span class="token punctuation">}</span><span class="token operator">&gt;</span>添加<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在事件里面直接使用 this 是无效的，需要单独为方法绑定 this</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 1.使用bind</span>\n<span class="token function">addList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addList</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>添加<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n\n<span class="token comment">// 2.public class fields</span>\n<span class="token function-variable function">addList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 箭头函数</span>\n<span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>添加<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n\n<span class="token comment">// 3.在回调中使用箭头函数</span>\n<span class="token function">addList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>添加<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、条件渲染" tabindex="-1"><a class="header-anchor" href="#三、条件渲染"><span>三、条件渲染</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 三目运算符</span>\n<span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">itemClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>\n  <span class="token punctuation">{</span>index <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">?</span> item <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、循环" tabindex="-1"><a class="header-anchor" href="#四、循环"><span>四、循环</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>\n  <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>todoList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">itemClick</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>\n        <span class="token punctuation">{</span><span class="token comment">/* 在循环中绑定事件需要绑定this */</span><span class="token punctuation">}</span>\n        <span class="token punctuation">{</span>item<span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',19)],e={},o=(0,a(6262).A)(e,[["render",function(n,s){return(0,t.uX)(),(0,t.CE)("div",null,p)}]]),c=JSON.parse('{"path":"/blogs/note/react/3.chutanreact.html","title":"3.初探react","lang":"en-US","frontmatter":{"title":"3.初探react","date":"2019-03-24T00:00:00.000Z","categories":["note"],"tags":["React"]},"headers":[{"level":2,"title":"一、jsx 语法规则","slug":"一、jsx-语法规则","link":"#一、jsx-语法规则","children":[]},{"level":2,"title":"二、事件","slug":"二、事件","link":"#二、事件","children":[]},{"level":2,"title":"三、条件渲染","slug":"三、条件渲染","link":"#三、条件渲染","children":[]},{"level":2,"title":"四、循环","slug":"四、循环","link":"#四、循环","children":[]}],"git":{"createdTime":1737108179000,"updatedTime":1737108179000,"contributors":[{"name":"稀饭","email":"lixifan@ane56.com","commits":1}]},"filePathRelative":"blogs/note/react/3.初探react.md"}')}}]);