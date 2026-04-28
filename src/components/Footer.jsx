import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-[#0F1E35] text-white mt-20">
      {/* Left wavy decoration */}
      <div className="absolute -top-6 left-0 w-[500px] h-7">
        <svg viewBox="0 0 500 24" className="w-full h-full scale-y-[-1]" preserveAspectRatio="none">
          <path d="M0,0 Q125,24 250,12 T500,0 L500,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Right wavy decoration */}
      <div className="absolute -top-3 right-60 w-[400px] h-3">
        <svg viewBox="0 0 500 30" className="w-full h-full scale-y-[-1]" preserveAspectRatio="none">
          <path d="M0,0 Q125,12 250,24 T500,0 L500,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-3">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 italic">About Dr. Osaren Emokpae</h3>
          <p className="text-gray-300 text-sm">Scholar • Apostle • Enterpreneur</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 italic">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link to="/teaching">Teachings</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link to="/research">Research</Link>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-bold mb-4 italic">Contact Us</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 text-sm focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 text-sm focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="3"
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 text-sm focus:outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#6B0F1A] hover:bg-red-800 transition px-10 py-2 rounded-lg text-sm font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="ml-8 pb-8">
        <p className="text-start text-gray-400 text-sm">
          © 2026 Dr. Osaren Emokpae All rights reserved.
        </p>
        <a href="https://it-portfolio-admin.onrender.com" className='text-xs text-gray-700 ml-4'>Control</a>
      </div>
    </footer>
  );
}