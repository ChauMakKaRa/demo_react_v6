import { LayoutAccount, LayoutHeaderOnly } from '@/components/Layout';
import Home from '@/pages/Home';
import Follwing from '@/pages/Follwing';
import Upload from '@/pages/Upload';
import Detail from '@/pages/Detail';
import DetailProduct from '@/pages/Detail/DetailProduct';
import Login from '@/pages/Account/Login';
import Register from '@/pages/Account/Register';
import Cart from '@/pages/Cart';
import Pay from '@/pages/Pay';
import Ordered from '@/pages/Ordered';
import OrderDetail from '@/pages/OrderDetail';
import MyAccount from '@/pages/Account/MyAccount';
import PayMent from '@/pages/Account/PayMent';
import Address from '@/pages/Account/Address';
import ChangePassword from '@/pages/Account/ChangePassword';
import ListOrder from '@/pages/Account/Order';
import ResultSearch from '@/pages/Search';
import Notification from '@/pages/Account/Notification';
import Support from '@/pages/Support';
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
        path: '/my-account/payment',
        component: PayMent,
        layout: LayoutAccount,
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
    {
        path: '/ordered',
        component: Ordered,
    },
    {
        path: '/ordered/detail',
        component: OrderDetail,
    },
    {
        path: '/my-account',
        component: MyAccount,
        layout: LayoutAccount,
    },
    {
        path: '/my-account/address',
        component: Address,
        layout: LayoutAccount,
    },
    {
        path: '/my-account/change-password',
        component: ChangePassword,
        layout: LayoutAccount,
    },
    {
        path: '/my-account/order',
        component: ListOrder,
        layout: LayoutAccount,
    },
    {
        path: '/my-account/notification',
        component: Notification,
        layout: LayoutAccount,
    },
    {
        path: '/search',
        component: ResultSearch,
    },
    {
        path: '/support',
        component: Support,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
