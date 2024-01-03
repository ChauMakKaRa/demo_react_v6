import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';
import Header from './pages/Header';

function App() {
    return (
        <div style={{ padding: '32px' }}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
