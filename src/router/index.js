import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile')
const Info = () => import('@/views/info')
const Test = () => import('@/views/test')
const UserInfo = () => import('@/views/profile/UserInfo')
const Login = () => import('@/views/Login/login')
const Article = () => import('@/views/Article')
const Error403 = () => import('@/views/403')
const ConfessionalWall = () => import('@/views/confessionalWall/ConfessionalWall')
const routes = [
    {
        path: '',
        redirect: '/home',
        meta: {
            keepAlive: true //需要被缓存的组件
        },
    },
    {
        path: '/home',
        meta: {
            keepAlive: true //需要被缓存的组件
        },
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/info/:id',
        component: Info,
        meta: {
            isShowTabbar: false,
        },
    },
    {
        path: '/test/:id',
        component: Test,
        meta: {
            isShowTabbar: false,
        },
    },
    {
        path: '/userinfo',
        component: UserInfo,
        meta: {
            isShowTabbar: false,
            authRequired: true
        },
    },
    {
        path: '/login',
        component: Login,
        meta: {
            isShowTabbar: false,

        },
    },
    {
        path: '/article/:id',
        meta: {
            isShowTabbar: false,
        },
        component: Article
    },
    {
        path: '/confessionalWall',
        meta: {
            isShowTabbar: false,
        },
        component: ConfessionalWall
    },
    {
        path: '/403',
        meta: {
            isShowTabbar: false,
        },
        component: Error403
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

//判断是否登录，如果没登陆跳转到登录页面
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("Authorization")
    if (to.meta.authRequired === true && !token) next({path: '/login'})
    else {
        next();
    }
})
export default router
