"use strict";(self.webpackChunkxifan_blog=self.webpackChunkxifan_blog||[]).push([[7659],{1650:(l,e,i)=>{i.r(e),i.d(e,{comp:()=>f,data:()=>L});var n=i(641);const a=i.p+"assets/img/git常用命令.4c00e176.png",t=(0,n.Fv)('<h2 id="设置当前项目账户" tabindex="-1"><a class="header-anchor" href="#设置当前项目账户"><span>设置当前项目账户</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>   <span class="token function">git</span> config user.name <span class="token string">&quot;your Name&quot;</span> <span class="token comment"># 设置用户名</span>\n   <span class="token function">git</span> config user.email <span class="token string">&quot;gitee@xx.com&quot;</span> <span class="token comment"># 设置邮箱</span>\n   <span class="token function">git</span> config <span class="token parameter variable">--list</span> <span class="token comment"># 查看当前项目配置</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交文件" tabindex="-1"><a class="header-anchor" href="#提交文件"><span>提交文件</span></a></h2><ol><li>git status</li><li>git add 文件夹/文件</li><li>git commit -m &quot;注释&quot;</li><li>git pull（如果冲突需要处理完冲突）</li><li>git diff (比较文件)</li><li>git push</li></ol><h2 id="分支" tabindex="-1"><a class="header-anchor" href="#分支"><span>分支</span></a></h2><ol><li>git branch 分支名（新建分支）</li><li>git branch -d 分支名（删除分支）</li><li>git checkout 分支名（切换分支）</li><li>git branch （查看本地的所有分支）</li><li>git branch -a（查看本地和远程仓库的所有分支）</li><li>git branch -r（查看远程仓库的所有分支）</li><li>git branch -v（查看每一个分支的最后一次提交）</li><li>git fetch（将本地分支与远程保持同步）</li><li>git fetch --all（将本地所有分支与远程保持同步）</li><li>git pull --all（拉取所有分支代码）</li><li>git merge master 分支名（合并分支）</li></ol><h2 id="查看提交信息" tabindex="-1"><a class="header-anchor" href="#查看提交信息"><span>查看提交信息</span></a></h2>',7),s={href:"https://blog.csdn.net/u013252047/article/details/80230781",target:"_blank",rel:"noopener noreferrer"},r={href:"https://www.jianshu.com/p/0805b5d5d893",target:"_blank",rel:"noopener noreferrer"},o=(0,n.Lk)("li",null,"git reflog（查看所有分支的所有操作记录，包括已经被删除的 commit 记录和 reset 的操作）",-1),g=(0,n.Lk)("h2",{id:"回退代码",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#回退代码"},[(0,n.Lk)("span",null,"回退代码")])],-1),c=(0,n.Lk)("ol",null,[(0,n.Lk)("li",null,"git reflog（查看想要回退到哪一步）"),(0,n.Lk)("li",null,"git reset --soft HEAD^ 或者 git reset --hard HEAD~1（回退一步）")],-1),h=(0,n.Lk)("h2",{id:"问题案例",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#问题案例"},[(0,n.Lk)("span",null,"问题案例")])],-1),d={href:"https://blog.csdn.net/u011240877/article/details/76273335",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.jianshu.com/p/f247a27851fb",target:"_blank",rel:"noopener noreferrer"},p=(0,n.Lk)("h2",{id:"使用技巧",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#使用技巧"},[(0,n.Lk)("span",null,"使用技巧")])],-1),k=(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,"git log（q:退出，wq:保存退出）"),(0,n.Lk)("li",null,"git remote set-url --add origin 仓库名 （给 origin 添加一个远程 push 地址）"),(0,n.Lk)("li",null,"git remote -v（查看所有远程地址）")],-1),m=(0,n.Lk)("p",null,[(0,n.Lk)("img",{src:a,alt:" "})],-1),b={},f=(0,i(6262).A)(b,[["render",function(l,e){const i=(0,n.g2)("ExternalLinkIcon");return(0,n.uX)(),(0,n.CE)("div",null,[t,(0,n.Lk)("p",null,[(0,n.Lk)("a",s,[(0,n.eW)("git 命令 log 与 reflog 的比较"),(0,n.bF)(i)])]),(0,n.Lk)("ol",null,[(0,n.Lk)("li",null,[(0,n.eW)("git log（会按提交时间显示所有提交过的版本信息）"),(0,n.Lk)("a",r,[(0,n.eW)("详情"),(0,n.bF)(i)])]),o]),g,c,h,(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,[(0,n.Lk)("p",null,[(0,n.Lk)("a",d,[(0,n.eW)("Git HEAD detached from XXX (git HEAD 游离) 解决办法"),(0,n.bF)(i)])])]),(0,n.Lk)("li",null,[(0,n.Lk)("p",null,[(0,n.Lk)("a",u,[(0,n.eW)("git 提交到 HEAD detached 导致代码丢失"),(0,n.bF)(i)])])])]),p,k,m])}]]),L=JSON.parse('{"path":"/blogs/note/gongchenghua/gitchangyongmingling/gitchangyongmingling.html","title":"git常用命令","lang":"en-US","frontmatter":{"title":"git常用命令","date":"2017-05-11T00:00:00.000Z","categories":["note"],"tags":["Git"]},"headers":[{"level":2,"title":"设置当前项目账户","slug":"设置当前项目账户","link":"#设置当前项目账户","children":[]},{"level":2,"title":"提交文件","slug":"提交文件","link":"#提交文件","children":[]},{"level":2,"title":"分支","slug":"分支","link":"#分支","children":[]},{"level":2,"title":"查看提交信息","slug":"查看提交信息","link":"#查看提交信息","children":[]},{"level":2,"title":"回退代码","slug":"回退代码","link":"#回退代码","children":[]},{"level":2,"title":"问题案例","slug":"问题案例","link":"#问题案例","children":[]},{"level":2,"title":"使用技巧","slug":"使用技巧","link":"#使用技巧","children":[]}],"git":{"createdTime":1737108179000,"updatedTime":1737108179000,"contributors":[{"name":"稀饭","email":"lixifan@ane56.com","commits":1}]},"filePathRelative":"blogs/note/工程化/git常用命令/git常用命令.md"}')}}]);