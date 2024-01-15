import { LayoutHeaderOnly } from '@/components/Layout';
import Home from '@/pages/Home';
import Follwing from '@/pages/Follwing';
import Upload from '@/pages/Upload';
import Detail from '@/pages/Detail';
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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
