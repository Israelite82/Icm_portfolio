import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://api.osarenemokpae.com/api";

export default function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  // State for homepage settings from admin
  const [form, setForm] = useState({
    headline: "",
    subtext: "",
  });
  const [heroImage, setHeroImage] = useState(null);
  const [visibility, setVisibility] = useState({
    Hero: true,
    Teaching: true,
    Blog: true,
    Books: true,
  });

  useEffect(() => {
    // Fetch homepage settings from admin API
    axios
      .get(`${API_URL}/homepage`)
      .then((res) => {
        const homepageData = res.data.data || res.data;
        console.log("Homepage data:", homepageData);

        // --- CRITICAL CHANGE: Only fetch data for the SECOND slide ---
        if (homepageData.hero) {
          // This data is ONLY for the second slide
          setForm({
            headline: homepageData.hero.headline || "Welcome",
            subtext: homepageData.hero.subtext || "",
          });

          if (homepageData.hero.background_image) {
            setHeroImage(homepageData.hero.background_image);
          }
        }

        // Visibility from sections object
        if (homepageData.sections && typeof homepageData.sections === "object") {
          const sectionNames = Object.values(homepageData.sections).map(
            (section) => section.name
          );

          setVisibility({
            Hero: sectionNames.includes("Hero"),
            Teaching: sectionNames.includes("Featured teaching"),
            Blog: sectionNames.includes("Featured blog"),
            Books: sectionNames.includes("Featured book"),
          });
        }
      })
      .catch((err) => console.error("Error fetching homepage settings:", err));

    // Fetch books
    axios
      .get(`${API_URL}/books`)
      .then((res) => {
        const booksData = res.data.data?.data || res.data.data || res.data;
        setBooks(Array.isArray(booksData) ? booksData.slice(0, 4) : []);
      })
      .catch((err) => console.error("Error fetching books:", err));

    // Fetch blog posts
    axios
      .get(`${API_URL}/blog-posts`)
      .then((res) => {
        const blogData = res.data.data || [];
        setBlogPosts(Array.isArray(blogData) ? blogData.slice(0, 3) : []);
      })
      .catch((err) => console.error("Error fetching blog posts:", err));
  }, []);

  // --- CRITICAL CHANGE: Slides are now separate: First Slide (Hardcoded), Second Slide (Dynamic) ---
  const slides = [
    {
      // SLIDE 1: PERFECTLY HARDCODED - Will NEVER change
      image: "/bioImg.png",
      title: "Dr. Osaren Emokpae",
      subtitle:
        "Scholar▫️Teacher▫️Christian Leader▫️Writer▫️Entrepreneur",
      hasText: true,
    },
    {
       image: heroImage || "/slide2.png",
    title: form.headline || "Welcome",
    subtitle: form.subtext || "",
    hasText: true,
    },
    {
      image: "/slide3.png",
      hasText: false,
    },
    {
      image: "/slide4.png",
      hasText: false,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4 md:py-6 relative">
        <img
          src="/heroImg.png"
          alt="Hero"
          className="w-32 h-12 md:w-45 md:h-13"
        />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50 ml-16"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        <ul className="hidden md:flex gap-10 text-sm text-gray-300 ml-auto mr-20">
          <li className="hover:text-[#F2E8D5] cursor-pointer">
            <Link to="/about" className="text-gray-300 hover:text-[-[#473be9]">About</Link>
          </li>
          <li className="hover:text-[#F2E8D5] cursor-pointer">
            <Link to="/research" className="text-gray-300 hover:text-[-[#473be9]">Research</Link>
          </li>
          <li className="hover:text-[#F2E8D5] cursor-pointer">
            <Link to="/blog" className="text-gray-300 hover:text-[-[#473be9]">Blog</Link>
          </li>
          <li className="hover:text-[#F2E8D5] cursor-pointer">
            <Link to="/books" className="text-gray-300 hover:text-[-[#473be9]">Books</Link>
          </li>
          <li className="hover:text-[#F2E8D5] cursor-pointer">
            <Link to="/teaching" className="text-gray-300 hover:text-[-[#473be9]">Teaching</Link>
          </li>
        </ul>

        <button className="bg-[#6B0F1A] hover:bg-red-800 transition px-4 md:px-5 py-2 md:py-3 rounded-lg text-xs md:text-sm">
          Subscribe
        </button>

        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#0b1227]/80 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300"
          >
            ×
          </button>
          <div className="flex flex-col p-6 pt-20 gap-6">
            <Link
              to="/about"
              className="text-gray-300 hover:text-[#F2E8D5] text-lg"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/research"
              className="text-gray-300 hover:text-[#F2E8D5] text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Research
            </Link>
            <Link
              to="/blog"
              className="text-gray-300 hover:text-[#F2E8D5] text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/books"
              className="text-gray-300 hover:text-[#F2E8D5] text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Books
            </Link>
            <Link
              to="/teaching"
              className="text-gray-300 hover:text-[#F2E8D5] text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Teaching
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO CARD */}
      <section className="relative w-full min-h-[400px] md:min-h-[600px] px-4 md:px-12 mt-2 mb-10 overflow-hidden">
        {/* Wine curved backgrounds - Hidden on mobile */}
        <div
          className="hidden md:block absolute top-0 left-0 w-[600px] h-full bg-[#6B0F1A] z-0"
          style={{ clipPath: "polygon(0 0, 100% 0, 80% 70%, 0 100%)" }}
        ></div>

        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-full bg-[#6B0F1A] z-0"></div>

        <div
          className="hidden md:block absolute top-0 right-0 w-[400px] h-full bg-[#6B0F1A] z-0"
          style={{ clipPath: "polygon(20% 0, 100% 0, 100% 80%, 0 100%)" }}
        ></div>

        {/* Mobile background */}
        <div className="md:hidden absolute inset-0 bg-[#6B0F1A] z-0"></div>

        {/* Wrapper */}
        <div className="relative z-10 mt-4 max-w-full md:max-w-[1100px] h-auto md:h-[600px] mx-auto">
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
            {slides.map((slide, index) => (
  <div key={index} className="min-w-full h-full">
    {slide.hasText ? (
      // Slides WITH text (Slide 1 and 2)
      <div className={`flex flex-col md:flex-row bg-[#0b1227] shadow-lg rounded-2xl overflow-hidden h-full`}>
    <img
  src={slide.image}
  alt="Biography"
  className={`w-full ${index === 1 ? 'h-96' : 'h-65'} md:h-full object-cover object-top ${index === 1 ? 'md:w-3/5' : 'md:w-1/2'}`}
/>
       <div className={`p-6 pb-8 md:p-12 md:relative md:-top-20 flex flex-col justify-center text-white ${index === 1 ? 'md:w-2/5' : 'md:w-1/2'}`}>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 italic">
            {slide.title}
          </h1>
          <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-12">
            {slide.subtitle}
          </p>
          <button
            onClick={() => navigate("/about")}
            className="bg-blue-600 hover:bg-blue-700 transition w-fit px-6 md:px-8 py-2 md:ml-6 rounded-lg text-sm"
          >
            Read Full Bio
          </button>
        </div>
      </div>
    ) : (
      
      <div className="bg-[#0b1227] shadow-lg rounded-2xl overflow-hidden h-full flex flex-col">
        <img
          src={slide.image}
          alt="Slide"
          className="w-full h-96"
        />
        {/* Empty div with same height as text section on mobile */}
        <div className="h-[230px] md:hidden"></div>
      </div>
    )}
  </div>
))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 md:-left-1 top-[50%] md:top-[75%] -translate-y-1/2 md:-translate-x-1/2 z-30 
            w-8 h-8 md:w-10 md:h-10 bg-[#15263B]/40 hover:bg-[#0b1227]/80 rounded-full flex items-center
             justify-center text-white text-xl md:text-2xl transition"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-0 top-[50%] md:top-[75%] -translate-y-1/2 md:translate-x-1/2 z-30
             w-8 h-8 md:w-10 md:h-10 bg-[#0b1227]/60 hover:bg-[#0b1227]/80 rounded-full flex items-center
              justify-center text-white text-xl md:text-2xl transition"
          >
            ›
          </button>
        </div>
      </section>

      {/* Slider indicators */}
      <div className="flex justify-center gap-3 md:gap-4 -mt-0 mb-6">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full cursor-pointer transition ${
              currentSlide === index ? "bg-white" : "bg-white/40"
            }`}
          ></span>
        ))}
      </div>

      {/* BIOGRAPHY CARD */}
      <section className="w-full max-w-[1280px] mx-auto px-4 md:px-6 mt-12 md:mt-20">
        <div className="bg-[#f6ecd9] text-gray-800 rounded-2xl p-6 md:p-10 flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 shadow-lg">
          <img
            src="/second-Img.png"
            alt="Biography"
            className="w-full h-65 md:h-[32rem] object-cover rounded-xl"
          />
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

      {/* BOOKS SECTION - Visibility controlled */}
      {visibility.Books && (
        <section className="relative w-full mt-20 md:mt-32 px-4">
          <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-[90%] md:max-w-[74rem] rounded-md -top-10 h-[400px] md:h-[350px] bg-[#6B0F1A] z-0"></div>
          <div className="relative max-w-5xl mx-auto px-2 md:px-4 z-10">
            <div className="bg-white rounded-md p-4 md:p-8 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 place-items-center">
                {books.length > 0
                  ? books.map((book) => (
                      <img
                        key={book.id}
                        src={
                          book.book_cover?.startsWith("http")
                            ? book.book_cover
                            : `https://api.osarenemokpae.com${book.book_cover}`
                        }
                        alt={book.title || book.post_title}
                        className="h-32 md:h-[13rem] w-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => navigate(`/books/${book.id}`)}
                        onError={(e) => {
                          e.target.src = "/book-placeholder.png";
                        }}
                      />
                    ))
                  : [1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-32 md:h-[13rem] w-24 md:w-32 bg-gray-200 rounded animate-pulse"
                      ></div>
                    ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MESSAGE CARDS (BLOG SECTION) - Visibility controlled */}
      {visibility.Blog && (
        <section className="relative max-w-7xl mx-auto px-4 md:px-12 mt-20 md:mt-28">
          <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-[90%] md:max-w-[76rem] rounded-md -top-10 h-auto md:h-[320px] bg-[#16233B] z-0"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            {blogPosts.length > 0
              ? blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-[#f6ecd9] text-gray-800 rounded-md p-5 shadow-lg w-full md:max-w-[310px] h-auto md:h-[280px] md:justify-self-center flex flex-col cursor-pointer hover:shadow-xl transition-shadow duration-300"
                    onClick={() => handleReadMore(post.id)}
                  >
                    <h3 className="font-bold mb-3 text-base md:text-lg line-clamp-2">
                      {post.post_title}
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed mb-4 line-clamp-5 flex-grow">
                      {post.excerpt ||
                        post.content
                          ?.replace(/<[^>]*>/g, "")
                          .substring(0, 200) ||
                        "Click to read more..."}
                    </p>
                    <span className="text-sm font-bold text-[#6B0F1A] hover:underline">
                      Read more →
                    </span>
                  </div>
                ))
              : [1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-[#f6ecd9] rounded-md p-5 shadow-lg w-full md:max-w-[310px] h-auto md:h-[280px] md:justify-self-center"
                  >
                    <div className="h-6 bg-gray-300 rounded animate-pulse mb-3"></div>
                    <div className="h-20 bg-gray-300 rounded animate-pulse mb-4"></div>
                    <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
                  </div>
                ))}
          </div>
        </section>
      )}

      {/* MEDIA */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-20 md:mt-32 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <img src="/flyer1.png" alt="" className="w-full rounded-lg" />
          <img src="/flyer2.png" alt="" className="w-full rounded-lg" />
          <img src="/flyer3.png" alt="" className="w-full rounded-lg" />
        </div>
      </section>
    </>
  );
}