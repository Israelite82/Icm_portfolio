export default function Teaching() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-milkWhite">
      {/* TEACHING HERO */}
      <section className="w-full bg-gradient-to-b from-[#071b34] to-[#06152b]">
        <div className="max-w-7xl mx-auto min-h-[300px] md:h-[450px] px-4 md:px-6 py-12 md:py-0 relative overflow-hidden">
          <div className="md:mt-20 max-w-3xl relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Teaching & Resources
            </h1>

            <p className="text-gray-300 text-base md:text-lg">
              Explore teachings and resources from Dr. Osaren Emokpae
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

      {/* Teachings Section */}
      <section className="w-full bg-[#FFF5E1] pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">
            Teachings
          </h2>

          {/* Grid Container */}
          <div className="space-y-8 md:space-y-12">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <img 
                src="/flyer1.png" 
                alt="Teaching Resource 1" 
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
              <img 
                src="/flyer2.png" 
                alt="Teaching Resource 2" 
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <img 
                src="/flyer3.png" 
                alt="Teaching Resource 3" 
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
              <img 
                src="/flyer1.png" 
                alt="Teaching Resource 4" 
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <img 
                src="/flyer4.png" 
                alt="Teaching Resource 5" 
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
              <img 
                src="/flyer5.png" 
                alt="Teaching Resource 6" 
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}