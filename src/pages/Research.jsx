import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.osarenemokpae.com/api";

export default function Research() {
  const [journalsList, setJournalsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const response = await axios.get(`${API_URL}/journals/frontend`);
        // The journals are in response.data.data.data array
        const journalsData = response.data.data.data || [];
        setJournalsList(journalsData);
      } catch (error) {
        console.error("Error fetching journals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJournals();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-white flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#FFF5E1]">
      {/* RESEARCH HERO */}
      <section className="w-full bg-gradient-to-b from-[#071b34] to-[#06152b]">
        <div className="max-w-7xl mx-auto min-h-[300px] md:h-[350px] px-4 md:px-6 py-12 mb-14 md:py-0 relative overflow-hidden">
          <div className="md:mt-20 max-w-3xl relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Research & Insight
            </h1>
            <p className="text-gray-300 text-base md:text-lg">
              Discover the Latest studies, Publications, and thought Leadership
            </p>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[70%] md:left-auto md:right-0 md:top-1/2 md:-translate-y-[70%] md:translate-x-0 w-[200px] h-[120px] md:w-[340px] md:h-[200px] bg-gray-400/60 rounded-[50%]"></div>
        </div>
      </section>

      {/* Dynamic Journals from API */}
      {journalsList.map((journal, index) => (
        <div key={journal.id}>
          <section className="w-full bg-[#FFF5E1] mb-16">
            <div className="max-w-[92%] md:max-w-6xl mx-auto px-3 md:px-6 py-8 md:py-8 rounded-3xl border-t border-l border-gray-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)]">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                {journal.title}
              </h2>

              <div className="text-gray-800 leading-relaxed space-y-4 text-sm md:text-base">
                <p>
                  <span className="font-semibold">Abstract:</span> {journal.description}
                </p>

              
                <div className="flex justify-center mt-auto pt-8">
                   <a
                      href={`https://thecompass.ed-john.edu.ng/current-issue/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 font-medium md:text-base border-2 border-gray-500 rounded-lg bg-white p-1 px-5 hover:bg-gray-100 transition-colors"
                    >
                      Full Article
                    </a>
                </div>
              </div>
            </div>
          </section>

          {index < journalsList.length - 1 && <hr className="border border-gray-400" />}
        </div>
      ))}
    </div>
  );
}