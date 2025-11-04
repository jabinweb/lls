import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-amber-100 rounded-full">
              <span className="text-amber-800 font-semibold"> Learn in the Himalayas</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Landour Language School
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-gray-600 mb-8">
              <span className="text-2xl"></span>
              <p>Landour, Mussoorie - Queen of the Hills</p>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Master Hindi, Urdu, Garhwali, Punjabi, and Sanskrit in the peaceful Himalayan foothills
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/courses" 
                className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Explore Courses
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform"></span>
              </Link>
              <Link 
                href="/contact" 
                className="bg-white text-amber-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-amber-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-600 mb-2">12+</div>
              <p className="text-gray-600">Weeks Programs</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-600 mb-2">240+</div>
              <p className="text-gray-600">Class Hours</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-600 mb-2">5+</div>
              <p className="text-gray-600">Languages</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience authentic language learning in a serene mountain setting
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
                
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Instructors</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn from experienced teachers with decades of language teaching expertise and proven methodologies.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
                
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Peaceful Environment</h3>
              <p className="text-gray-600 leading-relaxed">
                Study in the serene Himalayan foothills, away from city distractions, perfect for focused learning.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
                
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Programs</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose from full-time, part-time, and online options designed to fit your schedule and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600">Choose from our comprehensive language programs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-xl p-8 text-white transform hover:scale-105 transition-all">
              <div className="text-5xl mb-4"></div>
              <h3 className="text-3xl font-bold mb-3">Hindi</h3>
              <p className="text-blue-100 mb-6">Introductory, Intermediate & Intensive courses</p>
              <ul className="space-y-2 text-blue-50 mb-6">
                <li className="flex items-center gap-2">
                  <span></span>
                  <span>6-12 week programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span></span>
                  <span>120-240 class hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <span></span>
                  <span>All skill levels</span>
                </li>
              </ul>
              <Link href="/courses" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
                Learn More
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl shadow-xl p-8 text-white transform hover:scale-105 transition-all">
              <div className="text-5xl mb-4"></div>
              <h3 className="text-3xl font-bold mb-3">Urdu</h3>
              <p className="text-purple-100 mb-6">Language of poetry and culture</p>
              <ul className="space-y-2 text-purple-50 mb-6">
                <li className="flex items-center gap-2">
                  <span></span>
                  <span>Customizable duration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span></span>
                  <span>Reading & writing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span></span>
                  <span>Literary focus</span>
                </li>
              </ul>
              <Link href="/courses" className="inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition">
                Learn More
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl shadow-xl p-8 text-white transform hover:scale-105 transition-all">
              <div className="text-5xl mb-4"></div>
              <h3 className="text-3xl font-bold mb-3">Regional</h3>
              <p className="text-green-100 mb-6">Garhwali, Punjabi & Sanskrit</p>
              <ul className="space-y-2 text-green-50 mb-6">
                <li className="flex items-center gap-2">
                  <span></span>
                  <span>Cultural immersion</span>
                </li>
                <li className="flex items-center gap-2">
                  <span></span>
                  <span>Local expertise</span>
                </li>
                <li className="flex items-center gap-2">
                  <span></span>
                  <span>Flexible schedules</span>
                </li>
              </ul>
              <Link href="/courses" className="inline-block bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl md:text-2xl text-amber-100 mb-10 leading-relaxed">
            Join students from around the world learning languages in the heart of the Himalayas
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-amber-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition-all transform hover:scale-105 shadow-2xl"
            >
              Get In Touch
            </Link>
            <Link 
              href="/fees" 
              className="bg-amber-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-950 transition-all transform hover:scale-105 shadow-2xl border-2 border-white/30"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
