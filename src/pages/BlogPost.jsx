import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = "https://api.osarenemokpae.com/api";

export default function BlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Log the URL to see what's being called
    const url = `${API_URL}/blog-posts/${id}`;
    console.log("Fetching from:", url);
    
    axios.get(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // Add timeout to prevent hanging
      timeout: 10000,
    })
    .then(res => {
      console.log("Response:", res.data);
      setBlog(res.data.data);
      setLoading(false);
    })
    .catch(err => {
      console.error("Full error:", err);
      console.error("Error message:", err.message);
      console.error("Error code:", err.code);
      setError(err.message);
      setBlog(null);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF5E1] flex items-center justify-center">
        <div className="text-gray-600">Loading post...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#FFF5E1] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Connection Error</h2>
          <p className="text-gray-600 mb-4">Unable to connect to the server. Please check your internet connection.</p>
          <p className="text-sm text-gray-500 mb-4">Error: {error}</p>
          <Link to="/blog" className="text-[#071b34] hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#FFF5E1] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
          <Link to="/blog" className="text-[#071b34] hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-milkWhite">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#071b34] to-[#06152b]">
        <div className="max-w-7xl mx-auto min-h-[300px] md:h-[400px] px-4 md:px-6 py-12 md:py-0 relative overflow-hidden">
          <div className="md:mt-20 max-w-3xl relative z-10">
            <Link to="/blog" className="inline-block mb-4 text-gray-300 hover:text-white transition">
              ← Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              {blog.post_title}
            </h1>
            <p className="text-gray-300 text-sm md:text-base">
              By {blog.author} • {new Date(blog.created_at).toLocaleDateString()}
            </p>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[70%] md:left-auto md:right-0 md:top-1/2 md:-translate-y-[70%] md:translate-x-0 w-[200px] h-[120px] md:w-[340px] md:h-[200px] bg-gray-400/60 rounded-[50%]"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-[#FFF5E1]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
            {blog.featured_image && (
              <img 
                src={blog.featured_image}
                alt={blog.post_title}
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
                onError={(e) => {
                  console.log("Image failed to load:", blog.featured_image);
                  e.target.src = "/default-blog-image.png";
                }}
              />
            )}
            <div className="prose prose-lg max-w-none text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}