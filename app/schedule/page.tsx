export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 text-center">
            School Schedule
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-12"></div>
        </div>
      </section>

      {/* Winter Break Info */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">🗓️</span>
            <h2 className="text-4xl font-bold text-amber-900">School Terms & Breaks</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Winter Break 2024-2025 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                <h3 className="text-2xl font-bold text-white">Winter Break 2024–2025</h3>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl">❄️</span>
                  <div>
                    <p className="font-semibold text-gray-800">Closed Period</p>
                    <p className="text-gray-600">December 13, 2024 – January 31, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-2xl">🏫</span>
                  <div>
                    <p className="font-semibold text-gray-800">On-Campus Classes Resume</p>
                    <p className="text-gray-600">February 3, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-2xl">💻</span>
                  <div>
                    <p className="font-semibold text-gray-800">Online Classes Resume</p>
                    <p className="text-gray-600">January 13, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Winter Break 2025-2026 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
                <h3 className="text-2xl font-bold text-white">Winter Break 2025–2026</h3>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl">❄️</span>
                  <div>
                    <p className="font-semibold text-gray-800">Closed From</p>
                    <p className="text-gray-600">December 12, 2025</p>
                  </div>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 mt-4">
                  <p className="text-gray-700 text-sm">
                    <strong>Note:</strong> Exact return dates for 2026 will be announced closer to the break period.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">⏰</span>
            <h2 className="text-4xl font-bold text-amber-900">Daily Schedule</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Class Timings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Class Duration</span>
                    <span className="text-amber-900 font-bold">50 minutes</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Operating Hours</span>
                    <span className="text-amber-900 font-bold">8:20 AM – 4:50 PM</span>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      <strong>Timezone:</strong> IST (Indian Standard Time)
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Break Times</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">☕</span>
                      <span className="font-bold text-gray-800">Tea Break</span>
                    </div>
                    <p className="text-gray-700">10:00 AM</p>
                    <p className="text-gray-600 text-sm">Duration: 30 minutes</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🍽️</span>
                      <span className="font-bold text-gray-800">Lunch Break</span>
                    </div>
                    <p className="text-gray-700">12:10 PM – 1:30 PM</p>
                    <p className="text-gray-600 text-sm">Duration: 1 hour 20 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-6 border-l-4 border-amber-600">
              <p className="text-gray-800">
                <strong>📅 Weekly Schedule:</strong> Classes run Monday through Friday
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Classes */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">💻</span>
            <h2 className="text-4xl font-bold text-amber-900">Online Classes</h2>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Platform Options</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white/20 rounded-lg p-4">
                    <span className="text-3xl">📹</span>
                    <span className="text-xl font-semibold">Skype</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/20 rounded-lg p-4">
                    <span className="text-3xl">🎥</span>
                    <span className="text-xl font-semibold">Zoom</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Operating Hours</h3>
                <div className="bg-white/20 rounded-lg p-6">
                  <p className="text-xl font-semibold mb-2">8:30 AM – 7:00 PM (IST)</p>
                  <p className="text-blue-100">Monday to Friday</p>
                </div>
                <div className="mt-4 bg-white/10 rounded-lg p-4">
                  <p className="text-sm text-blue-100">
                    💡 Flexible timing options available to accommodate different time zones
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/30">
              <p className="text-lg">
                Our online classes provide the same quality instruction as our on-campus programs, 
                with interactive lessons and personalized attention from experienced instructors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weather & Clothing Advice */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">🧥</span>
            <h2 className="text-4xl font-bold text-amber-900">Clothing Advice</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-900 mb-3">🌡️ All Seasons</h3>
                <p className="text-gray-700">
                  Carry warm clothes as the weather can turn cold anytime in the mountains.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-900 mb-3">🌧️ Monsoon (June–August)</h3>
                <p className="text-gray-700">
                  Umbrella or light raincoat is essential during the rainy season.
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-900 mb-3">🍂 Autumn–Winter (Sept–Dec)</h3>
                <p className="text-gray-700">
                  Heavy woolens are needed as temperatures drop significantly.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-900 mb-3">🌤️ Typical Weather (Sept–Oct)</h3>
                <p className="text-gray-700">
                  <strong>Day:</strong> 15–20°C<br/>
                  <strong>Nights:</strong> Quite cold
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-6">
              <p className="text-gray-800">
                <strong>👜 Packing Tip:</strong> Layering is key! Bring a mix of light and warm clothing 
                to adapt to the changing mountain weather throughout the day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
