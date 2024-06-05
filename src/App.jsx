import { Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage/ContactPage';
import BlogPage from './pages/BlogPage/BlogPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProdcutPage from './pages/ProductPage/ProdcutPage';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/product" element={<ProdcutPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
