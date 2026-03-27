import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://api.osarenemokpae.com/api";

export default function Teaching() {
  const navigate = useNavigate();
  const [teachings, setTeachings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/teachings`)
      .then(res => {
        const data = res.data.data || res.data;
        setTeachings(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching teachings:", err);
        setLoading(false);
      });
  }, []);

  const handleReadMore = (id) => {
    navigate(`/teaching/${id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-white to-milkWhite">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-gray-600">Loading teachings...</div>
        </div>
      </div>
    );
  }

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
          <div className="absolute left-1/2 -translate-x-1/2 top-[70%] md:left-auto md:right-0 md:top-1/2 md:-translate-y-[70%] md:translate-x-0 w-[200px] h-[120px] md:w-[340px] md:h-[200px] bg-gray-400/60 rounded-[50%]"></div>
        </div>
      </section>

      {/* Teachings Grid - 2 Columns */}
      <section className="w-full bg-[#FFF5E1] py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">
            Teachings
          </h2>

          {teachings.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              No teachings available at the moment.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-14">
              {teachings.map((teaching) => (
                <div
                  key={teaching.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleReadMore(teaching.id)}
                >
                  {/* Thumbnail/Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    {teaching.thumbnail ? (
                      <img
                        src={teaching.thumbnail.startsWith('http') ? teaching.thumbnail : `https://api.osarenemokpae.com${teaching.thumbnail}`}
                        alt={teaching.teaching_title}
                        className="w-full h-[240px]  hover:scale-105 transition-transform duration-300"
                        onError={(e) => e.target.src = "/teaching-placeholder.png"}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#6B0F1A] to-[#071b34] flex items-center justify-center">
                        <svg className="w-12 h-12 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                    )}
                    {/* Optional: Video/Duration Badge
                    {teaching.duration && (
                      <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {teaching.duration}
                      </span>
                    )}
                    {teaching.series && (
                      <span className="absolute top-2 left-2 bg-[#6B0F1A] text-white text-xs px-2 py-1 rounded">
                        {teaching.series}
                      </span>
                    )} */}
                  </div>

                  <div className="p-5 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {teaching.teaching_title}
                    </h3>
                    
                    {teaching.scripture_reference && (
                      <p className="text-[#6B0F1A] text-sm mb-3 font-medium">
                        📖 {teaching.scripture_reference}
                      </p>
                    )}

                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                      {teaching.description || teaching.excerpt || "Click to read more..."}
                    </p>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReadMore(teaching.id);
                      }}
                      className="text-[#6B0F1A] font-semibold hover:underline text-sm md:text-base inline-flex items-center gap-1"
                    >
                      Read more →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}