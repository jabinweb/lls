export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 text-center">
            Our Courses
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-12"></div>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Choose from our comprehensive range of language courses designed to meet your learning goals
          </p>
        </div>
      </section>

      {/* Hindi Courses */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">📘</span>
            <h2 className="text-4xl font-bold text-amber-900">Hindi Courses</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Introductory Hindi */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                <h3 className="text-2xl font-bold text-white">Introductory Hindi</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600 font-medium">Duration</span>
                    <span className="text-amber-900 font-bold">12 Weeks</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600 font-medium">Class Hours</span>
                    <span className="text-amber-900 font-bold">240 Hours</span>
                  </div>
                  <p className="text-gray-700 mt-4">
                    Perfect for beginners with no prior knowledge of Hindi. Build a strong foundation in speaking, reading, and writing.
                  </p>
                </div>
              </div>
            </div>

            {/* Intermediate Hindi */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
                <h3 className="text-2xl font-bold text-white">Intermediate Hindi</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600 font-medium">Duration</span>
                    <span className="text-amber-900 font-bold">12 Weeks</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600 font-medium">Class Hours</span>
                    <span className="text-amber-900 font-bold">240 Hours</span>
                  </div>
                  <p className="text-gray-700 mt-4">
                    Advance your Hindi skills with complex grammar, vocabulary expansion, and cultural immersion.
                  </p>
                </div>
              </div>
            </div>

            {/* Intensive Hindi */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-6">
                <h3 className="text-2xl font-bold text-white">Intensive Hindi</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600 font-medium">Duration</span>
                    <span className="text-amber-900 font-bold">6 Weeks</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600 font-medium">Class Hours</span>
                    <span className="text-amber-900 font-bold">120 Hours</span>
                  </div>
                  <p className="text-gray-700 mt-4">
                    Fast-track your Hindi learning with this accelerated program for motivated learners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Languages */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">🌐</span>
            <h2 className="text-4xl font-bold text-amber-900">Other Languages</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <div className="text-5xl mb-3">🕌</div>
                <h3 className="text-2xl font-bold text-purple-900">Urdu</h3>
                <p className="text-purple-700 mt-2">Learn the language of poetry and culture</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="text-5xl mb-3">🏔️</div>
                <h3 className="text-2xl font-bold text-green-900">Garhwali</h3>
                <p className="text-green-700 mt-2">Discover the local mountain dialect</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                <div className="text-5xl mb-3">🙏</div>
                <h3 className="text-2xl font-bold text-orange-900">Punjabi</h3>
                <p className="text-orange-700 mt-2">Vibrant language of Punjab</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl">
                <div className="text-5xl mb-3">📿</div>
                <h3 className="text-2xl font-bold text-amber-900">Sanskrit</h3>
                <p className="text-amber-700 mt-2">Ancient language of sacred texts</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl border-l-4 border-amber-600">
              <p className="text-lg text-gray-800">
                <strong>Flexible Learning:</strong> Short-term courses customized to your needs are also available 
                (minimum 2 weeks duration).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Options */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-amber-900 mb-8 text-center">Enrollment Options</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Full-Time</h3>
              <p className="text-xl mb-4">4 teaching periods per day</p>
              <p className="text-amber-100">
                Immerse yourself completely in language learning with our intensive full-time program.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Part-Time</h3>
              <p className="text-xl mb-4">Minimum 2 periods per day</p>
              <p className="text-blue-100">
                Balance your studies with other commitments while still making steady progress.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl shadow-lg p-6 text-center">
            <p className="text-gray-700 text-lg">
              <strong>Schedule:</strong> Monday to Friday<br/>
              Students are encouraged to start on Mondays and finish on Fridays.<br/>
              <span className="text-amber-600">Billing is based on the scheduled timetable.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📚</span>
              <h2 className="text-3xl font-bold text-amber-900">Materials & Textbook</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="flex items-start gap-3">
                <span className="text-amber-600 text-xl mt-1">•</span>
                <span>Students are encouraged to bring a <strong>tape recorder or MP3 CD player</strong> for use in class.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-amber-600 text-xl mt-1">•</span>
                <span>The school's own <strong>textbook is a required component</strong> for Hindi instruction.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-amber-600 text-xl mt-1">•</span>
                <span>The book includes a companion <strong>MP3 CD containing audio lessons</strong>.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
