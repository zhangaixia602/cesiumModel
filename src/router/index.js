import {createRouter,createWebHistory} from 'vue-router';
import HomePage from '@/views/HomePage';
import AboutPage from '@/views/AboutPage';
import ModelPage from '@/views/ModelPage';
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
    },
	{
		path:'/model',
		name:'模型示例',
		component:ModelPage
	}
];
const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
});
export default router