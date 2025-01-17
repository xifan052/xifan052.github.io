"use strict";(self.webpackChunkxifan_blog=self.webpackChunkxifan_blog||[]).push([[8368],{9677:(s,a,n)=>{n.r(a),n.d(a,{comp:()=>c,data:()=>p});var t=n(641);const e=[(0,t.Fv)('<p>Vue的diff算法用于比较新旧虚拟 DOM，确定哪些部分需要更新、删除或添加。它的关键目标是通过尽可能少的操作来更新实际 DOM，减少性能开销。</p><h2 id="_1-静态节点提升-static-hoisting" tabindex="-1"><a class="header-anchor" href="#_1-静态节点提升-static-hoisting"><span>1. 静态节点提升 (Static Hoisting)</span></a></h2><ul><li><p><strong>Vue2:</strong> Vue2虽然会对模板进行编译优化，但对于静态节点（内容不会变化的节点），每次渲染时仍然会进行比较。</p></li><li><p><strong>Vue3:</strong> 在编译阶段，会将静态节点提升到渲染函数之外。这意味着这些节点在后续的渲染中会被完全跳过diff过程，直接复用。</p></li></ul><h2 id="_2-基于最长递增子序列-longest-increasing-subsequence-lis-的优化" tabindex="-1"><a class="header-anchor" href="#_2-基于最长递增子序列-longest-increasing-subsequence-lis-的优化"><span>2. 基于最长递增子序列 (Longest Increasing Subsequence, LIS) 的优化</span></a></h2><ul><li><p><strong>Vue2:</strong> Vue2的diff算法基于双端比较。在特殊情况下，比如列表中间插入或删除元素时，可能会导致一些不必要的DOM移动操作。</p></li><li><p><strong>Vue3:</strong> Vue3还是双端比较，在中间乱序部分，基于动态规划的思想，使用贪心算法和二分查找最长递增子序列，找出需要移动的最小元素集合，最大程度地复用DOM节点。</p></li></ul><p>举个例子，如果一个列表原先是<code>[a, b, c, d]</code>，更新后变成<code>[a, c, b, e]</code>，那么Vue2可能会移动b和c两次，而Vue3使用LIS算法会发现<code>[a, c]</code>是最长递增子序列，只需要移动b和插入e即可，减少了DOM操作。</p><h2 id="_3-patch-flags-补丁标志" tabindex="-1"><a class="header-anchor" href="#_3-patch-flags-补丁标志"><span>3. Patch Flags (补丁标志)</span></a></h2><p>Patch Flags通过为动态节点添加标志来标记其可能发生的变化类型，从而在diff过程中实现更精准的更新。</p><ul><li><p><strong>作用：</strong> 减少不必要的比较，提高diff效率。</p></li><li><p><strong>实现方式：</strong> 在编译阶段，Vue3的编译器会为每个动态节点生成一个二进制的标志位，即Patch Flags。这些标志位表示了该节点可能发生的变化，例如：</p><ul><li><code>TEXT</code>: 文本内容变化。</li><li><code>CLASS</code>: class属性变化。</li><li><code>STYLE</code>: style属性变化。</li><li><code>PROPS</code>: 除了class、style之外的其他属性变化。</li><li><code>FULL_PROPS</code>: 完整props变化，需要进行完整的props diff。</li><li><code>CHILDREN</code>: 子节点变化。</li><li><code>DYNAMIC_SLOTS</code>: 动态插槽。</li><li>等等。</li></ul></li><li><p><strong>工作原理：</strong> 在diff过程中，Vue3会首先检查节点的Patch Flags。如果一个节点没有Patch Flags，说明它是静态节点，直接跳过diff。如果一个节点有Patch Flags，则根据标志位来判断需要进行哪些比较和更新。例如，如果一个节点的Patch Flags 只包含<code>TEXT</code>，那么只需要比较和更新文本内容即可，无需比较其他属性或子节点。</p></li><li><p><strong>示例：</strong> 考虑以下模板：</p></li></ul><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>static-class<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamicClass<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello {{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后，<code>p</code>标签对应的<code>VNode</code>可能会包含如下Patch Flags：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 假设 dynamicClass 和 message 是动态的</span>\n<span class="token punctuation">{</span>\n  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">class</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;static-class&#39;</span><span class="token punctuation">,</span> dynamicClass<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">&#39;Hello &#39;</span> <span class="token operator">+</span> message<span class="token punctuation">,</span>\n  <span class="token literal-property property">patchFlag</span><span class="token operator">:</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">CLASS</span> <span class="token operator">|</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">TEXT</span> <span class="token comment">// 表示 class 和 text 内容是动态的</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在diff过程中，Vue3会根据<code>PatchFlags.CLASS | PatchFlags.TEXT</code>知道只需要比较和更新class属性和文本内容，而无需比较其他属性。</p><h2 id="_4-block树结构-block-tree" tabindex="-1"><a class="header-anchor" href="#_4-block树结构-block-tree"><span>4. Block树结构 (Block Tree)</span></a></h2><p>Block树结构将模板划分为一个个Block，每个Block内部的DOM结构是稳定的。</p><ul><li><p><strong>作用：</strong> 进一步缩小diff的范围，提高性能。</p></li><li><p><strong>定义：</strong> 一个Block是一段连续的、结构相同的DOM区域。通常，一个组件的根节点就是一个Block。如果组件内部使用了<code>v-if</code>、<code>v-for</code>等指令，则会创建新的Block。</p></li><li><p><strong>工作原理：</strong> 在渲染时，Vue3会将模板编译成一棵Block树。每个Block都有一个<code>dynamicChildren</code>数组，存储了该Block中所有动态节点的VNode。在diff 程中，Vue3会首先比较Block树的结构。如果Block的key发生变化，则整个Block会被替换。如果Block的<code>key</code>没有变化，则只会比较该Block的<code>dynamicChildren</code>数组，而无需比较Block内部的静态节点。</p></li><li><p><strong>示例：</strong> 考虑以下模板：</p></li></ul><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Static Text 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Dynamic Text {{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Static Text 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>div</code>是一个Block，<code>p</code>标签是静态节点，<code>span</code>标签是动态节点。如果<code>show</code>的值发生变化，只会影响到<code>span</code>标签的渲染和diff，而<code>p</code>标签则会被完全跳过。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p><strong>Patch Flags</strong>通过为动态节点添加标志位，实现了更精准的更新； <strong>Block树结构</strong>通过将模板划分为<code>Block</code>，缩小了<code>diff</code>的范围。</p><p>Block树缩小了diff的范围，而Patch Flags则进一步缩小了每个Block内部需要比较的节点范围。</p>',21)],l={},c=(0,n(6262).A)(l,[["render",function(s,a){return(0,t.uX)(),(0,t.CE)("div",null,e)}]]),p=JSON.parse('{"path":"/blogs/note/vue/7.Vue3xiangbiVue2，tazaidiffsuanfashangzuodeyouhua.html","title":"Vue3相比Vue2，它在diff算法上做的优化","lang":"en-US","frontmatter":{"title":"Vue3相比Vue2，它在diff算法上做的优化","date":"2025-01-06T00:00:00.000Z","categories":["note"],"tags":["Vue"]},"headers":[{"level":2,"title":"1. 静态节点提升 (Static Hoisting)","slug":"_1-静态节点提升-static-hoisting","link":"#_1-静态节点提升-static-hoisting","children":[]},{"level":2,"title":"2. 基于最长递增子序列 (Longest Increasing Subsequence, LIS) 的优化","slug":"_2-基于最长递增子序列-longest-increasing-subsequence-lis-的优化","link":"#_2-基于最长递增子序列-longest-increasing-subsequence-lis-的优化","children":[]},{"level":2,"title":"3. Patch Flags (补丁标志)","slug":"_3-patch-flags-补丁标志","link":"#_3-patch-flags-补丁标志","children":[]},{"level":2,"title":"4. Block树结构 (Block Tree)","slug":"_4-block树结构-block-tree","link":"#_4-block树结构-block-tree","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1737108179000,"updatedTime":1737108179000,"contributors":[{"name":"稀饭","email":"lixifan@ane56.com","commits":1}]},"filePathRelative":"blogs/note/vue/7.Vue3相比Vue2，它在diff算法上做的优化.md"}')}}]);