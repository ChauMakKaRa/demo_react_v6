import { LayoutHeaderOnly } from '@/components/Layout';
import Home from '@/pages/Home';
import Follwing from '@/pages/Follwing';
import Upload from '@/pages/Upload';
import Detail from '@/pages/Detail';
import DetailProduct from '@/pages/Detail/DetailProduct';
import Login from '@/pages/Account/Login';
import Register from '@/pages/Account/Register';
import Cart from '@/pages/Cart';
import Pay from '@/pages/Pay';
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/follwing',
        component: Follwing,
    },
    {
        path: '/upload',
        component: Upload,
        layout: LayoutHeaderOnly,
    },
    {
        path: '/detail',
        component: Detail,
    },
    {
        path: '/detail-product',
        component: DetailProduct,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/pay',
        component: Pay,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
