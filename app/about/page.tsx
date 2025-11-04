export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 text-center">
            About Us
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-12"></div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📍</span>
              <h2 className="text-3xl font-bold text-amber-900">Our Location</h2>
            </div>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Landour Language School is nestled in the serene hills of <strong>Landour, Mussoorie</strong> — 
                a charming suburb of the famous hill station known as the <em>&quot;Queen of the Hills&quot;</em>.
              </p>
              
              <p>
                The school is located in the picturesque <strong>Lal Tibba area</strong> within the 
                Landour Cantonment, offering students a peaceful and inspiring environment for learning.
              </p>
              
              <p>
                Our classes are conducted on the premises of the historic <strong>Kellogg Memorial Church</strong>, 
                adding a unique cultural and historical dimension to your language learning experience.
              </p>

              <div className="bg-amber-50 rounded-xl p-6 mt-8 border-l-4 border-amber-500">
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Why Landour?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Quiet, distraction-free environment ideal for intensive language study</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Rich cultural heritage and local community for language immersion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Pleasant climate year-round with stunning Himalayan views</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Walking-distance accommodation and amenities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Our Teaching Philosophy</h2>
            <p className="text-lg leading-relaxed mb-4">
              At Landour Language School, we believe in immersive, communicative language learning. 
              Our experienced instructors focus on practical conversation skills while building a 
              strong foundation in grammar and vocabulary.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you&apos;re learning Hindi for travel, work, cultural exploration, or academic purposes, 
              our personalized approach ensures you achieve your language goals effectively.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
