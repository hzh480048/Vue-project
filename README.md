###这是一个项目

##用（传统方式）命令行把修改过后的代码上传到github？？
1.git add .
2.git commit -m "提交信息"
3.git pushu

#制作首页App组件
1.完成 Header 区域，使用的是 Mint-ui 中的 Header组件
2.制作底部的 Tabbar 区域，使用的是mui 的Tabbar.html
+在制作 购物车 小图标的时候，操作会相对多一些
+先把  扩展图标 css样式，拷贝到 项目中
+拷贝  扩展字体库  ttf 文件 ，到项目中
+为 购物车 小图标 ，添加样式如 mui-icon mui-icon-extra mui-icon-extra-cart
3.要在中间区域放置一个 router-view 来展示路由匹配的组件

##改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

##制作首页轮播图布局

##加载首页轮播图数据
1.数据如何，获取呢，使用 vue-resource
2.使用vue-resource 的 this.$http.get 获取数据
3.获取到的数据，要保存到 data身上
4.使用v-for 循环渲染 每个 item项

##改造 新闻资讯 路由链接

##新闻资讯 页面制作
1.绘制界面
2.使用vue-resource 获取数据
3.渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情
1.把列表中的每一项改造为 router-link 同时在跳转的时候应该提供唯一个ID标识符
2.创建新闻详情的组件页面 NewsInfo.vue
3.在 路由模块中，将 新闻详情的 路由地址 和组件对应起来


##单独封装一个 comment.vue 评论子组件
1.先创建一个 单独的comment.vue 组件模板
2.在需要使用 comment 组件的 页面中 ，先手动 导入comment组件
+`import comment from './comment.vue'
3.在父组件中，使用·components· 属性，将刚才导入 comment 组件，注册为组件的子组件`
4.将注册子组件时候的，注册名称，以 标签形式，在页面中 引用即可


##实现点击加载更多评论功能
1.为加载更多按钮，绑定点击事件，在事件中，请求 下一页数据
2.点击加载更多，让 pageIndex++，然后重新调用 this.getComments()方法重新获取最新一页的数据
3.为防止 新数据 覆盖老数据的情况,我们在 点击加载更多的时候,每当获取到新数据,应该让老数据调用 数组的 concat 方法,拼接上新数组

##发表评论
1.把文本框做双向数据绑定
2.为发表按钮绑定一个事件
3.校验评论内容是否为空,如果为空,则Toast提是用户,内容不能为空
4.通过vue-resource 发送一个请求,把评论内容提交给服务器
5.当发表评论OK后,重新刷新列表,以查看最新的评论
+如果调用getComments方法重新刷新评论列表的话,可能只能得到 最后一页的评论,前面的获取不到
+换一种思路:当评论成功后,在客户端,手动拼接一个 最新的品论对象,然后调用数组的 unshift方法,把最新评论,追加 开头

##改造 图片分析按钮为 路由链接并显示对应组件页面

##绘制  图片列表 组件页面结构并美化样式
1.顶部滑动条
2.底部图片列表
##制作顶部滑动条
1.需要借助  mui 中 的 tab-top-webview-main.html
2.需要把 slider 区域的 mui-fullscreen 类去掉
3。滑动条无法正常触发滑动，同过检查官方文档，发现这是JS组件，需要被初始化一下
+导入 mui.js
+调用官方提供的 方式去初始化
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
4.我们在初始化 滑动条的时候导入 mui.js，但是控制台报错·mui.min.js:946 Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
+经过合理的推测，觉得，可能时mui.js 中用到了'caller','callee',and
'argyments'东西，但是，webpack打包好的bundle.js中，默认时启用严格模式的，所以，这两者冲突；
+解决方案：
1.把mui.js 中的非严格模式的代码改掉；但是不现实，
2.把webpack打包时候的严格模式禁用掉


5.赶紧进入 图片分享页面的时候，滑动条无法正常工作，经过我们认真分析，发现，如果初始化滑动条
，必须要等 Dom·元素加载完毕，所以我们把初始化 滑动条代码放到mounted生命周期函数中

6.当 滑动条 调试OK 后发现 tabbar无法工作，我们需要把tabbar中的按钮样式中mui-tab-item 重新改一下名
7.获取所有分类，并渲染 风雷列表

##制作图片分类区域
1.图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的组件 ’lazy-load‘
2.根据‘lazy-load’的使用文档，尝试使用
3.渲染图片列表数据

##实现了 图片列表的 懒加载改造和 样式美化
1.在改造li为 router-link 标签时，要使用tag属性指定时那中元素

##实现 详情页面的布局和美化，同时获取数据渲染页面

##实现 图片详情中 的缩略图
1.使用插件 vue-preview这个 缩略图插件
2.获取所有图片列表，然后使用v-for指令渲染


##绘制 商品列表 页面基本结构并美化



## 尝试在手机上 进行项目的预览和测试
1.确保手机正常
2.要保存 手机和假发羡慕的电脑 处于同一个WIFI环境中，也就是说手机可以访问到电脑的IP
3.打开自己的 项目中 oackage.json 文件，在dev 脚本中，添加一个 --host指令，把当前电脑
的WIFI ip地址，设置为 --host 的指令值
+ 如何查看自己电脑所处的WIFI 的IP呢，在CMD终端中运行 ipconfig，查看 无线网的IP地址