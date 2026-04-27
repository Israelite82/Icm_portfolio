import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.osarenemokpae.com/api";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/books`)
      .then((res) => {
        const booksData = res.data.data?.data || res.data.data || res.data;
        setBooks(Array.isArray(booksData) ? booksData : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-white flex items-center justify-center">
        <div className="text-gray-500">Loading books...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* BOOKS HERO */}
     <section className="w-full bg-gray-300 relative">
  <div className="max-w-7xl mx-auto min-h-[300px] md:h-[380px] px-4 md:px-6 py-12 md:py-0 relative overflow-hidden">
    {/* White faded circle background */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[180px] md:w-[500px] md:h-[130px] bg-white/60 rounded-[50%] blur-2xl"></div>
    
    {/* Content centered on top of the circle */}
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
        Discover Your Next Masterpiece
      </h1>
      <p className="text-gray-500 text-base md:text-lg font-bold">
       Browse through the curated collection from Dr. Osaren Emokpae
      </p>
    </div>
    
    {/* Decorative oval - removed or kept separate */}
    {/* <div className="absolute left-1/2 -translate-x-1/2 top-[70%] md:left-auto md:right-0 md:top-1/2 md:-translate-y-[70%] md:translate-x-0 w-[200px] h-[120px] md:w-[340px] md:h-[200px] bg-gray-400/60 rounded-[50%]"></div> */}
  </div>
</section>

      {/* Featured Book Hero */}
      {/* <section className="w-full bg-[#FFF5E1] py-2 md:py-2 flex justify-center px-4 mb-4">
        <img 
          src="/booksec_hero.png" 
          alt="Featured Book" 
          className="w-full max-w-4xl h-[350px] object-contain"
        />
      </section> */}

      {/* Books List Section - Vertical Layout WITH IMAGES */}
      <section className="w-full bg-white px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}

          {/* Books List - Vertical Layout */}
          <div className="space-y-8 md:space-y-10">
            {books.length > 0 ? (
              books.map((book, index) => (
                <div key={book.id}>
                  <div className="bg-[#FFF5E1E3] rounded-xl overflow-hidden flex flex-col md:flex-row  gap-6 md:gap-8 shadow-[-6px_-6px_0px_0px_rgba(0,0,0,0.4)]">
                    {/* Book Cover Image - Left side with padding */}
                    <div className="md:w-1/3 p-4 md:p-5">
                      <img
                        src={
                          book.book_cover?.startsWith("http")
                            ? book.book_cover
                            : `https://api.osarenemokpae.com${book.book_cover}`
                        }
                        alt={book.title}
                        className="w-full h-64 md:h-auto object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src =
                            "https://api.osarenemokpa.com/booksec1.png";
                        }}
                      />
                    </div>

                    {/* Book Details - Right side with padding */}
                    <div className="p-6 md:p-8 flex-1">
                      {/* Book Title */}
                      {(() => {
                        const words = book.title?.split(" ") || [];
                        const firstPart = words.slice(0, 3).join(" ");
                        const secondPart = words.slice(3).join(" ");
                        return (
                          <>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 mt-10">
                              {firstPart}
                            </h3>
                            {secondPart && (
                              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                {secondPart}
                              </h3>
                            )}
                          </>
                        );
                      })()}

                      {/* Subtitle */}
                      {book.subtitle && (
                        <h4 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
                          {book.subtitle}
                        </h4>
                      )}

                      {/* Author */}
                      <p className="text-gray-600 font-medium mb-4">
                        {book.author || "Osaren Emokpae"}
                      </p>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {book.description}
                      </p>

                      {/* Buy Button */}
                      {(book.link || book.book || book.amazon) && (
                        <a
                          href={book.link || book.book || book.amazon}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white mt-6 inline-block text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white transition-colors duration-300 px-8 py-1 rounded-full text-sm font-medium"
                        >
                          Buy
                        </a>
                      )}
                    </div>
                  </div>
                  {/* Horizontal line after every 4 books (index 3, 7, 11, etc.) */}
                  {(index + 1) % 4 === 0 && index !== books.length - 1 && (
                    <hr className="mt-16 mb-16  border-t-2  border-gray-300" />
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No books available.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
