import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://api.osarenemokpae.com/api";

export default function TeachingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [teaching, setTeaching] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/teachings/${id}`)
      .then(res => {
        setTeaching(res.data.data || res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching teaching:", err);
        setLoading(false);
      });
  }, [id]);

  const handleBack = () => {
    navigate('/teaching');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF5E1] flex items-center justify-center">
        <div className="text-gray-600">Loading teaching...</div>
      </div>
    );
  }

  if (!teaching) {
    return (
      <div className="min-h-screen bg-[#FFF5E1] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Teaching not found</h2>
          <button onClick={handleBack} className="text-[#6B0F1A] hover:underline">
            ← Back to Teachings
          </button>
        </div>
      </div>
    );
  }

  // Extract YouTube video ID from URL if exists
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
  };

  const videoEmbedUrl = teaching.video_embed_url ? getYouTubeEmbedUrl(teaching.video_embed_url) : null;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-milkWhite">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#071b34] to-[#06152b]">
        <div className="max-w-7xl mx-auto min-h-[300px] md:h-[400px] px-4 md:px-6 py-12 md:py-0 relative overflow-hidden">
          <div className="md:mt-20 max-w-3xl relative z-10">
            <button onClick={handleBack} className="inline-block mb-4 text-gray-300 hover:text-white transition">
              ← Back to Teachings
            </button>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              {teaching.teaching_title}
            </h1>
            {teaching.series && (
              <p className="text-gray-300 text-sm md:text-base">
                Series: {teaching.series}
              </p>
            )}
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[70%] md:left-auto md:right-0 md:top-1/2 md:-translate-y-[70%] md:translate-x-0 w-[200px] h-[120px] md:w-[340px] md:h-[200px] bg-gray-400/60 rounded-[50%]"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-[#FFF5E1] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
            {/* Thumbnail/Image */}
            {teaching.thumbnail && (
              <img
                src={teaching.thumbnail.startsWith('http') ? teaching.thumbnail : `https://api.osarenemokpae.com${teaching.thumbnail}`}
                alt={teaching.teaching_title}
                className="w-full h-64 md:h-96 rounded-lg mb-8"
                onError={(e) => e.target.src = "/teaching-placeholder.png"}
              />
            )}

            {/* Scripture Reference */}
            {teaching.scripture_reference && (
              <div className="mb-6 p-4 bg-gray-100 rounded-lg border-l-4 border-[#6B0F1A]">
                <p className="text-gray-600 text-sm">Scripture Reference</p>
                <p className="text-gray-800 font-medium">{teaching.scripture_reference}</p>
              </div>
            )}

            {/* YouTube Video Embed */}
            {videoEmbedUrl && (
              <div className="mb-8 aspect-video">
                <iframe
                  src={videoEmbedUrl}
                  title={teaching.teaching_title}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {/* Audio Player */}
            {teaching.audio_file && (
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 text-sm mb-2">Audio Version</p>
                <audio controls className="w-full">
                  <source src={teaching.audio_file.startsWith('http') ? teaching.audio_file : `https://api.osarenemokpae.com${teaching.audio_file}`} />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}

            {/* Duration */}
            {teaching.duration && (
              <p className="text-[#e05c45] text-sm font-mono font-semibold mb-4">
                Duration : {teaching.duration}
              </p>
            )}
            <hr />

            {/* Description/Transcript */}
            <div className="prose prose-lg max-w-none text-uppercase text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: teaching.description || teaching.transcript || teaching.content }} />
            </div>
           hr

            {/* Tags
            {teaching.tags && teaching.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm mb-2">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {teaching.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )} */}
          </div>
        </div>
      </section>
    </div>
  );
}