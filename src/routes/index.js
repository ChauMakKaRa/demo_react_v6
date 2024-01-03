import { LayoutHeaderOnly } from '@/components/Layout';
import Home from '@/pages/Home';
import Follwing from '@/pages/Follwing';
import Upload from '@/pages/Upload';
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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
