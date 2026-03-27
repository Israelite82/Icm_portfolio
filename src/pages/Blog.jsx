import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = "https://api.osarenemokpae.com/api";

export default function Blog() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/blog-posts`)
      .then(res => {
        const blogsData = res.data.data || [];
        setBlogs(Array.isArray(blogsData) ? blogsData : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF5E1] flex items-center justify-center">
        <div className="text-gray-600">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-milkWhite">
      {/* Blog Hero */}
      <section className="w-full bg-gradient-to-b from-[#071b34] to-[#06152b]">
        <div className="max-w-7xl mx-auto min-h-[300px] md:h-[450px] px-4 md:px-6 py-12 md:py-0 relative overflow-hidden">
          <div className="md:mt-20 max-w-3xl relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Blog
            </h1>
            <p className="text-gray-300 text-base md:text-lg">
              Exploring Insights and Intelligence
            </p>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[70%] md:left-auto md:right-0 md:top-1/2 md:-translate-y-[70%] md:translate-x-0 w-[200px] h-[120px] md:w-[340px] md:h-[200px] bg-gray-400/60 rounded-[50%]"></div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full bg-[#FFF5E1]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogs.map((blog) => (
              <div 
                key={blog.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handleReadMore(blog.id)}
              >
                {blog.featured_image && (
                  <img 
                    src={blog.featured_image}
                    alt={blog.post_title}
                    className="w-full h-48 md:h-56 object-cover"
                    onError={(e) => e.target.src = "/default-blog-image.png"}
                  />
                )}
                <div className="p-5 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {blog.post_title}
                  </h2>
                  <div className="text-gray-600 text-xs md:text-sm mb-3">
                    By {blog.author} • {new Date(blog.created_at).toLocaleDateString()}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4 line-clamp-3">
                    {blog.excerpt || blog.content?.substring(0, 120)}...
                  </p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReadMore(blog.id);
                    }}
                    className="text-[#071b34] font-semibold hover:underline text-sm md:text-base"
                  >
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}