import { useState, useEffect } from "react";
import React from "react";
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
          hero_headline: data.hero_section?.headline || "",
          hero_subtext: data.hero_section?.subtext || "",
          hero_background_image: data.hero_section?.background_image_path || null,
          brand_story: data.brand_story?.brand_story || "",
          academic_biography: data.brand_story?.academic_biography || "",
          apostle_content: data.brand_story?.apostle_biography || "",
          apostle_name: data.brand_story?.apostle?.name || "",
          apostle_image: data.brand_story?.apostle?.image || null,
          mission_statement_1: data.missions?.mission_statement_1 || "",
          mission_statement_2: data.missions?.mission_statement_2 || "",
          mission_statement_3: data.missions?.mission_statement_3 || "",
          track_record_title: data.missions?.track_record?.title || "",
          track_record_content: data.missions?.track_record?.description || "",
          phd_degrees: data.academic_profile?.phd_degrees || [],
          post_doctoral_degrees: data.academic_profile?.post_doctoral_degrees || [],
          location: data.academic_profile?.location || "",
          email: data.academic_profile?.email || "",
          education: data.education || [],
          passion: data.passion || "",
          additional_text: data.additional_text || [],
          top_skills: data.top_skills || [],
          youtube_link: data.youtube_link || "",
          linkedin_link: data.linkedin_link || "",
          custom_sections: data.custom_sections || []
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

const renderCustomSection = (section) => {
  if (!section.visible) return null;

  const data = section.data;
  const sectionTitle = section.label || data?.heading;

  // Helper for consistent headers
  const SectionHeader = () => sectionTitle ? (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{sectionTitle}</h2>
      <div className="border-b-4 border-red-700 w-20 mt-3"></div>
    </div>
  ) : null;
console.log('section type:', JSON.stringify(section.type));
  switch (section.sectionKind) {
    
   case 'image': {
  // Correctly replace escaped \/ sequences with /
  const imageUrl = (data?.image_url || '').replace(/\\\//g, '/');
  const hasImage = Boolean(imageUrl);

  console.log('imageUrl:', imageUrl);

  return (
    <section key={section.id} className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN: Image */}
          <div className="flex flex-col items-center md:items-start">
            {hasImage ? (
              <div className="w-full max-w-md">
                <img
                  src={imageUrl}
                  alt={data.caption || "Biography Image"}
                  className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-100"
                />
                {data.caption && (
                  <p className="mt-4 text-gray-500 font-medium uppercase text-xs tracking-wider">
                    {data.caption}
                  </p>
                )}
              </div>
            ) : (
              <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
                <span className="text-gray-400 text-sm">No image uploaded</span>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Text */}
          <div className="flex flex-col">
            <SectionHeader />
            <div className="text-gray-700 leading-relaxed text-base text-justify">
              {data.content ? (
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
              ) : (
                <p className="italic text-gray-400">No biography content provided.</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

    case 'cards':
      return (
        <section key={section.id} className="w-full py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.cards?.map((card, i) => (
                <div key={i} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  {card.icon && <img src={card.icon} className="w-10 h-10 mb-4" alt="" />}
                  <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                  {card.link && <a href={card.link} className="text-red-700 font-semibold text-sm hover:underline">Learn More →</a>}
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case 'quote':
      return (
        <section key={section.id} className="w-full py-16" style={{ backgroundColor: data.background_color || '#f3f4f6' }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-6xl text-red-700 font-serif opacity-20">“</span>
            <blockquote className="text-xl md:text-2xl italic font-medium text-gray-800 -mt-8 mb-6">
              {data.text}
            </blockquote>
            {data.author && <cite className="text-gray-600 font-bold not-italic">— {data.author}</cite>}
          </div>
        </section>
      );

    case 'two_column':
      return (
        <section key={section.id} className="w-full py-12">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose prose-sm" dangerouslySetInnerHTML={{ __html: data.left_content }} />
            <div className="prose prose-sm" dangerouslySetInnerHTML={{ __html: data.right_content }} />
          </div>
        </section>
      );

    case 'cta':
      return (
        <section key={section.id} className="w-full py-12">
          <div className="max-w-5xl mx-auto px-4 rounded-2xl p-8 md:p-12 text-center text-white" style={{ backgroundColor: data.background_color || '#1e3a8a' }}>
            <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
            <a href={data.button_link} className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              {data.button_text}
            </a>
          </div>
        </section>
      );

    case 'skills_grid':
      return (
        <section key={section.id} className="w-full py-12">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader />
            <div className="flex flex-wrap gap-4 mt-8">
              {data.skills?.map((skill, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200">
                  {skill.icon && <img src={skill.icon} className="w-5 h-5" alt="" />}
                  <span className="font-medium text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case 'richtext':
    case 'text':
    default:
      return (
        <section key={section.id} className="w-full py-12">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader />
            <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </section>
      );
  }
};

  // Create an array of sections in the desired order
  // Each item is { type: 'static' | 'custom', component: jsx, order: number }
 // Map custom sections by the static section they should appear AFTER
// e.g. order: 2 means "insert after the 2nd static section"
const getCustomSectionsAfter = (staticIndex) => {
  return (aboutData.custom_sections || [])
    .filter(s => s.visible && s.order === staticIndex)
    .map(s => ({ ...s, sectionKind: s.type }));
};

const staticSections = [
  { id: 'hero',            order: 1,  name: 'hero' },
  { id: 'academic',        order: 2,  name: 'academic' },
  { id: 'apostle',         order: 3,  name: 'apostle' },
  { id: 'mission',         order: 4,  name: 'mission' },
  { id: 'track_record',    order: 5,  name: 'track_record' },
  { id: 'additional_text', order: 6,  name: 'additional_text' },
  { id: 'brand_story',     order: 7,  name: 'brand_story' },
  { id: 'location_email',  order: 8,  name: 'location_email' },
  { id: 'top_skills',      order: 9,  name: 'top_skills' },
];

  // Prepare custom sections with their order
// const customSectionsWithOrder = (aboutData.custom_sections || [])
//   .filter(s => s.visible)
//   .map(s => ({ ...s, sectionKind: s.type, type: 'custom' })); // order comes directly from API

  // Combine and sort by order
//   const allSections = [
//   ...staticSections,
//   ...customSectionsWithOrder.map(s => ({ ...s, sectionKind: s.type, type: 'custom' }))
// ].sort((a, b) => a.order - b.order);

const renderStaticSection = (name) => {
  // Render static sections
        switch(name) {
          case 'hero':
            return (
              <section key="hero" className="w-full bg-[#FFF5E1]">
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-1/2">
                    <div className="border border-gray-600 h-full p-6 md:p-16 flex flex-col justify-center">
                      <h1 className="text-3xl md:text-3xl font-bold mb-2 text-gray-900">
                        {aboutData.hero_headline || "Dr. Osaren Emokpae"}
                      </h1>
                      <p className="text-xl md:text-md font-semibold text-gray-500 mb-6 text-justify">
                        {aboutData.hero_subtext?.split("\n")[0] || "A Development Economist"}
                      </p>
                      {aboutData.hero_subtext && (
                        <div className="text-gray-600 leading-relaxed text-sm md:text-base text-justify whitespace-pre-line">
                          {aboutData.hero_subtext.split("\n").slice(1).join("\n")}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <img src={aboutData.hero_background_image || "Heroimage.png"} alt="Dr. Osaren Emokpae" className="w-full h-full object-cover" />
                  </div>
                </div>
              </section>
            );
            
          case 'academic':
            return (
              <section key="academic" className="w-full bg-white py-12 md:py-16 pl-10">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                    <div>
                      <div className="flex flex-col items-start mt-10">
                        <h2 className="text-2xl md:text-3xl text-gray-900 font-bold">Academic Biography</h2>
                        <div className="border-b-4 border-red-700 w-24 mt-4"></div>
                      </div>
                      <div className="mt-6 space-y-4 text-gray-800 text-sm md:text-base leading-relaxed text-justify">
                        {aboutData.academic_biography ? (
                          <div dangerouslySetInnerHTML={{ __html: aboutData.academic_biography }} />
                        ) : (
                          <p className="text-justify">Dr. Osaren Emokpae is a world renowned authority...</p>
                        )}
                      </div>
                      <div className="mt-12 font-semibold md:items-start">
                        <div className="flex items-start gap-3 mb-3"><img src="three.png" alt="" /><div><p className="text-gray-500 text-md mt-1">Fellow ARCON</p></div></div>
                        <div className="flex items-start gap-3 mb-3"><img src="three.png" alt="" /><div><p className="text-gray-500 text-md mt-1">Fellow Institute of Marketing</p></div></div>
                        <div className="flex items-start gap-3"><img src="three.png" alt="" /><div><p className="text-gray-500 text-md mt-1">Fellow Institute of Management Consultants</p></div></div>
                      </div>
                    </div>
                    <div>
                      <div className="p-10">
                        <h3 className="text-xl text-gray-800 md:text-2xl font-bold mb-6">Academic Profile</h3>
                        <div className="space-y-4 mb-8">
                          {aboutData.phd_degrees.map((degree, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <img src="Frame.png" alt="" />
                              <div><p className="text-gray-400 text-sm mb-2">{degree.title}</p><p className="text-sm md:text-base font-semibold text-gray-600">{degree.institution}</p></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
            
          case 'apostle':
            return (
              <section key="apostle" className="w-full py-12 md:py-18">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                  <div className="bg-[#FFF5E1] rounded-3xl border-l-8 border-t-8 border-black p-6 md:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h2 className="text-2xl md:text-3xl text-gray-800 font-bold mb-10">{aboutData.apostle_name || "Apostle. Osaren Emokpae"}</h2>
                        <div className="space-y-6 text-gray-800 text-md md:text-base leading-relaxed text-justify">
                          {aboutData.apostle_content ? <div dangerouslySetInnerHTML={{ __html: aboutData.apostle_content }} /> : <><p className="text-justify">National Leader/General Overseer Emeritus...</p><p className="text-justify">The vision for Macedonia Call Global Assembly...</p></>}
                        </div>
                        <hr className="border-gray-600 mt-20" />
                        <div className="mt-8">
                          <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">Education</h3>
                          <div className="space-y-5 text-sm text-gray-800">
                            {aboutData.education.map((edu, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <img src="Frame-book.png" alt="" />
                                <div><p className="text-gray-500 text-sm mb-1">{edu.title}</p><p className="text-sm md:text-base font-semibold text-gray-600">{edu.institution}</p></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-8">
                        <div className="w-full -m-0">
                          <img src={aboutData.apostle_image || "Hero02.png"} alt="Apostle Osaren Emokpae" className="w-full h-96 object-cover object-top rounded-xl" />
                        </div>
                        <div className="flex items-center gap-3 -mt-4 mb-1 ml-8">
                          <a href={aboutData.youtube_link || "https://www.youtube.com/@theanchor1079"} target="_blank" rel="noopener noreferrer"><img src="youtube.png" alt="YouTube" className="cursor-pointer h-12" /></a>
                          <a href={aboutData.linkedin_link || "https://www.linkedin.com/in/osaren-emokpae-phd-dba-fbim-frpa-mcid-207b268/"} target="_blank" rel="noopener noreferrer"><img src="linkedin.png" alt="LinkedIn" className="cursor-pointer" /></a>
                        </div>
                        <hr className="border-gray-500" />
                        <div className="bg-white border-l-8 border-t-8 border-gray-600 rounded-3xl p-6">
                          <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-3"><img src="fire.png" alt="" />Passion</h3>
                          <p className="text-gray-700 text-justify">{aboutData.passion || "Monitoring the next generation of leaders"}</p>
                        </div>
                        <hr className="border-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
            
          case 'mission':
            return (
              <section key="mission" className="w-full bg-white py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                  <h2 className="text-2xl md:text-3xl text-gray-900 font-bold">Mission</h2>
                  <div className="border-b-4 border-red-700 w-16 mt-4"></div>
                  <div className="bg-[#FFF5E1] rounded-3xl p-8 md:p-12 mt-8 border border-r-0 border-b-0  text-gray-800 border-gray-400 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)]">
                    {aboutData.mission_statement_1 ? <div dangerouslySetInnerHTML={{ __html: aboutData.mission_statement_1 }} /> : <p className="text-md text-gray-800 leading-relaxed text-justify">A National Leader/General Overseer Emeritus...</p>}
                  </div>
                </div>
              </section>
            );
            
          case 'track_record':
            return (
              <section key="track_record" className="w-full py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                  <h2 className="text-2xl md:text-3xl text-gray-900 font-bold">{aboutData.track_record_title || "A Track Record of Excellence in the Market"}</h2>
                  <div className="border-b-4 border-red-800 w-36 mt-4"></div>
                  <div className="bg-white rounded-2xl p-8 md:p-12 mt-8 border">
                    <div className="space-y-5 text-gray-900 text-sm md:text-base leading-relaxed text-justify">
                      {aboutData.track_record_content ? <div dangerouslySetInnerHTML={{ __html: aboutData.track_record_content }} /> : <p className="text-justify">Dr. Osaren Emokpae is a transformational force...</p>}
                    </div>
                  </div>
                </div>
              </section>
            );
            
          case 'additional_text':
            return (
              <section key="additional_text" className="w-full py-12 md:py-13 -mt-8">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                  <div className="bg-[#FFF5E1] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-8 items-start">
                    <div className="space-y-2 mt-10">
                      {aboutData.additional_text.map((line, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed mt-4 ml-8 text-sm md:text-base text-justify">{line.text || line}</p>
                      ))}
                    </div>
                    <div><img src="certificate.png" alt="Section image" className="w-full h-[550px] rounded-lg mt-4 mb-4" /></div>
                  </div>
                </div>
              </section>
            );
            
          case 'brand_story':
            return (
              <section key="brand_story" className="w-full bg-white py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                  <div className="bg-white rounded-3xl p-8 md:p-12 border-r-4 border-b-4 border-gray-300">
                    <div className="text-gray-900 leading-relaxed text-sm md:text-base text-justify">
                      {aboutData.brand_story ? <div dangerouslySetInnerHTML={{ __html: aboutData.brand_story }} /> : <p className="text-justify">Dr. Osaren Emokpae is a distinguished scholar...</p>}
                    </div>
                  </div>
                </div>
              </section>
            );
            
          case 'location_email':
            return (
              <section key="location_email" className="w-full py-12 md:py-13 -mt-8">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                  <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-60 mt-8 items-start">
                    <div className="flex items-start gap-3">
                      <img src="location.png" alt="" className="mt-6"/>
                      <div><p className="text-gray-500 text-md mb-1">Location</p><p className="text-sm md:text-base font-bold text-gray-600">The Summit, Autumn Glen, Columbia, U.S.A</p></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <img src="mail.png" alt="" />
                      <div><p className="text-gray-500 text-md mb-1">Email</p><p className="text-sm md:text-base font-bold text-gray-600">osaremokpae@yahoo.com</p></div>
                    </div>
                  </div>
                </div>
              </section>
            );
            
          case 'top_skills':
            return (
              <section key="top_skills" className="w-full bg-white py-12 md:py-14">
                <div className="max-w-6xl mx-auto px-4 md:px-4">
                  <h2 className="text-2xl md:text-3xl text-gray-800 font-bold mb-8">Top Skills</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4 bg-[#FFF5E1] rounded-2xl rounded-r-full rounded-l-none p-2">
                    {aboutData.top_skills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <img src={skill.icon} alt="" />
                        <p className="font-semibold text-base md:text-md text-gray-700">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
            
          default:
            return null;
        }
};

  return (
  <div className="min-h-screen w-full bg-white">
    {staticSections.map((section) => (
      <React.Fragment key={section.id}>
        {/* Render the static section */}
        {renderStaticSection(section.name)}

        {/* Inject any custom sections that belong after this static section */}
        {getCustomSectionsAfter(section.order).map(cs => renderCustomSection(cs))}
      </React.Fragment>
    ))}
  </div>
);
}