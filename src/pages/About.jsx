export default function About() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* ABOUT HERO */}
      <section className="w-full bg-gradient-to-b from-[#071b34] to-[#06152b]">
        <div className="max-w-7xl mx-auto min-h-[300px] md:h-[450px] px-4 md:px-6 py-12 md:py-0 relative overflow-hidden">
          <div className="md:mt-20 max-w-3xl relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              About Dr. Osaren Emokpae
            </h1>

            <p className="text-gray-300 text-base md:text-lg">
              Scholar▫️Christian Leader ▫️ Author ▫️ Teacher ▫️ Philanthropist
            </p>
          </div>
          {/* Decorative oval - hidden on mobile */}
         <div
        className="absolute left-1/2 -translate-x-1/2 top-[70%] md:left-auto md:right-0 md:top-1/2 md:-translate-y-[70%] md:translate-x-0
      w-[200px] h-[120px] md:w-[340px] md:h-[200px]
      bg-gray-400/60
      rounded-[50%]">  
        </div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="w-full bg-[#FFF5E1]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-10">
            Profile
          </h2>

          <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start">
            {/* Image */}
            <img
              src="/bioImg.png"
              alt="Dr. Osaren Emokpae"
              className="w-full md:w-[360px] h-65 md:h-[24rem] rounded-md object-cover"
            />

            {/* Text */}
            <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
              <p>
                Dr. Osaren Emokpae is a distinguished scholar, global apostle,
                serial investor, and an accomplished management and marketing
                consultant whose impact spans across academia ministry,
                corporate leadership, and philanthropy. A man of uncommon
                insight, he brings together a rare blend of expertise in
                Development Economics, Theology, organizational leadership,
                production management, strategic planning, organisational
                performance management, and microfinance banking.
              </p>

              <p>
                He is the acclaimed author of The Pilgrim's Testament, The Great
                Expectation and Minimum to Maximum, and co-author of Guilty or
                Not Guilty and The Glory in Stewardship. His extensive academic
                background includes pioneering research on the roles of banks in
                economic development and structural adjustment programs at the
                Universities of Lagos and Calabar. He further explored Human
                Resource Management and Organisational Resilience in
                Microfinance during his doctoral studies at the Universities of
                Century and Hertfordshire.
              </p>

              <p>
                He is blissfully married to Imose Enoma Osar-Emokpae, a
                Linguist, Educationist, and Philanthropist. They are blessed
                with wonderful children and grandchildren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC CREDENTIALS */}
      <section className="w-full bg-[#FFF5E1] mt-4">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-12">
            Academic Credentials
          </h2>

          <div className="space-y-4">
            {/* Card */}
            <div className="flex gap-4 md:gap-6 border border-gray-400 rounded-xl p-3 md:p-4 bg-transparent">
              <img
                src="/heart.jpg"
                alt="University logo"
                className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">
                  University of Hertfordshire
                </h3>
                <p className="text-gray-900 mb-1 text-sm md:text-base">
                  DBA, Organisational Resilience
                </p>
                <p className="text-xs md:text-sm text-gray-900 mb-1">
                  2014 – 2020
                </p>
                <p className="text-xs md:text-sm text-gray-900">
                  Resilience in Microfinance
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6 border border-gray-400 rounded-xl p-3 md:p-4">
              <img
                src="/cranfied.jpg"
                className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">
                  Cranfield University
                </h3>
                <p className="text-gray-900 mb-1 text-sm md:text-base">
                  Master's degree in Managing Organisational Performance,
                  organisational Resilience
                </p>
                <p className="text-xs md:text-sm text-gray-900 mb-1">
                  2012 – 2014
                </p>
                <p className="text-xs md:text-sm text-gray-900">
                  Fall and Rise in Organizations"
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6 border border-gray-400 rounded-xl p-3 md:p-4">
              <img
                src="/oxford.jpg"
                className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">
                  University of Oxford – Said Business School
                </h3>
                <p className="text-gray-900 mb-1 text-sm md:text-base">
                  Post Graduate Diploma, Organizational Leadership
                </p>
                <p className="text-xs md:text-sm text-gray-900 mb-1">
                  2010 – 2011
                </p>
                <p className="text-xs md:text-sm text-gray-900">
                  Core Competence and Diversification
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6 border border-gray-400 rounded-xl p-3 md:p-4">
              <img
                src="/lagos.jpg"
                className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">
                  University of Lagos
                </h3>
                <p className="text-gray-900 mb-2 text-sm md:text-base">
                  Msc, Economics-Structural Adjustment Programme and Economic
                  Development
                </p>
                <p className="text-xs md:text-sm text-gray-900">1989 – 1990</p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6 border border-gray-400 rounded-xl p-3 md:p-4">
              <img
                src="/calabar.jpg"
                className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">
                  University of Calabar
                </h3>
                <p className="text-gray-900 mb-2 text-sm md:text-base">
                  Bsc, Economics
                </p>
                <p className="text-xs md:text-sm text-gray-900">1978 – 1980</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="w-full bg-[#FFF5E1] mt-4">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-8 md:mb-12">
            Professional Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* Card 1 */}
            <div className="bg-[#FFF5E1] border border-gray-300 rounded-3xl p-6 md:p-8 shadow-sm">
              <p className="text-gray-900 leading-relaxed text-sm md:text-base">
                Dr. Emokpae serves as Chairman of LAPO NGO and leads the Rhema
                Global Foundation. He is also a board member at McPherson
                University, Havilah Open Door, and the Institute of Leadership
                and Future Studies, where he teaches Organizational Leadership.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFF5E1] border border-gray-300 rounded-3xl p-6 md:p-8 shadow-sm">
              <p className="text-gray-900 leading-relaxed text-sm md:text-base">
                He is the Founder of the ED-John Institute of Management and
                Technology, where he helps young people and professionals
                develop practical skills in ICT, Robotics, AI, Business, and
                Entrepreneurship.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFF5E1] border border-gray-300 rounded-3xl p-6 md:p-8 shadow-sm">
              <p className="text-gray-900 leading-relaxed text-sm md:text-base">
                Over the years, he has also founded and led several impactful
                organizations, including Mindshare Group, Concorde Security and
                Protocol Services (UK), Concorde Express, and the Philips School
                of Futurology and Leadership Research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missions */}
      <section className="w-full bg-[#FFF5E1] mt-4">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-8 md:mb-12">
            Missions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-[#FFF5E1] border border-gray-300 rounded-3xl p-5 md:p-6 shadow-sm">
              <p className="text-gray-900 leading-relaxed text-sm md:text-base">
                A National Leader/General Overseer Emeritus of Foursquare Gospel
                Church Trinidad & Tobago and Guyana, Executive Counsellor
                Emeritus of Foursquare Nigeria, Dr. Emokpae now serves as the
                President and Presiding Apostle of Macedonia Call Global
                Assembly—a ministry with a powerful global vision.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFF5E1] border border-gray-300 rounded-3xl p-5 md:p-6 shadow-sm">
              <p className="text-gray-900 leading-relaxed text-sm md:text-base">
                The vision for Macedonia Call Global Assembly was birthed in his
                heart in 2008 while in Brixton, United Kingdom, within the
                Foursquare movement, and was later incorporated at The Summit in
                Columbia, USA. What began as a divine revelation has since grown
                into an independent global ministry committed to accelerating
                the discipling of nations in preparation for the return of our
                Savior.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFF5E1] border border-gray-300 rounded-3xl p-5 md:p-6 shadow-sm">
              <p className="text-gray-900 leading-relaxed text-sm md:text-base">
                Under his pastoral leadership, he and his team planted thirteen
                churches within the Foursquare movement in Nigeria, three in
                United Kingdom, one in Dominican Republic, one in Guyana and one
                in the USA. Among the foursquare churches he planted in Nigeria
                is the Foursquare Grand Assembly, a remarkable congregation made
                up of three dynamic expressions, the Youth Church, the Church
                for Street Urchins, and the Main Church.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section className="w-full bg-[#FFF5E1] mt-4">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">
            A TRACK RECORD OF EXCELLENCE
          </h2>

          <div className="text-gray-800 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              Dr. Osaren Emokpae is a transformational force in Nigeria's
              marketing and communication landscape—recognized not just for his
              achievements, but for the institutions, people, and ideas he has
              helped build.
            </p>

            <p>
              His career spans major milestones, beginning with his role as
              Senior Brand Manager at Unilever, then Nigeria's largest
              multinational. He went on to serve as Secretary of the National
              Institute of Marketing, where he contributed to raising
              professional standards nationwide.
            </p>

            <p>
              A pioneer at heart, Dr. Emokpae coordinated the birth of the media
              independent practice in Nigeria and became the founding President
              of the Media Independent Practitioners Association of Nigeria
              (MIPAN). He also co-visioned Media Planning Services (MPS) with
              George Thorpe—a research-driven initiative that strengthened
              accurate media planning and buying across the country.
            </p>

            <p>
              His leadership extended into corporate governance as a member of
              the Institute of Directors and as an Executive Director at Insight
              Communications and the Troyka Group. He later founded the
              Mindshare Group—Mindshare Communications and Mindshare
              Datatech—driving innovation across marketing, data, and strategy.
            </p>

            <p>
              Dr. Emokpae also made a defining impact in private broadcasting.
              He led teams that reshaped modern television in Nigeria,
              consulting for pioneers such as DBN and Silverbird Television, and
              supporting strategic projects—including enabling AIT to purchase
              OB Vans for the 1999 World Junior Football Championship.
            </p>

            <p>
              A builder of people and institutions, he founded Philip Business
              School, which evolved into the Ed-John Institute of Management and
              Technology—an NTBE-accredited institution producing globally
              competitive graduates. He also established the Ed-John College of
              Theology and Leadership Studies to nurture strong, ethical
              Christian leaders.
            </p>

            <p>
              Beyond marketing and education, Dr. Emokpae played a strategic
              role in advancing private security in Nigeria. He helped birth
              Halogen Security and founded Concorde Security and Omecom
              Security—organisations that today employ over 5,000 personnel.
              Through the Havilah Group, his enterprises collectively support
              over 7,000 employees nationwide.
            </p>

            <p className="pb-8 md:pb-16">
              Across every sector he touches, Dr. Osaren Emokpae stands out as a
              visionary nation-builder—raising leaders, shaping industries, and
              leaving behind institutions that continue to impact lives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
