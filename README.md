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
