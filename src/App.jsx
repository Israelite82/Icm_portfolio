import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Research from './pages/Research.jsx';
import Blog from './pages/Blog.jsx';
import Books from './pages/Books.jsx';
import Teaching from './pages/Teaching.jsx';
import './App.css';

function AppContent() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#071324] to-[#071324] text-white">
      {/* Only show Navbar on OTHER pages, NOT home */}
      {location.pathname !== '/' && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/books" element={<Books />} />
        <Route path="/teaching" element={<Teaching />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}