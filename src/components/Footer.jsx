import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const API_URL = "https://api.osarenemokpae.com/api";
export default function Footer() {
  const [footerData, setFooterData] = useState({
    brand: {
      title: 'Dr. Osaren Emokpae',
      subtitle: 'Scholar • Apostle • Entrepreneur'
    },
    quick_links: [
      { name: 'Home', link: '/' },
      { name: 'Teachings', link: '/teaching' },
      { name: 'Research', link: '/research' }
    ],
    social_links: {
      facebook: null,
      twitter: null,
      instagram: null,
      linkedin: null,
      youtube: null
    },
    copyright: '© 2026 Dr. Osaren Emokpae All rights reserved.',
    cta: {
      title: null,
      button_text: null,
      button_link: null
    }
  });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFooterData();
  }, []);

  const fetchFooterData = async () => {
    try {
      const response = await axios.get(`${API_URL}/footer`);
      const data = response.data.data || response.data;
      
      if (data) {
        setFooterData({
          brand: {
            title: data.brand?.title || 'Dr. Osaren Emokpae',
            subtitle: data.brand?.subtitle || 'Scholar • Apostle • Entrepreneur'
          },
          quick_links: data.quick_links || [
            { name: 'Home', link: '/' },
            { name: 'Teachings', link: '/teaching' },
            { name: 'Research', link: '/research' }
          ],
          social_links: data.social_links || {},
          copyright: data.copyright || '© 2026 Dr. Osaren Emokpae All rights reserved.',
          cta: data.cta || {}
        });
      }
    } catch (error) {
      console.error("Error fetching footer data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <footer className="relative bg-[#0F1E35] text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center text-gray-400">Loading footer...</div>
        </div>
      </footer>
    );
  }

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

      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">
        {/* About/Brand Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 italic">{footerData.brand.title}</h3>
          <p className="text-gray-300 text-sm">{footerData.brand.subtitle}</p>
          
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            {footerData.social_links.facebook && (
              <a href={footerData.social_links.facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            )}
            {footerData.social_links.twitter && (
              <a href={footerData.social_links.twitter} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
            )}
            {footerData.social_links.instagram && (
              <a href={footerData.social_links.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="17" y1="7" x2="17.01" y2="7"/>
                </svg>
              </a>
            )}
            {footerData.social_links.linkedin && (
              <a href={footerData.social_links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            )}
            {footerData.social_links.youtube && (
              <a href={footerData.social_links.youtube} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 italic">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {footerData.quick_links.map((link, index) => (
              <li key={index} className="hover:text-white cursor-pointer">
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Section (Optional) */}
        {footerData.cta.title && (
          <div>
            <h3 className="text-xl font-bold mb-4 italic">{footerData.cta.title}</h3>
            {footerData.cta.button_text && footerData.cta.button_link && (
              <a 
                href={footerData.cta.button_link}
                className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-lg text-sm font-semibold"
              >
                {footerData.cta.button_text}
              </a>
            )}
          </div>
        )}
      </div>

      {/* Copyright */}
      <div className="ml-8 pb-8">
        <p className="text-start text-gray-400 text-sm">
          {footerData.copyright}
        </p>
        <a href="https://it-portfolio-admin.onrender.com" className='text-xs text-gray-500 ml-4 hover:text-gray-400 transition'>
          Control
        </a>
      </div>
    </footer>
  );
}