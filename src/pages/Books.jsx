export default function Books() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* BOOKS HERO */}
      <section className="w-full bg-gradient-to-b from-[#071b34] to-[#06152b]">
        <div className="max-w-7xl mx-auto min-h-[300px] md:h-[450px] px-4 md:px-6 py-12 md:py-0 relative overflow-hidden">
          <div className="md:mt-20 max-w-3xl relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Books Catalogue
            </h1>

            <p className="text-gray-300 text-base md:text-lg">
              Explore the works of Dr. Osaren Emokpae
            </p>
          </div>
          {/* Decorative oval - centered below text on mobile, right side on desktop */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[70%] md:left-auto md:right-0 md:top-1/2 md:-translate-y-[70%] md:translate-x-0
                w-[200px] h-[120px] md:w-[340px] md:h-[200px]
                bg-gray-400/60
                rounded-[50%]"
          ></div>
        </div>
      </section>

      {/* Featured Book Hero */}
      <section className="w-full bg-[#FFF5E1] py-6 md:py-8 flex justify-center px-4 mb-4">
        <img 
          src="/booksec_hero.png" 
          alt="Featured Book" 
          className="w-full max-w-4xl h-auto object-contain"
        />
      </section>

      {/* Books Grid Section */}
      <section className="w-full bg-gray-100 px-4 md:px-8 lg:px-12 pb-12 md:pb-16">
        {/* All Books in One Grid - wraps automatically */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
          <img 
            src="/booksec1.png" 
            alt="Book 1" 
            className="w-full h-auto object-cover rounded-lg"
          />
          <img 
            src="/booksec2.png" 
            alt="Book 2" 
            className="w-full h-auto object-cover rounded-lg"
          />
          <img 
            src="/booksec3.png" 
            alt="Book 3" 
            className="w-full h-auto object-cover rounded-lg"
          />
          <img 
            src="/booksec4.png" 
            alt="Book 4" 
            className="w-full h-auto object-cover rounded-lg"
          />
          <img 
            src="/booksec5.png" 
            alt="Book 5" 
            className="w-full h-auto object-cover rounded-lg"
          />
          <img 
            src="/booksec6.png" 
            alt="Book 6" 
            className="w-full h-auto object-cover rounded-lg"
          />
          <img 
            src="/booksec7.png" 
            alt="Book 7" 
            className="w-full h-auto object-cover rounded-lg"
          />
          <img 
            src="/booksec8.png" 
            alt="Book 8" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}