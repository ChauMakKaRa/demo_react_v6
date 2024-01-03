import { Fragment } from 'react';

import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@/routes';
import DefaultLayouts from './components/Layout/DefaultLayouts';

function App() {
    return (
        <div style={{ padding: '32px' }}>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayouts;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
