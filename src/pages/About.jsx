import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.osarenemokpae.com/api";

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchAbout = async () => {
    try {
      const response = await axios.get(`${API_URL}/about`);
      const data = response.data.data || response.data;
      
      // ADD THESE TWO LINES RIGHT HERE:
      console.log("Apostle object:", data.brand_story?.apostle);
      console.log("Track record object:", data.missions?.track_record);
      
      console.log("Full data:", data);
      console.log("Brand story:", data.brand_story);
      console.log("Missions:", data.missions);
      
      const mappedData = {
        hero_headline: data.hero_section?.headline || "",
        hero_subtext: data.hero_section?.subtext || "",
        hero_background_image: data.hero_section?.background_image_path || null,
        brand_story: data.brand_story?.academic_biography || "",
        academic_biography: data.brand_story?.academic_biography || "",
        apostle_content: data.brand_story?.apostle?.content || data.brand_story?.apostle || "",
        apostle_image: data.brand_story?.apostle?.image_path || null,
        track_record_content: data.missions?.track_record?.content || data.missions?.track_record || ""
      };
      
      console.log("Mapped apostle_content:", mappedData.apostle_content);
      console.log("Mapped track_record_content:", mappedData.track_record_content);
      
      setAboutData(mappedData);
      
    } catch (error) {
      console.error("Error fetching about data:", error);
    } finally {
      setLoading(false);
    }
  };
  fetchAbout();
}, []);
  if (loading) {
    return (
      <div className="min-h-screen w-full bg-white flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!aboutData) {
    return (
      <div className="min-h-screen w-full bg-white flex items-center justify-center">
        <div className="text-gray-500">Content not available.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white">
      {/* HERO SECTION */}
      <section className="w-full bg-[#FFF5E1]">
        <div className="flex flex-col lg:flex-row">
          {/* Left: Text with border */}
          <div className="w-full lg:w-1/2">
            <div className="border border-gray-600 h-full p-6 md:p-16 flex flex-col justify-center">
              {/* Headline - H1 and first paragraph */}
              <h1 className="text-3xl md:text-3xl font-bold mb-2 text-gray-900">
                {aboutData.hero_headline || "Dr. Osaren Emokpae"}
              </h1>
              <p className="text-xl md:text-md font-semibold text-gray-500 mb-6">
                {aboutData.hero_subtext?.split('\n')[0] || "A Development Economist"}
              </p>
              
              {/* Subtitle - remaining paragraphs */}
              {aboutData.hero_subtext && (
                <div className="text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
                  {aboutData.hero_subtext.split('\n').slice(1).join('\n')}
                </div>
              )}
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={aboutData.hero_background_image || "Heroimage.png"}
              alt="Dr. Osaren Emokpae"
              className="w-full h-full object-cover"
              style={{ display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* INTRO PARAGRAPH - Brand Story */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-[#FFF5E1] rounded-3xl p-8 md:p-12 border-l-8 border-t-8 border-black">
            <div className="text-gray-900 leading-relaxed text-sm md:text-base">
              {aboutData.brand_story ? (
                <div dangerouslySetInnerHTML={{ __html: aboutData.brand_story }} />
              ) : (
                <p>Dr. Osaren Emokpae is a distinguished scholar...</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC SECTION */}
      <section className="w-full bg-white py-12 md:py-16 pl-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Left Column: Academic Biography */}
            <div>
              <div className="flex flex-col items-start mb-6">
                <h2 className="text-2xl md:text-3xl text-gray-900 font-bold">
                  Academic Biography
                </h2>
                <div className="border-b-4 border-red-700 w-24 mt-4"></div>
              </div>
              <div className="mt-6 space-y-4 text-gray-800 text-sm md:text-base leading-relaxed">
                {aboutData.academic_biography ? (
                  <div dangerouslySetInnerHTML={{ __html: aboutData.academic_biography }} />
                ) : (
                  <p>Dr. Osaren Emokpae is a world renowned authority...</p>
                )}
              </div>
            </div>

            {/* Right Column: Academic Profile Box - Static for now */}
            <div>
              <div className="p-10">
                <h3 className="text-xl text-gray-800 md:text-2xl font-bold mb-6">
                  Academic Profile
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <img src="Frame.png" alt="" />
                    <div>
                      <p className="text-gray-400 text-sm mb-2">
                        Ph.D in Political Economic Management
                      </p>
                      <p className="text-sm md:text-base font-semibold text-gray-600">
                        University of Century
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src="Frame.png" alt="" />
                    <div>
                      <p className="text-gray-400 text-sm mb-2">
                        Ph.D in Organisational Resilience in Microfinance
                      </p>
                      <p className="text-sm md:text-base font-semibold text-gray-600">
                        University of Hertfordshire
                      </p>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg md:text-xl text-gray-600 font-bold mb-4 mt-12">
                  Post Doctoral Degrees
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <img src="Frame1.png" alt="" />
                    <div>
                      <p className="text-gray-400 text-sm mb-2">
                        Business Diversification
                      </p>
                      <p className="text-sm md:text-base font-semibold text-gray-600">
                        Oxford University
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src="Frame1.png" alt="" />
                    <div>
                      <p className="text-gray-400 text-sm mb-2">
                        Resilience of SMEs
                      </p>
                      <p className="text-sm md:text-base font-semibold text-gray-600">
                        Cranfield University
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APOSTLE SECTION */}
      <section className="w-full py-12 md:py-18">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-[#FFF5E1] rounded-3xl border-l-8 border-t-8 border-black p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Text Content */}
              <div>
                <h2 className="text-2xl md:text-3xl text-gray-800 font-bold mb-10">
                  Apostle. Osaren Emokpae
                </h2>
                <div className="space-y-6 text-gray-800 text-md md:text-base leading-relaxed">
                  {aboutData.apostle_content ? (
                    <div dangerouslySetInnerHTML={{ __html: aboutData.apostle_content }} />
                  ) : (
                    <>
                      <p>National Leader/General Overseer Emeritus...</p>
                      <p>The vision for Macedonia Call Global Assembly...</p>
                    </>
                  )}
                </div>
                <hr className="border-gray-600 mt-20" />
                {/* Education Section - Static */}
                <div className="mt-8">
                  <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">
                    Education
                  </h3>
                  <div className="space-y-5 text-sm text-gray-800">
                    <div className="flex items-start gap-3">
                      <img src="Frame-book.png" alt="" />
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Christian Leadership</p>
                        <p className="text-sm md:text-base font-semibold text-gray-600">
                          Haggai Institute Hawaii, U.S.A
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <img src="Frame-book.png" alt="" />
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Christian Leadership</p>
                        <p className="text-sm md:text-base font-semibold text-gray-600">
                          British Foursquare Seminary, Hastings
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <img src="Frame-book.png" alt="" />
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Christian Leadership</p>
                        <p className="text-sm md:text-base font-semibold text-gray-600">
                          Trinity College, U.S.A
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="space-y-8">
                <div className="w-full">
                  <img
                    src={aboutData.apostle_image || "Hero02.png"}
                    alt="Apostle Osaren Emokpae"
                    className="w-full h-96 object-cover rounded-xl"
                  />
                </div>
                <div className="flex items-center gap-3 -mt-4 mb-1 ml-8">
                  <img src="youtube.png" alt="Radio Icon" />
                  <img src="linkdin.png" alt="" />
                </div>
                <hr className="border-gray-500" />
                <div className="bg-white border-l-8 border-t-8 border-gray-600 rounded-3xl p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-3">
                    <img src="fire.png" alt="" />
                    Passion
                  </h3>
                  <p className="text-gray-700">Monitoring the next generation of leaders</p>
                </div>
                <hr className="border-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSIONS SECTION - Three boxes */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl text-gray-900 font-bold">
            Mission
          </h2>
          <div className="border-b-4 border-red-700 w-16 mt-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 items-start">
            <div className="bg-[#FFF5E1] border-r-8 border-b-8 border-gray-400 rounded-xl p-10">
              <p className="text-md text-gray-800 leading-relaxed">
                A National Leader/General
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                Overseer Emeritus of Foursquare
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                Gospel Church Trinidad & Tobago
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                and Guyana, Executive Counsellor
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                Emeritus of Foursquare Nigeria, Dr.
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                Emokpae now serves as the
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                President and Presiding Apostle of
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                Macedonia Call
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                Global Assembly—a ministry with a
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                powerful global vision.
              </p>
            </div>

            {/* Second Box */}
            <div className="bg-[#FFF5E1] border-r-8 border-b-8 border-gray-400 rounded-xl p-6">
              <p className="text-md text-gray-800 leading-relaxed">
                The vision for Macedonia Call
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                Global Assembly was birthed in his
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                heart in 2008 while in Brixton,
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                United Kingdom, within the Foursquare
              </p>

              <p className="text-md text-gray-800 leading-relaxed">
                Emokpae now serves as the
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                movement, and was later
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                ncorporated at The Summit in
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                Global Assembly—a ministry with a
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                Columbia, USA. What began as a
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                divine revelation has since grown
              </p>
              <p className="text-md text-gray-800 leading-relaxed">into an</p>
              <p className="text-md text-gray-800 leading-relaxed">
                independent global ministry
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                committed to accelerating the
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                discipling of nations in preparation
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                For the return of our Savior.
              </p>
            </div>
            {/* Third Box */}
            <div className="bg-[#FFF5E1] border-r-8 border-b-8 border-gray-400 rounded-xl p-6">
              <p className="text-md text-gray-800 leading-relaxed">
                Under his pastoral leadership, he
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                and his team planted thirteen
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                churches within the Foursquare
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                movement in Nigeria, three in
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                United Kingdom, one in Dominican
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                Republic, one in Guyana and one in
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                the USA . Among the foursquare
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                churches he planted in
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                Nigeria is the Foursquare Grand
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                Assembly, a remarkable
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                congregation made up of three
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                dynamic expressions, the Youth
              </p>
              <p className="text-md text-gray-800 leading-relaxed">Church</p>
              <p className="text-md text-gray-800 leading-relaxed">
                committed to accelerating the
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                the Church for Street Urchins, and
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
                the Main Church.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK RECORD SECTION */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl text-gray-900 font-bold">
            A Track Record of Excellence in the Market
          </h2>
          <div className="border-b-4 border-red-800 w-36 mt-4"></div>
          <div
            className="bg-[#FFF5E1] rounded-2xl p-8 md:p-12 mt-8 border border-t-4 border-l-4 border-gray-300"
            style={{ borderBottom: "none", borderRight: "none" }}
          >
            <div className="space-y-5 text-gray-900 text-sm md:text-base leading-relaxed">
              {aboutData.track_record_content ? (
                <div dangerouslySetInnerHTML={{ __html: aboutData.track_record_content }} />
              ) : (
                <p>Dr. Osaren Emokpae is a transformational force...</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-red-900" />

      {/* TOP SKILLS SECTION - Static */}
      <section className="w-full bg-white py-12 md:py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-4">
          <h2 className="text-2xl md:text-3xl text-gray-800 font-bold mb-8">Top Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4 bg-[#FFF5E1] rounded-2xl rounded-r-full rounded-l-none p-2">
            <div className="flex items-center gap-2">
              <img src="monitoring.png" alt="" />
              <p className="font-semibold text-base md:text-md text-gray-700">Mentoring</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="organize.png" alt="" />
              <p className="font-semibold text-base md:text-md text-gray-700">Organizational Leadership</p>
            </div>
            <div className="flex items-center gap-2 pt-16">
              <img src="managing.png" alt="" />
              <p className="font-semibold text-base md:text-md text-gray-700">Managing Organizational Performance</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="planning.png" alt="" />
              <p className="font-semibold text-base md:text-md text-gray-700">Strategic Planning</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="economic.png" alt="" />
              <p className="font-semibold text-base md:text-md text-gray-700">Economic Development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}