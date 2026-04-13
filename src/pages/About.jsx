export default function About() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* HERO SECTION - Dark blue with title left, image right */}
      <section className="w-full bg-[#FFF5E1] py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text */}
            <div className="text-gray-900 space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Dr. Osaren Emokpae
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-6">
                A Development Economist
              </p>
              <p className="text-gray-600 leading-relaxed text-lg md:text-base">
                A Doctor of Business Administration with a core
              </p>
              <p className="text-gray-700 leading-relaxed text-lg md:text-base">
                focus on Organisational Resilience in
              </p>
              <p className="text-gray-700 leading-relaxed text-lg md:text-base">
                Microfinance banking. He is an Apostle of God
              </p>
              <p className="text-gray-700 leading-relaxed text-lg md:text-base">
                with a strong entrepreneurial grace, creating
              </p>
              <p className="text-gray-700 leading-relaxed text-lg md:text-base">
                jobs and contributing to the economic growth of
              </p>
              <p className="text-gray-700 leading-relaxed text-lg md:text-base">
                nations.
              </p>
            </div>

            {/* Right: Image Placeholder */}
            <div className="w-full h-[350px] md:h-[450px] bg-gray-400 rounded-lg flex items-center justify-center">
              <img
                src="Heroimage.png"
                alt="Dr. Osaren Emokpae"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO PARAGRAPH - Beige background, full width */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-[#FFF5E1] rounded-3xl p-8 md:p-12 border-l-8 border-t-8 border-black">
            <p className="text-gray-900 leading-relaxed text-sm md:text-base">
              Dr. Osaren Emokpae is a distinguished scholar, global apostle,
              serial investor, and an accomplished management and marketing
              consultant whose impact spans across academia, ministry, corporate
              leadership, and philanthropy. A man of uncommon insight, he brings
              together a rare blend of expertise in Development Economics,
              Theology, organizational leadership, production management,
              strategic planning, organisational performance management, and
              microfinance banking.
              <br />
              <br />
              He is the acclaimed author of The Pilgrim’s Testament, The Great
              Expectation and Minimum to Maximum, and co-author of Guilty or Not
              Guilty and The Glory in Stewardship.His extensive academic
              background includes pioneering research on the roles of banks in
              economic development and structural adjustment programs at the
              Universities of Lagos and Calabar. He further explored Human
              Resource Management and Organisational Resilience in Microfinance
              during his doctoral studies at the Universities of Century and
              Hertfordshire.
              <br />
              <br />
              He is blissfully married to Imose Enoma Osar-Emokpae, a Linguist,
              Educationist, and Philanthropist. They are blessed with wonderful
              children and grandchildren.
            </p>
          </div>
        </div>
      </section>

      {/* ACADEMIC SECTION - Two columns */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Left Column: Academic Biography */}
            <div>
              <h2 className="text-2xl md:text-3xl text-gray-900 font-bold mb-6 border-b-4 border-red-700 pb-5 inline-block">
                Academic Biography
              </h2>
              <div className="mt-6 space-y-4 text-gray-800 text-sm md:text-base leading-relaxed">
                <p>
                  Dr. Osaren Emokpae is a world renowed authority on
                  Organisational Resilience in Microfinance Banking. With many
                  years of experience in academic and policy advisory, his work
                  has been instrumental in shaping microfinance banking in
                  Nigeria.
                </p>
                <p>
                  He researched the role of banks iin economic development,
                  structural adjustment programmmes, and economic development
                  processes during his student days at the Universities of Lagos
                  and Calabar. In his Doctoral degrees he researched Human
                  Resource Management and Organisational Resilience in
                  Microfinance at the Universities of Century and Hertfordshire.
                  In his post doctoral degrees, he researched business
                  diversification at OxfordUniversity, Resilence of SMEs at
                  Cranfield University.
                </p>
              </div>
            </div>

            {/* Right Column: Academic Profile Box */}
            <div>
              <div className="p-10">
                <h3 className="text-xl text-gray-800 md:text-2xl font-bold mb-6">
                  Academic Profile
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <img src="Frame.png" alt="" />
                    <div>
                      <p className=" text-gray-400 text-sm mb-2 ">
                        Ph.D in Political Economic Management
                      </p>
                      <p className="text-sm  md:text-base font-semibold  text-gray-600">
                        University of Century
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src="Frame.png" alt="" />
                    <div>
                      <p className=" text-gray-400 text-sm mb-2 ">
                        Ph.D in Organisational Resilience in Microfinance
                      </p>
                      <p className="text-sm  md:text-base font-semibold  text-gray-600">
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
                      <p className=" text-gray-400 text-sm mb-2 ">
                        Bussiness Diversification
                      </p>
                      <p className="text-sm  md:text-base font-semibold  text-gray-600">
                        Oxford University
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src="Frame1.png" alt="" />
                    <div>
                      <p className=" text-gray-400 text-sm mb-2 ">
                        Resilience of SMEs
                      </p>
                      <p className="text-sm  md:text-base font-semibold  text-gray-600">
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

      {/* APOSTLE SECTION - Large rounded border box */}
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
                  <p>
                    National Leader/General Overseer Emeritus of Foursquare
                    Gospel Church Trinidad & Tobago and Guyana, Executive
                    Counsellor Emeritus of Foursquare Nigeria, Dr. Emokpae now
                    serves as the President and Presiding Apostle of Macedonia
                    Call Global Assembly—a ministry with a powerful global
                    vision.
                  </p>
                  <p>
                    The vision for Macedonia Call Global Assembly was birthed in
                    his heart in 2008 while in Brixton, United Kingdom, within
                    the Foursquare movement, and was later incorporated at The
                    Summit in Columbia, USA. What began as a divine revelation
                    has since grown into an independent global ministry
                    committed to accelerating the discipling of nations in
                    preparation for the return of our Savior.
                  </p>
                </div>
                <hr className="border-gray-600 mt-20" />
                {/* Education Section */}
                <div className="mt-8">
                  <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">
                    Education
                  </h3>
                  <div className="space-y-5 text-sm text-gray-800">
                    <div className="flex items-start gap-3">
                      <img src="Frame-book.png" alt="" />
                      <div>
                        <p className=" text-gray-500 text-sm mb-1 ">
                          Christian Leadership
                        </p>
                        <p className="text-sm  md:text-base font-semibold  text-gray-600">
                          Haggai Institute Hawail, U.S.A
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <img src="Frame-book.png" alt="" />
                      <div>
                        <p className=" text-gray-500 text-sm mb-1 ">
                          Christian Leadership
                        </p>
                        <p className="text-sm  md:text-base font-semibold  text-gray-600">
                          British Foursquare Seminary,
                        </p>
                        <p className="text-sm  md:text-base font-semibold  text-gray-600">
                          Hastings
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <img src="Frame-book.png" alt="" />
                      <div>
                        <p className=" text-gray-500 text-sm mb-1 ">
                          Christian Leadership
                        </p>
                        <p className="text-sm  md:text-base font-semibold  text-gray-600">
                          Trinity College, U.S.A
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Image  */}
              <div className="space-y-8 ">
                {/* Image Placeholder */}

                <img
                  src="Hero02.png"
                  alt="Apostle Osaren Emokpae"
                  className="w-[370px] h-[390px]  ml-12"
                />
                <div className="flex items-center gap-3 -mt-4 mb-1 ml-8">
                  <img src="youtube.png" alt="Radio Icon" />
                  <img src="linkdin.png" alt="" />
                </div>
                <hr className="border-gray-500 -mt-" />
                {/* Passion Box */}
                <div className="bg-white border-l-8 border-t-8 border-gray-600 rounded-3xl p-6 ">
                  <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-3">
                    <img src="fire.png" alt="" />
                    Passion
                  </h3>
                  <p className="text-gray-700">
                    Monitoring the next generation of leaders
                  </p>
                </div>
                <hr className="border-gray-500 " />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSIONS SECTION - Three boxes */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl text-gray-800 font-bold mb-8 border-b-4 border-red-700 pb-2 inline-block">
            Missions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
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
                United Kingdom, within the 
              </p>
              <p className="text-md text-gray-800 leading-relaxed">
               Foursquare
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
              <p className="text-md text-gray-800 leading-relaxed">
                into an
              </p>
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
              <p className="text-md text-gray-800 leading-relaxed">
               Church
              </p>
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
      <section className="w-full  py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl text-gray-900 font-bold mb-8 text-center border-b-4 border-red-700 pb-5 inline-block">
            A Track Record of Excellence In The Market
          </h2>

          <div className="bg-[#FFF5E1] rounded-2xl p-8 md:p-12 mt-8 border border-gray-400">
            <div className="space-y-5 text-gray-900 text-sm md:text-base leading-relaxed">
              <p>
                Dr. Osaren Emokpae is a transformation leader in Nigeria's
                marketing and communications landscape—recognized not just for
                his achievements, but for the institutions, people, and ideas he
                has helped build.
              </p>
              <p>
                Over three distinguished milestones, beginning with his Senior
                Brand Manager at Unilever, then Nigeria's largest and most
                trusted corporation, where he anchored the Secretary of the
                National Institute of Marketing, where he contributed to raising
                professional standards nationwide.
              </p>
              <p>
                As a Principal Consultant, Dr. Emokpae continued to serve as a
                strategy anchor to the media independent practice in Nigeria,
                founding President of the Media Independent Practitioners
                Association of Nigeria (MIPAN), he also co-chaired Media
                Independent Practitioners. He continues to lead in raising
                standards in the management and organization of the
                communication profession all across the country.
              </p>
              <p>
                He seamlessly extended into corporate governance as a member of
                the Institute of Directors and as an Executive Director at Lagos
                State Communications Limited. In this role, he also founded the
                MicroVest Group (formerly a division at Lagos Communications,
                which he nurtured into a sector-leading corporation. Endorsed
                for a national award by CIBN, this firm has grown into a leading
                entity in insurance.
              </p>
              <p>
                Dr Emokpae also made a defining impact in private broadcasting,
                He led teams that managed modern television in Nigeria, and
                carefully piloted events like SATV and Silverbird Television,
                and supporting strategic projects during his roles as General
                Manager PR Verox for The 1999 World Junior Football
                Championship.
              </p>
              <p>
                A builder of institutions, Dr. Emokpae earned both respect and
                admiration through his work in shaping key sectors across the
                National Institute of Marketing, which evolved into the 4th
                joint venture of Insurance with Wema Bank. Among his
                achievements, he led implementation strategies that ensured Wema
                Bank successfully established the 4th Joint College of Theology
                and Leadership Studies to nurture strong, ethical Christian
                leaders.
              </p>
              <p>
                Beyond marketing and education, Dr Emokpae earned a strategic
                role in the insurance industry, which evolved into his joint
                venture at Chartered Microfinance, serving as a board member and
                acting on a visionary platform—challenging conventional systems
                to introduce leading ideas across every significant institution
                under his watch. He is both an institution builder, a
                Kingdom-builder, a thought-leader, and a humble servant of God
                whose work will continue to impact lives.
              </p>
              <p>
                Driven by a burning fire for building, Dr. Emokpae Emokpae
                serves as President of Zion Of Pentecost World Outreach
                Foundation. He is also a board member at CANDA (Charismatic
                Association of Anglican Dioceses in Africa), Secretary of
                International Council of Pentecostal Churches of Organisation
                Leadership, He is the Founder of the IEC (Int Institute of
                Management and Technology), and he helps young people and
                professional leaders. He anchors both in the School of Business,
                and Graduate School's MBA Program, and Practical Christian
                Ministry Programme at Faith Academy. Regardless of the industry,
                He has invested in Kingdom-builders who exercise wise,
                Scriptural and Practical Services (MS), Corporate Finance, and
                the Philip School of Patronage and Leadership Research.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-red-800" />

      {/* TOP SKILLS SECTION */}
      <section className="w-full bg-white py-12 md:py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-4">
          <h2 className="text-2xl md:text-3xl text-gray-800 font-bold mb-8">
            Top Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 bg-[#FFF5E1] rounded-2xl p-8">
            <div className="flex items-center gap-2">
              <img src="monitoring.png" alt="" />
              <p className="font-semibold text-base md:text-md text-gray-700">Mentoring</p>
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
              <img src="strategic.png" alt="" />
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
