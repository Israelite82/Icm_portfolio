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

        const mappedData = {
          // Hero section
          hero_headline: data.hero_section?.headline || "",
          hero_subtext: data.hero_section?.subtext || "",
          hero_background_image: data.hero_section?.background_image_path
            ? `https://api.osarenemokpae.com/storage/${data.hero_section.background_image_path}`
            : null,

          // Brand story
          brand_story: data.brand_story.brand_story || "",

          // Academic biography
          academic_biography: data.brand_story.academic_biography || "",

          // Apostle biography
          apostle_content: data.brand_story.apostle_biography || "",

          // Apostle name and image
          apostle_name: data.brand_story.apostle.name || "",
          apostle_image: data.brand_story.apostle.image
            ? `https://api.osarenemokpae.com/storage/${data.brand_story.apostle.image}`
            : null,

          // Missions
          mission_statement_1: data.missions?.mission_statement_1 || "",
          mission_statement_2: data.missions?.mission_statement_2 || "",
          mission_statement_3: data.missions?.mission_statement_3 || "",
          track_record_title: data.missions?.track_record?.title || "",
          track_record_content: data.missions?.track_record?.description || "",

          // Social media links - ADD THESE TWO LINES
          youtube_link: data.youtube_link || "",
          linkedin_link: data.linkedin_link || "",
        };

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
                {aboutData.hero_subtext?.split("\n")[0] ||
                  "A Development Economist"}
              </p>

              {/* Subtitle - remaining paragraphs */}
              {aboutData.hero_subtext && (
                <div className="text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
                  {aboutData.hero_subtext.split("\n").slice(1).join("\n")}
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

      {/* ACADEMIC SECTION */}
      <section className="w-full bg-white py-12 md:py-16 pl-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Left Column: Academic Biography */}
            <div>
              <div className="flex flex-col items-start mt-10">
                <h2 className="text-2xl md:text-3xl text-gray-900 font-bold">
                  Academic Biography
                </h2>
                <div className="border-b-4 border-red-700 w-24 mt-4"></div>
              </div>
              <div className="mt-6 space-y-4 text-gray-800 text-sm md:text-base leading-relaxed">
                {aboutData.academic_biography ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: aboutData.academic_biography,
                    }}
                  />
                ) : (
                  <p>Dr. Osaren Emokpae is a world renowned authority...</p>
                )}
              </div>

              <div className="mt-12 font-semibold md:items-start">
                <div className="flex items-start gap-3 mb-3">
                  <img src="three.png" alt="" />
                  <div>
                    <p className="text-gray-500 text-md mt-1">Fellow ARCON</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <img src="three.png" alt="" />
                  <div>
                    <p className="text-gray-500 text-md mt-1">
                      Fellow Institute of Marketing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img src="three.png" alt="" />
                  <div>
                    <p className="text-gray-500 text-md mt-1">
                      Fellow Institute of Management Consultants
                    </p>
                  </div>
                </div>
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
                      <p className="text-gray-500 text-md mb-1">
                        Bsc in Economics, 1980
                      </p>
                      <p className="text-sm md:text-base font-bold text-gray-400">
                        University of Calabar, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src="Frame.png" alt="" />
                    <div>
                      <p className="text-gray-500 text-md mb-1">
                        Msc in Economics (Development Economics), 1990
                      </p>
                      <p className="text-sm md:text-base font-bold text-gray-400">
                        University of Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src="Frame.png" alt="" />
                    <div>
                      <p className="text-gray-500 text-md mb-1">
                        Diploma in Marketing, 1982 - 1984
                      </p>
                      <p className="text-sm md:text-base font-bold text-gray-400">
                        British Institute of Marketing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src="Frame.png" alt="" />
                    <div>
                      <p className="text-gray-500 text-md mb-1">
                        Ph.D in Organisational Resilience in Microfinance
                      </p>
                      <p className="text-sm md:text-base font-bold text-gray-400">
                        University of Hertfordshire
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src="Frame.png" alt="" />
                    <div>
                      <p className="text-gray-500 text-md mb-1">
                        Ph.D in Human Resource Management
                      </p>
                      <p className="text-sm md:text-base font-bold text-gray-400">
                        University of Century
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src="Frame1.png" alt="" />
                    <div>
                      <p className="text-gray-500 text-md mb-1">
                        PhD in Business Diversification
                      </p>
                      <p className="text-sm md:text-base font-bold text-gray-700">
                        Oxford University
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src="Frame1.png" alt="" />
                    <div>
                      <p className="text-gray-500 text-md mb-1">
                        PhD in Resilience of SMEs
                      </p>
                      <p className="text-sm md:text-base font-bold text-gray-700">
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
                  {aboutData.apostle_name || "Apostle. Osaren Emokpae"}
                </h2>
                <div className="space-y-6 text-gray-800 text-md md:text-base leading-relaxed">
                  {aboutData.apostle_content ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: aboutData.apostle_content,
                      }}
                    />
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
                        <p className="text-gray-500 text-sm mb-1">
                          Christian Leadership
                        </p>
                        <p className="text-sm md:text-base font-semibold text-gray-600">
                          Haggai Institute Hawaii, U.S.A
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <img src="Frame-book.png" alt="" />
                      <div>
                        <p className="text-gray-500 text-sm mb-1">
                          Christian Leadership
                        </p>
                        <p className="text-sm md:text-base font-semibold text-gray-600">
                          British Foursquare Seminary,
                        </p>
                        <span className="text-sm md:text-base font-semibold text-gray-600">
                          Hastings
                        </span>
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
                  <a
                    href={
                      aboutData?.youtube_link ||
                      "https://www.youtube.com/@theanchor1079"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="youtube.png"
                      alt="YouTube"
                      className="cursor-pointer h-12"
                    />
                  </a>

                  <a
                    href={
                      aboutData?.linkedin_link ||
                      "https://www.linkedin.com/in/osaren-emokpae-phd-dba-fbim-frpa-mcid-207b268/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="linkedin.png"
                      alt="LinkedIn"
                      className="cursor-pointer"
                    />
                  </a>
                </div>
                <hr className="border-gray-500" />
                <div className="bg-white border-l-8 border-t-8 border-gray-600 rounded-3xl p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-3">
                    <img src="fire.png" alt="" />
                    Passion
                  </h3>
                  <p className="text-gray-700">
                    Monitoring the next generation of leaders
                  </p>
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
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 items-start"> */}
          {/* First Box - Mission Statement 1 */}
          <div className="bg-[#FFF5E1] rounded-3xl p-8 md:p-12 mt-8 border border-r-0 border-b-0 border-gray-400  shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)]">
            {aboutData.mission_statement_1 ? (
              <div
                className="text-gray-800"
                dangerouslySetInnerHTML={{
                  __html: aboutData.mission_statement_1,
                }}
              />
            ) : (
              <>
                <p className="text-md text-gray-800 leading-relaxed">
                  A National Leader/General Overseer Emeritus of Foursquare
                  Gospel Church Trinidad & Tobago and Guyana, Executive
                  Counsellor Emeritus of Foursquare Nigeria, Dr. Emokpae now
                  serves as the President and Presiding Apostle of Macedonia
                  Call Global Assembly—a ministry with a powerful global vision.
                </p>
              </>
            )}
          </div>

          {/* Second Box - Mission Statement 2 */}
          {/* <div className="bg-[#FFF5E1] border-r-8 border-b-8 border-gray-400 rounded-xl p-6">
              {aboutData.mission_statement_2 ? (
                <div
                  className="text-gray-800"
                  dangerouslySetInnerHTML={{
                    __html: aboutData.mission_statement_2,
                  }}
                />
              ) : (
                <>
                  <p className="text-md text-gray-800 leading-relaxed">
                    The vision for Macedonia Call Global Assembly was birthed in
                    his heart in 2008 while in Brixton, United Kingdom, within
                    the Foursquare movement, and was later incorporated at The
                    Summit in Columbia, USA. What began as a divine revelation
                    has since grown into an independent global ministry
                    committed to accelerating the discipling of nations in
                    preparation for the return of our Savior.
                  </p>
                </>
              )}
            </div> */}

          {/* Third Box - mission statement 3 */}
          {/* <div className="bg-[#FFF5E1] border-r-8 border-b-8 border-gray-400 rounded-xl p-6 break-words overflow-hidden">
              {aboutData.mission_statement_3 ? (
                <div
                  className="text-gray-800 break-words"
                  dangerouslySetInnerHTML={{
                    __html: aboutData.mission_statement_3,
                  }}
                />
              ) : (
                <p className="text-md text-gray-800 leading-relaxed break-words">
                  Under his pastoral leadership, he and his team planted
                  thirteen churches within the Foursquare movement in Nigeria,
                  three in United Kingdom, one in Dominican Republic, one in
                  Guyana and one in the USA. Among the Foursquare churches he
                  planted in Nigeria is the Foursquare Grand Assembly, a
                  remarkable congregation made up of three dynamic expressions:
                  the Youth Church, the Church for Street Urchins, and the Main
                  Church.
                </p>
              )}
            </div> */}
        </div>
        {/* </div> */}
      </section>

      {/* TRACK RECORD SECTION */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl text-gray-900 font-bold">
            {aboutData.track_record_title ||
              "A Track Record of Excellence in the Market"}
          </h2>
          <div className="border-b-4 border-red-800 w-36 mt-4"></div>
          <div
            className="bg-white rounded-2xl p-8 md:p-12 mt-8 border "
            style={{ borderBottom: "none", borderRight: "none" }}
          >
            <div className="space-y-5 text-gray-900 text-sm md:text-base leading-relaxed">
              {aboutData.track_record_content ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: aboutData.track_record_content,
                  }}
                />
              ) : (
                <p>Dr. Osaren Emokpae is a transformational force...</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-13 -mt-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-[#FFF5E1] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-8 items-start max-w-6xl mx-auto px-4 md:px-8">
            {/* Left - Text */}
            <div className="space-y-2 mt-10">
              <p className="text-gray-700 leading-relaxed mt-4 ml-8 text-sm md:text-base">
                Dr Osaren Emokpae was as an adjunct professor in University of
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 ml-8 text-sm md:text-base">
                Lagos in 1995 teaching MSc and MBAs in Organisational{" "}
              </p>

              <p className="text-gray-700 leading-relaxed mt-4 ml-8 text-sm md:text-base">
                behaviour and Marketing. He was a lecturer on Marketing in{" "}
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 ml-8 text-sm md:text-base">
                Unilever and UAC training Schools in Apapa and Ikoyi.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 ml-8 text-sm md:text-base">
                He also lectured on Digital Divide in Rhodes university
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 ml-8 text-sm md:text-base">
                {" "}
                South Africa in 2000; as well as teaching Strategic Planning
                in{" "}
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 ml-8 text-sm md:text-base">
                {" "}
                Foursquare Institute of Leadership and Futures studies for many
                years.
              </p>
              <br />
              <p className="text-gray-700 leading-relaxed mt-4 ml-8 text-sm md:text-base">
                {" "}
                He was a regular Resource Person teaching in ARCON and{" "}
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 ml-8 text-sm md:text-base">
                {" "}
                Institute of Marketing Programs. He taught on Career choice in
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 ml-8 text-sm md:text-base">
                {" "}
                Young Enterprise United Kingdom and he is currently the{" "}
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 ml-8 text-sm md:text-base">
                {" "}
                Chairman of NOPSI (Nigerian Oversees Prisoners Support
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 ml-8 text-sm md:text-base">
                {" "}
                Initiative) headquartered in the United Kingdom.
              </p>
            </div>

            {/* Right - Image */}
            <div>
              <img
                src="certificate.png"
                alt="Section image"
                className="w-full h-[550px] rounded-lg mt-4 mb-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO PARAGRAPH - Brand Story */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 border-r-4 border-b-4 border-gray-300">
            <div className="text-gray-900 leading-relaxed text-sm md:text-base">
              {aboutData.brand_story ? (
                <div
                  dangerouslySetInnerHTML={{ __html: aboutData.brand_story }}
                />
              ) : (
                <p>Dr. Osaren Emokpae is a distinguished scholar...</p>
              )}
            </div>
          </div>
        </div>
      </section>


         {/* Location and email */}
      <section className="w-full py-12 md:py-13 -mt-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-60 mt-8 items-start max-w-6xl mx-auto px-4 md:px-8">
            <div className="flex items-start gap-3">
              <img src="location.png" alt="" className="mt-6"/>
              <div>
                <p className="text-gray-500 text-md mb-1">
                  Location
                </p>
                <p className="text-sm md:text-base font-bold text-gray-600">
                 The Summit, Autumn Glen, 
                </p>
                <p className="text-sm md:text-base font-bold text-gray-600">Columbia, U.S.A</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <img src="mail.png" alt="" />
              <div>
                <p className="text-gray-500 text-md mb-1">
                  Email
                </p>
                <p className="text-sm md:text-base font-bold text-gray-600">
                 osaremokpae@yahoo.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-red-900" />

      {/* TOP SKILLS SECTION - Static */}
      <section className="w-full bg-white py-12 md:py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-4">
          <h2 className="text-2xl md:text-3xl text-gray-800 font-bold mb-8">
            Top Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4 bg-[#FFF5E1] rounded-2xl rounded-r-full rounded-l-none p-2">
            <div className="flex items-center gap-2">
              <img src="monitoring.png" alt="" />
              <p className="font-semibold text-base md:text-md text-gray-700">
                Mentoring
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src="organize.png" alt="" />
              <p className="font-semibold text-base md:text-md text-gray-700">
                Organizational Leadership
              </p>
            </div>
            <div className="flex items-center gap-2 pt-16">
              <img src="managing.png" alt="" />
              <p className="font-semibold text-base md:text-md text-gray-700">
                Managing Organizational Performance
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src="planning.png" alt="" />
              <p className="font-semibold text-base md:text-md text-gray-700">
                Strategic Planning
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src="economic.png" alt="" />
              <p className="font-semibold text-base md:text-md text-gray-700">
                Economic Development
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
