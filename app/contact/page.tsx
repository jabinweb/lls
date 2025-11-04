export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 text-center">
            Contact Us
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-12"></div>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Get in touch with us to start your language learning journey
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">📞</span>
                  <h2 className="text-3xl font-bold text-amber-900">Get In Touch</h2>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                    <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">
                      📱
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                      <p className="text-blue-900 font-semibold">+91 135 2973163</p>
                      <p className="text-blue-900 font-semibold">+91 135 2973164</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                      <p className="text-green-900 font-semibold break-words">
                        info@landourlanguageschool.com
                      </p>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                    <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">
                      🌐
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Website</h3>
                      <p className="text-purple-900 font-semibold">
                        www.landourlanguageschool.com
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-100 rounded-xl">
                    <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                      <p className="text-amber-900 font-semibold">
                        41/2 Landour Cantonment<br/>
                        Mussoorie, Uttarakhand<br/>
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">📅 Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-white/30">
                    <span className="font-semibold">Monday - Friday</span>
                    <span>8:20 AM - 4:50 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Saturday - Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-amber-100 text-sm mt-4">
                  Note: Closed during winter break (December 13, 2024 – January 31, 2025)
                </p>
              </div>
            </div>

            {/* Map / Location Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">🗺️</span>
                  <h2 className="text-3xl font-bold text-amber-900">Location</h2>
                </div>

                <div className="space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-green-200 to-blue-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-6xl mb-2 block">📍</span>
                      <p className="text-gray-700 font-semibold">Landour, Mussoorie</p>
                      <p className="text-gray-600 text-sm">Uttarakhand, India</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-6">
                    <h4 className="font-bold text-amber-900 mb-3">How to Reach</h4>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-amber-600">✈️</span>
                        <div>
                          <p className="font-semibold">Nearest Airport:</p>
                          <p className="text-sm">Jolly Grant Airport, Dehradun (60 km)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-amber-600">🚉</span>
                        <div>
                          <p className="font-semibold">Nearest Railway Station:</p>
                          <p className="text-sm">Dehradun Railway Station (35 km)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-amber-600">🚗</span>
                        <div>
                          <p className="font-semibold">By Road:</p>
                          <p className="text-sm">Well connected by taxi and bus from Dehradun</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">⛪ Our Venue</h3>
                <p className="text-gray-700 leading-relaxed">
                  Classes are held on the premises of the historic <strong>Kellogg Memorial Church</strong> in 
                  the Lal Tibba area of Landour Cantonment. This peaceful location provides an ideal 
                  environment for focused language study.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-amber-900 mb-4">Send Us a Message</h2>
              <p className="text-gray-600">
                Have questions? Fill out the form below or contact us directly using the information above.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Course Interest</label>
                <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition">
                  <option>Select a course...</option>
                  <option>Introductory Hindi Course (12 weeks)</option>
                  <option>Intermediate Hindi Course (12 weeks)</option>
                  <option>Intensive Hindi Course (6 weeks)</option>
                  <option>Urdu</option>
                  <option>Garhwali</option>
                  <option>Punjabi</option>
                  <option>Sanskrit</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition"
                  placeholder="Tell us about your language learning goals..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-amber-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-xl shadow-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-800 cursor-pointer">
                How do I enroll in a course?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Contact us via phone or email to discuss your course preferences and schedule. 
                We will guide you through the enrollment process and answer any questions you may have.
              </p>
            </details>

            <details className="bg-white rounded-xl shadow-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-800 cursor-pointer">
                Do you offer online classes?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Yes! We offer online classes via Skype or Zoom from 8:30 AM to 7:00 PM IST, Monday to Friday. 
                This is perfect for students who cannot attend in person.
              </p>
            </details>

            <details className="bg-white rounded-xl shadow-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-800 cursor-pointer">
                What is the minimum course duration?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                For standard courses, the minimum is typically 12 weeks for Introductory and Intermediate Hindi, 
                and 6 weeks for Intensive Hindi. Short-term customized courses are available with a minimum of 2 weeks.
              </p>
            </details>

            <details className="bg-white rounded-xl shadow-lg p-6 cursor-pointer">
              <summary className="font-bold text-gray-800 text-lg cursor-pointer">
                Can beginners join any course?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Absolutely! Our Introductory Hindi Course is specifically designed for beginners with no prior 
                knowledge of the language. We also offer placement guidance for those with some experience.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
