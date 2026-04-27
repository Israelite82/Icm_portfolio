import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.osarenemokpae.com/api";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/books`)
      .then(res => {
        const booksData = res.data.data?.data || res.data.data || res.data;
        setBooks(Array.isArray(booksData) ? booksData : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching books:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading books...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* BOOKS HERO */}
      <section className="w-full bg-gradient-to-b from-[#071b34] to-[#06152b]">
        <div className="max-w-7xl mx-auto min-h-[300px] md:h-[380px] px-4 md:px-6 py-12 md:py-0 relative overflow-hidden">
          <div className="md:mt-20 max-w-3xl relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Books Catalogue
            </h1>
            <p className="text-gray-300 text-base md:text-lg">
              Explore the works of Dr. Osaren Emokpae
            </p>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[70%] md:left-auto md:right-0 md:top-1/2 md:-translate-y-[70%] md:translate-x-0 w-[200px] h-[120px] md:w-[340px] md:h-[200px] bg-gray-400/60 rounded-[50%]"></div>
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
      <section className="w-full bg-gray-100 px-4 md:px-8 lg:px-12 py-12 md:py-16 pb-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Discover Your Next Masterpiece
            </h2>
            <p className="text-gray-600">
              Browse through the curated collection from Dr. Osaren Emokpae
            </p>
          </div>

          {/* Books List - Vertical Layout */}
          <div className="space-y-8 md:space-y-10">
            {books.length > 0 ? (
              books.map((book) => (
                <div key={book.id} className="bg-[#FFF5E1E3] rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                  {/* Book Cover Image - Left side */}
                  <div className="md:w-1/3">
                    <img
                      src={book.book_cover?.startsWith('http') ? book.book_cover : `https://api.osarenemokpae.com${book.book_cover}`}
                      alt={book.title}
                      className="w-full h-64 md:h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://api.osarenemokpa.com/booksec1.png";
                      }}
                    />
                  </div>
                  
                  {/* Book Details - Right side */}
                  <div className="p-6 md:p-8 flex-1">
                    {/* Book Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                      {book.title}
                    </h3>
                    
                    {/* Subtitle */}
                    {book.subtitle && (
                      <h4 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
                        {book.subtitle}
                      </h4>
                    )}
                    
                    {/* Author */}
                    <p className="text-gray-600 font-medium mb-3">
                      {book.author || "Osaren Emokpae"}
                    </p>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {book.description}
                    </p>
                    
                    {/* Buy Button */}
                    {(book.link || book.book) && (
                      <a 
                        href={book.link || book.book}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white transition-colors duration-300 px-5 py-2 rounded-full text-sm font-medium"
                      >
                        Buy
                      </a>
                    )}
                  </div>
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