import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://api.osarenemokpae.com/api";

export default function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);

  const [visibility, setVisibility] = useState({
    Hero: true,
    Teaching: true,
    Blog: true,
    Books: true,
  });

  const [slides, setSlides] = useState([
    {
      id: null,
      image: "/bioImg.png",
      title: "Dr. Osaren Emokpae",
      subtitle: "Scholar▫️Teacher▫️Christian Leader▫️Writer▫️Entrepreneur",
      hasText: true,
      button_text: "Read Full Bio",
      button_link: "/about"
    },
    {
      id: null,
      image: "/slide2.png",
      title: "Welcome",
      subtitle: "",
      hasText: true,
      button_text: "Read Full Bio",
      button_link: "/about"
    },
    {
      id: null,
      image: "/slide3.png",
      title: null,
      subtitle: null,
      hasText: false,
      button_text: null,
      button_link: null
    },
    {
      id: null,
      image: "/slide4.png",
      title: null,
      subtitle: null,
      hasText: false,
      button_text: null,
      button_link: null
    }
  ]);

  useEffect(() => {
    const fetchHomepageData = async () => {
      try {
        const response = await axios.get(`${API_URL}/homepage`);
        const data = response.data.data || response.data;
        console.log("Homepage data:", data);
        
        if (data.slides && data.slides.length === 4) {
          const formattedSlides = data.slides.map(slide => ({
            id: slide.id,
            image: slide.image,
            title: slide.title,
            subtitle: slide.subtitle,
            hasText: slide.has_text,
            button_text: slide.button_text,
            button_link: slide.button_link
          }));
          setSlides(formattedSlides);
        }
        
        if (data.sections && typeof data.sections === "object") {
          const sectionNames = Object.values(data.sections).map(
            (section) => section.name
          );
          setVisibility({
            Hero: sectionNames.includes("Hero"),
            Teaching: sectionNames.includes("Featured teaching"),
            Blog: sectionNames.includes("Featured blog"),
            Books: sectionNames.includes("Featured book"),
          });
        }
        
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      }
    };

    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/blog-posts`);
        const blogData = response.data.data || [];
        setBlogPosts(Array.isArray(blogData) ? blogData.slice(0, 3) : []);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchHomepageData();
    fetchBlogPosts();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  if (slides.length === 0) {
    return (
      <div className="min-h-screen bg-[#0b1227] flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4 md:py-6 relative">
        <img src="/heroImg.png" alt="Hero" className="w-32 h-12 md:w-45 md:h-13" />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50 ml-16"
        >
          <span className={`w-6 h-0.5 bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        <ul className="hidden md:flex gap-10 text-sm text-gray-300 ml-auto mr-20">
          <li className="hover:text-[#F2E8D5] cursor-pointer"><Link to="/about">About</Link></li>
          <li className="hover:text-[#F2E8D5] cursor-pointer"><Link to="/research">Research</Link></li>
          <li className="hover:text-[#F2E8D5] cursor-pointer"><Link to="/blog">Blog</Link></li>
          <li className="hover:text-[#F2E8D5] cursor-pointer"><Link to="/books">Books</Link></li>
          <li className="hover:text-[#F2E8D5] cursor-pointer"><Link to="/teaching">Teaching</Link></li>
        </ul>

        <a href="https://www.linkedin.com/in/osaren-emokpae-phd-dba-fbim-frpa-mcid-207b268/" target="_blank" rel="noopener noreferrer">
          <img src="linkedin-white.png" alt="LinkedIn" className="mr-10 hover:scale-125 transition-transform duration-300" />
        </a>

        {menuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setMenuOpen(false)}></div>
        )}

        <div className={`fixed top-0 left-0 h-full w-64 bg-[#0b1227]/80 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300">×</button>
          <div className="flex flex-col p-6 pt-20 gap-6">
            <Link to="/about" className="text-gray-300 hover:text-[#F2E8D5] text-lg" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/research" className="text-gray-300 hover:text-[#F2E8D5] text-lg" onClick={() => setMenuOpen(false)}>Research</Link>
            <Link to="/blog" className="text-gray-300 hover:text-[#F2E8D5] text-lg" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link to="/books" className="text-gray-300 hover:text-[#F2E8D5] text-lg" onClick={() => setMenuOpen(false)}>Books</Link>
            <Link to="/teaching" className="text-gray-300 hover:text-[#F2E8D5] text-lg" onClick={() => setMenuOpen(false)}>Teaching</Link>
          </div>
        </div>
      </nav>

      {/* HERO CAROUSEL */}
      <section className="relative w-full min-h-[400px] md:min-h-[600px] px-4 md:px-12 mt-2 mb-10 overflow-hidden">
        <div className="hidden md:block absolute top-0 left-0 w-[600px] h-full bg-[#6B0F1A] z-0" style={{ clipPath: "polygon(0 0, 100% 0, 80% 70%, 0 100%)" }}></div>
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-full bg-[#6B0F1A] z-0"></div>
        <div className="hidden md:block absolute top-0 right-0 w-[400px] h-full bg-[#6B0F1A] z-0" style={{ clipPath: "polygon(20% 0, 100% 0, 100% 80%, 0 100%)" }}></div>
        <div className="md:hidden absolute inset-0 bg-[#6B0F1A] z-0"></div>

        <div className="relative z-10 mt-4 max-w-full md:max-w-[1100px] h-auto md:h-[600px] mx-auto">
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <div className="flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full h-full">
                  {slide.hasText ? (
                    <div className="flex flex-col md:flex-row bg-[#0b1227] shadow-lg rounded-2xl overflow-hidden h-full">
                      <img
                        src={slide.image}
                        alt="Slide"
                        className={`w-full ${index === 1 ? 'h-96' : 'h-65'} md:h-full object-cover object-top ${index === 1 ? 'md:w-3/5' : 'md:w-1/2'}`}
                        onError={(e) => { e.target.src = index === 0 ? "/bioImg.png" : "/slide2.png"; }}
                      />
                      <div className={`p-6 pb-8 md:p-12 md:relative md:-top-20 flex flex-col justify-center text-white ${index === 1 ? 'md:w-2/5' : 'md:w-1/2'}`}>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 italic">{slide.title}</h1>
                        <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-12">{slide.subtitle}</p>
                        <button onClick={() => navigate(slide.button_link || "/about")} className="bg-blue-600 hover:bg-blue-700 transition w-fit px-6 md:px-8 py-2 md:ml-6 rounded-lg text-sm">
                          {slide.button_text || "Read Full Bio"}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#0b1227] shadow-lg rounded-2xl overflow-hidden h-full flex flex-col">
                      <img src={slide.image} alt="Slide" className="w-full h-96 object-cover" onError={(e) => { e.target.src = `/slide${index + 1}.png`; }} />
                      <div className="h-[240px] md:hidden"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button onClick={prevSlide} className="absolute left-2 md:-left-1 top-[50%] md:top-[50%] -translate-y-1/2 md:-translate-x-1/2 z-30 w-8 h-8 md:w-10 md:h-10 bg-[#15263B]/40 hover:bg-[#0b1227]/80 rounded-full flex items-center justify-center text-white text-xl md:text-2xl transition">‹</button>
          <button onClick={nextSlide} className="absolute right-2 md:right-0 top-[50%] md:top-[50%] -translate-y-1/2 md:translate-x-1/2 z-30 w-8 h-8 md:w-10 md:h-10 bg-[#0b1227]/60 hover:bg-[#0b1227]/80 rounded-full flex items-center justify-center text-white text-xl md:text-2xl transition">›</button>
        </div>
      </section>

      {/* Slider indicators */}
      <div className="flex justify-center gap-3 md:gap-4 -mt-0 mb-6">
        {slides.map((_, index) => (
          <span key={index} onClick={() => goToSlide(index)} className={`w-2 h-2 rounded-full cursor-pointer transition ${currentSlide === index ? "bg-white" : "bg-white/40"}`}></span>
        ))}
      </div>

      {/* BIOGRAPHY CARD */}
      <section className="w-full max-w-[1280px] mx-auto px-4 md:px-6 mt-12 md:mt-20">
        <div className="bg-[#f6ecd9] text-gray-800 rounded-2xl p-6 md:p-6 flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 shadow-lg">
          <img src="/second-Img.png" alt="Biography" className="w-full h-65 md:h-[24rem] object-cover rounded-xl" />
          <p className="text-sm md:text-base leading-relaxed md:mt-14">
            Dr. Osaren Philips Emokpae is an Erudite Scholar, Global Apostle,
            Serial Investor, Management & Marketing Consultant, and unceasing
            philanthropist. He is also a Development Economist, Theologian, and
            expert in organisational leadership, production management,
            strategic planning, managing organisational performance, and
            microfinance banking. He is the author of The Great Expectation,
            Minimum to Maximum.He also co-authored Guilty or Not Guilty and The
            Glory in stewardship.
          </p>
        </div>
      </section>

      {/* BOOKS SECTION - Hardcoded */}
      <section className="relative w-full mt-20 md:mt-32 px-4">
        <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-[90%] md:max-w-[74rem] rounded-md -top-10 h-[360px] bg-[#16233B] z-0"></div>
        <div className="relative max-w-6xl mx-auto px-2 md:px-2 z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 justify-items-center">
            {["homebook1.png", "homebook2.png", "homebook3.png", "homebook4.png"].map((book, index) => (
              <div key={index} className="w-full flex justify-center">
                <img
                  src={book}
                  alt={`Book ${index + 1}`}
                  className="h-[12.5rem] md:h-[24rem] pb-16 -mt-5 w-auto object-contain cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:shadow-xl rounded-lg"
                  onClick={() => window.location.href = `/books/book${index + 1}`}
                  onError={(e) => { e.target.src = "/book-placeholder.png"; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section className="max-w-4xl mx-auto px-4 md:px-2 mt-2 md:mt-1 pb-4 md:pb-2">
        <div className="text-center">
          <p className="text-gray-700 mb-4 font-medium">Click the image below to watch our teachings on YouTube</p>
          <a href="https://www.youtube.com/@theanchor1079" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105 duration-300">
            <div className="bg-red-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-32 h-10 md:w-40 md:h-10">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM10 16.5v-9l6 4.5-6 4.5z"/>
              </svg>
              <p className="text-white text-sm font-semibold mt-3">YouTube Channel</p>
            </div>
          </a>
        </div>
      </section>

      {/* MESSAGE CARDS (BLOG SECTION) */}
      {visibility.Blog && (
        <section className="relative max-w-7xl mx-auto px-4 md:px-12 mt-20 md:mt-18">
          <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-[90%] md:max-w-[76rem] rounded-md -top-10 h-auto md:h-[320px] bg-[#16233B] z-0"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-1">
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <div key={post.id} className="bg-[#f6ecd9] text-gray-800 rounded-md p-5 -mt-5 shadow-lg w-full md:max-w-[350px] h-auto md:h-[280px] md:justify-self-center flex flex-col cursor-pointer hover:shadow-xl transition-shadow duration-300" onClick={() => handleReadMore(post.id)}>
                  <h3 className="font-bold mb-3 text-base md:text-lg line-clamp-2">{post.post_title}</h3>
                  <p className="text-xs md:text-sm leading-relaxed mb-4 line-clamp-5 flex-grow">
                    {post.excerpt || post.content?.replace(/<[^>]*>/g, "").substring(0, 200) || "Click to read more..."}
                  </p>
                  <span className="text-sm font-bold text-[#6B0F1A] hover:underline">Read more →</span>
                </div>
              ))
            ) : (
              [1, 2, 3].map((i) => (
                <div key={i} className="bg-[#f6ecd9] rounded-md p-5 shadow-lg w-full md:max-w-[310px] h-auto md:h-[280px] md:justify-self-center">
                  <div className="h-6 bg-gray-300 rounded animate-pulse mb-3"></div>
                  <div className="h-20 bg-gray-300 rounded animate-pulse mb-4"></div>
                  <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
                </div>
              ))
            )}
          </div>
        </section>
      )}
    </>
  );
}