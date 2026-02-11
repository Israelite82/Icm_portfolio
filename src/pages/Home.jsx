import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Array of your slide data
  const slides = [
    {
      image: "/bioImg.png",
      title: "Dr. Osaren Emokpae",
      subtitle: "Scholar▫️Teacher▫️Christian Leader▫️Writer▫️Entrepreneur",
      hasText: true,
    },
    {
      image: "/slide2.png",
      hasText: false,
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

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 4);
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
  };

  // Function to go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4 md:py-6 relative">
        {/* Logo */}
        <img src="/heroImg.png" alt="Hero" className="w-32 h-12 md:w-45 md:h-16" />

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50 ml-16"
        >
          <span className={`w-6 h-0.5 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-10 text-sm text-gray-300 ml-auto mr-20">
          <li className="hover:text-[#F2E8D5] cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-[#F2E8D5] cursor-pointer">
            <Link to="/research">Research</Link>
          </li>
          <li className="hover:text-[#F2E8D5] cursor-pointer">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="hover:text-[#F2E8D5] cursor-pointer">
            <Link to="/books">Books</Link>
          </li>
          <li className="hover:text-[#F2E8D5] cursor-pointer">
            <Link to="/teaching">Teaching</Link>
          </li>
        </ul>

        {/* Subscribe Button - Always Visible */}
        <button className="bg-[#6B0F1A] hover:bg-red-800 transition px-4 md:px-5 py-2 md:py-3 rounded-lg text-xs md:text-sm">
          Subscribe
        </button>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setMenuOpen(false)}></div>
        )}

{/* Mobile Menu Drawer - Slides from Left */}
<div
  className={`fixed top-0 left-0 h-full w-64 bg-[#0b1227]/80 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
    menuOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
  {/* Close X Button */}
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
          {/* Slider container */}
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full h-full">
                  {slide.hasText ? (
                    // Slide 1: Stack on mobile, side-by-side on desktop
                    <div className="flex flex-col md:grid md:grid-cols-2 bg-[#0b1227] shadow-lg h-full rounded-2xl overflow-hidden">
                      <img
                        src={slide.image}
                        alt="Biography"
                        className="w-full h-65 md:h-full object-cover"
                      />
                      <div className="p-6 md:p-12 md:relative md:-top-20 flex flex-col justify-center text-white">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 italic">
                          {slide.title}
                        </h1>
                        <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-12">
                          {slide.subtitle}
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 transition w-fit px-6 md:px-8 py-2 md:ml-6 rounded-lg text-sm">
                          Read Full Bio
                        </button>
                      </div>
                    </div>
                  ) : (
                    // Slides 2, 3, 4: Full-width image
                    <div className="bg-[#0b1227] shadow-lg h-full rounded-2xl overflow-hidden">
                      <img
                        src={slide.image}
                        alt="Slide"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Buttons */}
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

      {/* BOOKS SECTION */}
      <section className="relative w-full mt-20 md:mt-32 px-4">
        {/* Wine background */}
        <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-[90%] md:max-w-[74rem] rounded-md -top-10 h-[400px] md:h-[350px] bg-[#6B0F1A] z-0"></div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-2 md:px-4 z-10">
          <div className="bg-white rounded-md p-4 md:p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 place-items-center">
              {["/book1.png", "/book2.png", "/book3.png", "/book4.png"].map(
                (book, i) => (
                  <img
                    key={i}
                    src={book}
                    alt="Book"
                    className="h-32 md:h-[13rem] w-auto object-contain"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MESSAGE CARDS */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-12 mt-20 md:mt-28">
        <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-[90%] md:max-w-[76rem] rounded-md -top-10 h-auto md:h-[320px] bg-[#16233B] z-0"></div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
          {[
            {
              title: "Faith and Forward Focus",
              text: `"I can do all things through Christ who strengthens me" (Philippians 4:13).A new year is a new season, full of 
                  opportunities. To move forward, release last year's failures, disappointments, and distractions. Press on with 
                  faith, knowing that God is your greatest resource. You are not self-made—you are God-designed. 
                  Embrace the treasures He has prepared for you this year`,
            },
            {
              title: "Let Go and Unlock Potential",
              text: `Let go of the past and make room for what's ahead. Whatever weighed you down last year—failures,
               offenses, or even past successes—release it. Your performance, growth, and breakthroughs begin with 
               faith in God, your ultimate resource. Trust that this year is full of new opportunities,
                hidden treasures, and divine favor waiting for you. .`,
            },
            {
              title: "Clarity, Strategy and Good News",
              text: `A new season requires clarity, faith, and focus. "I can do all things through Christ who strengthens me"
               (Philippians 4:13). Let go of what's behind, embrace God's guidance, and pursue your purpose with intention.
                You are God-designed, and this year holds new blessings, breakthroughs, and treasures ready to be unlocked.`,
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[#f6ecd9] text-gray-800 rounded-md p-5 shadow-lg w-full md:max-w-[310px] h-auto md:h-[250px] md:justify-self-center"
            >
              <h3 className="font-bold mb-3 text-base md:text-lg">{card.title}</h3>
              <p className="text-xs md:text-sm leading-tight mb-2">{card.text}</p>
              <span className="text-sm font-bold cursor-pointer">
                Read more…
              </span>
            </div>
          ))}
        </div>
      </section>

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