import Link from 'next/link';

export default function FeesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 text-center">
            Fees & Pricing
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-12"></div>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Transparent pricing for quality language education (Fees for the Year 2025)
          </p>
        </div>
      </section>

      {/* Fees Table */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">💰</span>
            <h2 className="text-4xl font-bold text-amber-900">Fee Structure</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Enrollment Fee */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">Enrolment Fee</h3>
                <span className="text-3xl font-bold text-white">₹1,500</span>
              </div>
              <p className="text-amber-100 mt-2">One-time registration fee for new students</p>
            </div>

            {/* Tutorial Fees */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Tutorial Fees (Per Lesson)</h3>
              
              <div className="space-y-4">
                {/* Private Tutorials */}
                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                  <div>
                    <h4 className="text-xl font-bold text-blue-900">Private Tutorials</h4>
                    <p className="text-blue-700 text-sm mt-1">One-on-one personalized instruction</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-blue-900">₹1,000</span>
                    <p className="text-blue-700 text-sm">per person / per lesson</p>
                  </div>
                </div>

                {/* Joint Tutorials */}
                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                  <div>
                    <h4 className="text-xl font-bold text-green-900">Joint Tutorials</h4>
                    <p className="text-green-700 text-sm mt-1">Two students learning together</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-green-900">₹750</span>
                    <p className="text-green-700 text-sm">per person / per lesson</p>
                  </div>
                </div>

                {/* Group Classes */}
                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
                  <div>
                    <h4 className="text-xl font-bold text-purple-900">Group Classes</h4>
                    <p className="text-purple-700 text-sm mt-1">Three or more students (3+ persons)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-purple-900">₹625</span>
                    <p className="text-purple-700 text-sm">per person / per lesson</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Fees */}
            <div className="bg-gray-50 p-8 border-t">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Additional Fees</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">📝</span>
                    <h4 className="text-xl font-bold text-gray-800">Examination Fee</h4>
                  </div>
                  <p className="text-3xl font-bold text-amber-900">₹1,000</p>
                  <p className="text-gray-600 text-sm mt-2">For course completion certificate</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">📚</span>
                    <h4 className="text-xl font-bold text-gray-800">Course Textbook</h4>
                  </div>
                  <p className="text-3xl font-bold text-amber-900">₹2,200</p>
                  <p className="text-gray-600 text-sm mt-2">Introductory Hindi (includes MP3 CD)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Benefits */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">What's Included</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Instruction</h3>
                  <p className="text-amber-100">Experienced teachers with proven teaching methods</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Small Class Sizes</h3>
                  <p className="text-amber-100">Personalized attention for effective learning</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Materials</h3>
                  <p className="text-amber-100">Quality textbooks and audio resources</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Beautiful Location</h3>
                  <p className="text-amber-100">Study in the serene Himalayan foothills</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
                  <p className="text-amber-100">Choose full-time or part-time options</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-3xl">✓</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cultural Immersion</h3>
                  <p className="text-amber-100">Learn in an authentic Indian setting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Important Information</h2>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                <span className="text-amber-600 text-xl mt-1">💡</span>
                <p>
                  <strong>Billing:</strong> Fees are based on the scheduled timetable. Students are encouraged 
                  to start on Mondays and finish on Fridays.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <span className="text-blue-600 text-xl mt-1">📅</span>
                <p>
                  <strong>Full-Time vs Part-Time:</strong> Full-time students attend 4 periods per day, 
                  while part-time students must take a minimum of 2 periods per day.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <span className="text-green-600 text-xl mt-1">📖</span>
                <p>
                  <strong>Course Materials:</strong> The textbook fee is a one-time cost. The book includes 
                  an MP3 CD with audio lessons to enhance your learning experience.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                <span className="text-purple-600 text-xl mt-1">🎓</span>
                <p>
                  <strong>Certification:</strong> Upon successful completion and examination, you'll receive 
                  an official certificate from Landour Language School.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-12 border-2 border-amber-300">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact us today to enroll or learn more about our programs
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
