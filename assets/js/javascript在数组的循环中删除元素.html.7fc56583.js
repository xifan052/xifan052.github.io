"use strict";(self.webpackChunkxifan_blog=self.webpackChunkxifan_blog||[]).push([[4138],{4434:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>c,data:()=>e});var p=a(641);const t=[(0,p.Fv)('<p>在开发JavaScript应用的过程中，经常会遇到在循环中移除指定元素的需求。</p><p>按照常规的思路，就是对数组进行一个for循环，然后在循环里面进行if判断，在判断中删除掉指定元素即可。</p><p>但是实际情况往往不会像预想的那样顺利运行。</p><h2 id="场景还原" tabindex="-1"><a class="header-anchor" href="#场景还原"><span>场景还原</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">// 打印数组中的情况，便于跟踪数组中数据的变化</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&#39; = &#39;</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 删除掉所有为2的元素</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="data:image/png;base64,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" alt=" "></p><p>从最终的结果可以看到，这段代码实际上只删除掉了匹配的其中一个元素，而另一个匹配条件的元素还存在，并不符合程序设计的初衷。</p><p>而从打印出来的运行过程不难发现，产生这个结果的原因是因为，当删除掉了一个元素后，数组中元素的索引（下标）发生了实时变化，造成了程序的异常。</p><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决"><span>解决</span></a></h2><p>找到了出现问题的原因，就不难解决问题了。</p><p><strong>方法1：实时调整数组中元素的下标对应关系。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">// 打印数组中的情况，便于跟踪数组中数据的变化</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&#39; = &#39;</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 删除掉所有为2的元素</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出现问题的原因，是因为移除掉中间的一个元素之后，该元素后面的元素的索引（下标）都往前加1了，那么我们可以在删除元素后手动将循环中的下标重置为现在对应的下标即可（i--）。</p><p><strong>方法2：从后往前遍历数组元素。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 打印数组中的情况，便于跟踪数组中数据的变化</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&#39; = &#39;</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 删除掉所有为2的元素</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出现问题的原因，是因为移除掉中间的一个元素之后，该元素后面的元素的索引（下标）都往前加1了，那么只要是从后往前循环，就可以不用管后面元素的索引（下标）了。</p><p><strong>方法3：使用while循环代替for循环（还是从后往前循环）。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> i <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&#39; = &#39;</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n     <span class="token punctuation">}</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同上面从后往前循环的原理一致，只是将for循环使用了while循环代替。</p>',19)],o={},c=(0,a(6262).A)(o,[["render",function(n,s){return(0,p.uX)(),(0,p.CE)("div",null,t)}]]),e=JSON.parse('{"path":"/blogs/article/0.javascriptzaishuzudexunhuanzhongshanchuyuansu/javascriptzaishuzudexunhuanzhongshanchuyuansu.html","title":"javascript在数组的循环中删除元素","lang":"en-US","frontmatter":{"title":"javascript在数组的循环中删除元素","date":"2017-08-25T00:00:00.000Z","categories":["article"],"tags":["Javascript"]},"headers":[{"level":2,"title":"场景还原","slug":"场景还原","link":"#场景还原","children":[]},{"level":2,"title":"解决","slug":"解决","link":"#解决","children":[]}],"git":{"createdTime":1737108179000,"updatedTime":1737108179000,"contributors":[{"name":"稀饭","email":"lixifan@ane56.com","commits":1}]},"filePathRelative":"blogs/article/0.javascript在数组的循环中删除元素/javascript在数组的循环中删除元素.md"}')}}]);