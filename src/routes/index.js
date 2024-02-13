import { LayoutAccount, LayoutAdminNoHeader, LayoutHeaderOnly } from '@/components/Layout';
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
import HomeAdminPage from '@/adminpage/HomeAdmin';
import LayoutAdmin from '@/components/Layout/LayoutAdmin';
import OrderPageAdmin from '@/adminpage/Order';
import InconePageAdmin from '@/adminpage/Incone';
import ProjectPageAdmin from '@/adminpage/Order';
import ContactPageAdmin from '@/adminpage/ContactPageAdmin';
import ManangerAccount from '@/adminpage/ManangerAccount';
import WareHouse from '@/adminpage/WareHouse';
import Shippement from '@/adminpage/Shippement';
import Notifications from '@/adminpage/Notifications';
import ReportsAndStatistics from '@/adminpage/ReportsAndStatistics';
import Contact from '@/pages/Contact';
// import { LayoutHeaderAdmin } from '@/components/LayoutAdmin';
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
    {
        path: '/contact',
        component: Contact,
    },

    // admin
    {
        path: '/admin',
        component: HomeAdminPage,
        layout: LayoutAdmin,
    },
    {
        path: '/admin/incone',
        component: InconePageAdmin,
        layout: LayoutAdmin,
    },
    {
        path: '/admin/project',
        component: ProjectPageAdmin,
        layout: LayoutAdmin,
    },
    {
        path: '/admin/account',
        component: ManangerAccount,
        layout: LayoutAdmin,
    },
    {
        path: '/admin/contact',
        component: ContactPageAdmin,
        layout: LayoutAdminNoHeader,
    },
    {
        path: '/admin/ware-house',
        component: WareHouse,
        layout: LayoutAdminNoHeader,
    },
    {
        path: '/admin/order',
        component: OrderPageAdmin,
        layout: LayoutAdmin,
    },
    {
        path: '/admin/shippement',
        component: Shippement,
        layout: LayoutAdmin,
    },
    {
        path: '/admin/notification',
        component: Notifications,
        layout: LayoutAdminNoHeader,
    },

    {
        path: '/admin/reports-statistics',
        component: ReportsAndStatistics,
        layout: LayoutAdminNoHeader,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
