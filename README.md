# My Blog
forked from taxonomy by shadcn

## Bugs
* [ ] MainNav components has a list-unique-key problem
* [ ] latex support a little weird(now use script to remove duplicate latex)
* [ ] vercel dont support sqlite, use vercel postgres or suspase or planetscale instead

## TODOs
不着急，大概也不会做

* [x] 首页只加载 10 个 post
* [x] latex support
  - 实现稍微不太好，有渲染后和渲染前的 latex 文字都显示的情况，现在是将其用 script 在页面加载完后执行去掉特定 class,但希望能从根本解决（但可能很困难，我对 taxonomy 代码理解的不多）(move to bugs)
* [x] blog 界面添加翻页功能
* [ ] post-list is shit, need to refactor
* [x] hint 做成和 post 一样的
  - 还可以改进改进
* [ ] add comment
  - sqlite not supported by vercel
* [ ] i18n support
  - may need to use i18n-next or some libraries, cause it doesn't work good now
* [ ] 添加 update_time 属性
* [ ] 添加 tag 功能
* [ ] 添加搜索功能
* [ ] 添加显示 tweet 功能（需要理解 server component 好像）
