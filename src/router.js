import VueRouter from 'vue-router'
import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Search from './components/tabbar/Search.vue'
import Shopcart from './components/tabbar/Shopcart.vue'
import newlist from './components/newlist/newlist.vue'
import newinfo from './components/newlist/newinfo.vue'
import phtolist from './components/phtolist/phtolist.vue'
import phtoinfo from './components/phtolist/phtoinfo.vue'
import shopping from './components/shopping/shopping.vue'
import shoppinginfo from './components/shopping/shoppinginfo.vue'
import shoppingdesc from './components/shopping/shoppingDesc.vue'
import shoppingcomment from './components/shopping/shoppingcomment.vue'

var router = new VueRouter({
	routes:[
	{path:'/',component:Home},
	{path:'/home',component:Home},
	{path:'/member',component:Member},
	{path:'/search',component:Search },
	{path:'/shopcart',component:Shopcart},
	{path:'/home/newlist',component:newlist},
	{path:'/home/newinfo/:id',component:newinfo},
	{path:'/home/phtolist',component:phtolist},
	{path:'/home/phtoinfo/:id',component:phtoinfo},
	{path:'/home/shopping',component:shopping},
	{path:'/home/shoppinginfo/:id',component:shoppinginfo},
	{path:'/home/shoppingdesc/:id',component:shoppingdesc,name:'desc'},
	{path:'/home/shoppingcomment/:id',component:shoppingcomment,name:'shoppingcomment'}
	
	],
	linkActiveClass:'mui-active'
})

export default router
