import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../pages/home/Home')
const Category = () => import('../pages/category/Category')
const Cart = () => import('../pages/cart/Cart')
const Profile = () => import('../pages/profile/Profile')
const Detail = () => import('../pages/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router