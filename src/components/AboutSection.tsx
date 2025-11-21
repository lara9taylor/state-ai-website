import React from 'react';

export const AboutSection: React.FC = () => {
  return (
      <section className="py-6 px-4" id="about">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#19FF7F]">
              Why Work With State AI Strategies?
            </h2>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#19FF7F] to-[#FDC526] rounded-full opacity-20 blur-xl" />
                <img
                  src="https://letaibe.com/images/lara-headshot.jpeg"
                  alt="Lara Taylor - AI Consultant and Founder of State AI Strategies, Mississippi"
                  className="w-full rounded-full border-4 border-white/10 relative z-10"
                />
              </div>

              <div className="md:w-2/3 space-y-4">
                <p className="text-white/90 text-lg leading-relaxed">
                  I'm Lara Taylor, and I've spent over 20 years turning complexity into clarity. From directing live TV at WLOX-TV to teaching AI workshops at MSU, I bring real-world experience to build AI that fits your needs. I'm not just bringing AI to Mississippi. I'm building it from the heart of Starkville.
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  <strong className="text-[#19FF7F]">Proven Impact:</strong> Trained 2,000+ educators and students, boosted client engagement by 150%+, authored a published article on AI Tools for Podcasts, and helped shaped global AI literacy with my D.A.R.E.S. framework.
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  <strong className="text-[#19FF7F]">Local Roots:</strong> Partnered with Starkville Strong and CoWork to empower our community.
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  <strong className="text-[#19FF7F]">Your Partner:</strong> I listen first, then craft solutions with strategy, tech, and heart.
                </p>
              </div>
            </div>

            {/* Mississippi Connection Image */}
            <div className="mt-12 rounded-xl overflow-hidden">
              <img
                src="/images/Starkville, MS - December 2020 Entrance sign to the campus of Mississippi State University..jpeg"
                alt="Entrance sign to Mississippi State University campus in Starkville, Mississippi during winter season"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
  );
};