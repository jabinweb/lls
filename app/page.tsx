export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header/Nav */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-amber-900">Landour Language School</h1>
              <p className="text-sm text-gray-600">📍 Landour, Mussoorie</p>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#courses" className="text-gray-700 hover:text-amber-700 transition">Courses</a>
              <a href="#schedule" className="text-gray-700 hover:text-amber-700 transition">Schedule</a>
              <a href="#fees" className="text-gray-700 hover:text-amber-700 transition">Fees</a>
              <a href="#accommodation" className="text-gray-700 hover:text-amber-700 transition">Accommodation</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-700 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Landour Language School</h2>
          <p className="text-xl md:text-2xl mb-4">Learn Hindi and More in the Queen of the Hills</p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Landour is a suburb of Mussoorie, a famous hill station in India widely known as the "Queen of the Hills."
            Our school is situated in the Lal Tibba area within the Landour Cantonment, with classes held on the premises of the Kellogg Memorial Church.
          </p>
          <a href="#contact" className="inline-block bg-white text-amber-700 font-semibold px-8 py-3 rounded-full hover:bg-amber-50 transition shadow-lg">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">🎓 Courses Offered</h2>
          
          {/* Hindi Courses */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">📘 Hindi Courses</h3>
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-amber-700 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Course</th>
                    <th className="py-3 px-6 text-left">Duration</th>
                    <th className="py-3 px-6 text-left">Class Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-amber-50 transition">
                    <td className="py-4 px-6">Introductory Hindi Course</td>
                    <td className="py-4 px-6">12 Weeks</td>
                    <td className="py-4 px-6">240 Class Instructions</td>
                  </tr>
                  <tr className="border-b hover:bg-amber-50 transition">
                    <td className="py-4 px-6">Intermediate Hindi Course</td>
                    <td className="py-4 px-6">12 Weeks</td>
                    <td className="py-4 px-6">240 Class Instructions</td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition">
                    <td className="py-4 px-6">Intensive Hindi Course</td>
                    <td className="py-4 px-6">6 Weeks</td>
                    <td className="py-4 px-6">120 Class Instructions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Other Languages */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">🌐 Other Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg text-center shadow hover:shadow-lg transition">
                <p className="text-xl font-semibold text-amber-800">Urdu</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow hover:shadow-lg transition">
                <p className="text-xl font-semibold text-amber-800">Garhwali</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow hover:shadow-lg transition">
                <p className="text-xl font-semibold text-amber-800">Punjabi</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow hover:shadow-lg transition">
                <p className="text-xl font-semibold text-amber-800">Sanskrit</p>
              </div>
            </div>
            <p className="text-gray-700 text-center italic">Short-term courses customized to your needs are also available (minimum 2 weeks).</p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">🗓️ School Term & Schedule</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Winter Break */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Winter Break 2024–2025</h3>
              <ul className="space-y-2 text-gray-700">
                <li>❄️ <strong>Closed:</strong> December 13, 2024 – January 31, 2025</li>
                <li>🏫 <strong>On-Campus Classes Resume:</strong> February 3, 2025</li>
                <li>💻 <strong>Online Classes Resume:</strong> January 13, 2025</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Winter Break 2025–2026</h3>
              <ul className="space-y-2 text-gray-700">
                <li>❄️ <strong>Closed from:</strong> December 12, 2025</li>
              </ul>
            </div>
          </div>

          {/* Daily Schedule */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Daily Schedule</h3>
              <ul className="space-y-2 text-gray-700">
                <li>⏱️ <strong>Class Duration:</strong> 50 minutes</li>
                <li>🕐 <strong>Timings:</strong> 8:20 AM – 4:50 PM (IST)</li>
                <li>☕ <strong>Tea Break:</strong> 10:00 AM (30 minutes)</li>
                <li>🍽️ <strong>Lunch:</strong> 12:10 PM to 1:30 PM</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Online Classes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>💻 <strong>Platform:</strong> Skype or Zoom</li>
                <li>🕐 <strong>Timings:</strong> 8:30 AM – 7:00 PM (IST)</li>
                <li>📅 <strong>Schedule:</strong> Monday to Friday</li>
              </ul>
            </div>
          </div>

          {/* Enrollment Info */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">🧾 Enrollment Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li>📚 <strong>Full-Time:</strong> 4 teaching periods per day</li>
              <li>⏰ <strong>Part-Time:</strong> Minimum 2 periods per day</li>
              <li>📅 <strong>Schedule:</strong> Monday to Friday</li>
              <li className="italic">Students are encouraged to start on Mondays and finish on Fridays. Billing is based on the scheduled timetable.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section id="fees" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">💰 Fees (For the Year 2025)</h2>
          
          <div className="overflow-x-auto shadow-lg rounded-lg mb-8">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-amber-700 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Category</th>
                  <th className="py-3 px-6 text-left">Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-amber-50 transition">
                  <td className="py-4 px-6">Enrolment Fee</td>
                  <td className="py-4 px-6 font-semibold">₹1,500</td>
                </tr>
                <tr className="border-b hover:bg-amber-50 transition">
                  <td className="py-4 px-6">Private Tutorials</td>
                  <td className="py-4 px-6 font-semibold">₹1,000 per person / per lesson</td>
                </tr>
                <tr className="border-b hover:bg-amber-50 transition">
                  <td className="py-4 px-6">Joint Tutorials (2 people)</td>
                  <td className="py-4 px-6 font-semibold">₹750 per person / per lesson</td>
                </tr>
                <tr className="border-b hover:bg-amber-50 transition">
                  <td className="py-4 px-6">Group (3+ persons)</td>
                  <td className="py-4 px-6 font-semibold">₹625 per person / per lesson</td>
                </tr>
                <tr className="border-b hover:bg-amber-50 transition">
                  <td className="py-4 px-6">Examination Fee</td>
                  <td className="py-4 px-6 font-semibold">₹1,000</td>
                </tr>
                <tr className="hover:bg-amber-50 transition">
                  <td className="py-4 px-6">Course Textbook (Introductory Hindi)</td>
                  <td className="py-4 px-6 font-semibold">₹2,200</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Materials */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">📚 Materials & Textbook</h3>
            <ul className="space-y-2 text-gray-700">
              <li>🎧 Students are encouraged to bring a tape recorder or MP3 CD player for use in class.</li>
              <li>📖 The school&apos;s own textbook is a required component for Hindi instruction.</li>
              <li>💿 The book includes a companion MP3 CD containing audio lessons.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodation" className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-amber-900">🏠 Accommodation</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            The school does not arrange accommodation. Students must make their own arrangements early—especially between May and October, when accommodation is limited.
          </p>

          <h3 className="text-3xl font-semibold mb-6 text-gray-800">Recommended Boarding Houses (Walking Distance)</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Rokeby Manor */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3 text-amber-800">Rokeby Manor</h4>
              <div className="space-y-2 text-gray-700 mb-3">
                <p>📞 +91 135 2635604/05/06</p>
                <p>📧 reservations@rokebymanor.com</p>
                <p>🌐 <a href="http://www.rokebymanor.com" target="_blank" className="text-blue-600 hover:underline">www.rokebymanor.com</a></p>
              </div>
              <p className="text-sm text-gray-600 italic">5-min walk. 50% discount on rooms (min. 5 days stay), 25% off food & beverages.</p>
            </div>

            {/* Tabor Cottage */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3 text-amber-800">Tabor Cottage</h4>
              <div className="space-y-2 text-gray-700 mb-3">
                <p>📞 +91 9634443666</p>
                <p>📧 reservations@taborcottage.com</p>
                <p>🌐 <a href="http://www.taborcottage.com" target="_blank" className="text-blue-600 hover:underline">www.taborcottage.com</a></p>
              </div>
              <p className="text-sm text-gray-600 italic">5-min walk. Rooms from ₹1000/night (incl. breakfast). Special rates for long stays.</p>
            </div>

            {/* La Villa Bethany */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3 text-amber-800">La Villa Bethany</h4>
              <div className="space-y-2 text-gray-700 mb-3">
                <p>📞 +91 135 2630054 / 09910049644</p>
                <p>📧 mail@lavillabethany.com</p>
              </div>
              <p className="text-sm text-gray-600 italic">5-min walk from school.</p>
            </div>

            {/* DevDar Woods */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3 text-amber-800">DevDar Woods</h4>
              <div className="space-y-2 text-gray-700 mb-3">
                <p>📞 +91 135 2632644 / 2632544</p>
                <p>📧 anilprakash56@yahoo.com</p>
              </div>
              <p className="text-sm text-gray-600 italic">Located at Sister&apos;s Bazar.</p>
            </div>

            {/* Ivy Bank */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3 text-amber-800">Ivy Bank Guest House</h4>
              <div className="space-y-2 text-gray-700 mb-3">
                <p>📞 +91 135 2631433 / 09897604999</p>
                <p>📧 ivy_bank@yahoo.co.in</p>
                <p>🌐 <a href="http://www.ivybank.in" target="_blank" className="text-blue-600 hover:underline">www.ivybank.in</a></p>
              </div>
              <p className="text-sm text-gray-600 italic">10-min walk from school.</p>
            </div>

            {/* Woodside */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3 text-amber-800">Woodside</h4>
              <div className="space-y-2 text-gray-700 mb-3">
                <p>📞 +91 11 26843503 / 09811322285</p>
                <p>📧 bhattyiz@gmail.com</p>
              </div>
              <p className="text-sm text-gray-600 italic">Sister&apos;s Bazaar, Landour.</p>
            </div>

            {/* See Forth Lodge */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3 text-amber-800">See Forth Lodge</h4>
              <div className="space-y-2 text-gray-700 mb-3">
                <p>📞 +91 135 2632801</p>
                <p>📧 revinodkumarart@hotmail.com</p>
              </div>
              <p className="text-sm text-gray-600 italic">Near Clock Tower, Mussoorie.</p>
            </div>

            {/* Doma's Inn */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3 text-amber-800">Doma&apos;s Inn Guest House</h4>
              <div className="space-y-2 text-gray-700 mb-3">
                <p>📧 siddharth.nima@gmail.com</p>
                <p>📧 tenzing@momotours.com</p>
              </div>
            </div>

            {/* Elcott */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3 text-amber-800">Elcott</h4>
              <div className="space-y-2 text-gray-700">
                <p>📞 +91 135 2632301 / 011 23013188</p>
              </div>
            </div>
          </div>

          {/* Clothing Advice */}
          <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">🧥 Clothing Advice</h3>
            <ul className="space-y-2 text-gray-700">
              <li>🌡️ <strong>All Seasons:</strong> Carry warm clothes (weather can turn cold anytime).</li>
              <li>🌧️ <strong>Monsoon (June–August):</strong> Umbrella/light raincoat required.</li>
              <li>❄️ <strong>Autumn–Winter (Sept–Dec):</strong> Heavy woolens needed.</li>
              <li>🍂 <strong>Typical Weather (Sept–Oct):</strong> Day: 15–20°C; Nights: Quite cold.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-amber-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">📞 Contact Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Address</h3>
              <p className="text-lg">41/2 Landour Cantonment, Mussoorie</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-2">
                <p>📞 Phone: +91 135 2973163</p>
                <p>📱 Mobile: +91 135 2973164</p>
                <p>📧 Email: info@landourlanguageschool.com</p>
                <p>🌐 Website: <a href="http://www.landourlanguageschool.com" target="_blank" className="underline hover:text-amber-200">www.landourlanguageschool.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg mb-2">Landour Language School</p>
          <p className="text-sm opacity-80">Learn Languages in the Heart of the Himalayas</p>
          <p className="text-sm mt-4 opacity-60">© 2025 Landour Language School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
