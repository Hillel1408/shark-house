import classNames from 'classnames';
import { Header } from './components/Header';
import { AboutUs } from './pages/AboutUs';
import { Delivery } from './pages/Delivery';
import { Catalog } from './pages/Catalog';
import { Order } from './pages/ Order';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.scss';

function App() {
    return (
        <Router basename="shark-house">
            <Header />
            <main className={classNames('_container', 'main')}>
                <Routes>
                    <Route exact path="/" element={<Catalog />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="/order" element={<Order />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
