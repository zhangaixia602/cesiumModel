import {createRouter,createWebHistory} from 'vue-router';
import HomePage from '@/views/HomePage';
import AboutPage from '@/views/AboutPage';
const routes =[
    {
        path:'/',
        name:'首页',
        component:HomePage
    },
    {
        path:'/about',
        name:'关于我们',
        component:AboutPage
    }
];
const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
});
export default router