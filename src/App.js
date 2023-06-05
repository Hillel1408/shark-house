import { Header } from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.scss';

function App() {
    return (
        <Router basename="shark-house">
            <Header />
        </Router>
    );
}

export default App;
