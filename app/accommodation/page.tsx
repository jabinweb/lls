export default function AccommodationPage() {
  const boardingHouses = [
    {
      name: "Rokeby Manor",
      phone: "+91 135 2635604/05/06",
      email: "reservations@rokebymanor.com",
      website: "www.rokebymanor.com",
      details: "5-min walk. 50% discount on rooms (min. 5 days stay), 25% off food & beverages.",
      icon: "🏰"
    },
    {
      name: "Tabor Cottage",
      phone: "+91 9634443666",
      email: "reservations@taborcottage.com",
      website: "www.taborcottage.com",
      details: "5-min walk. Rooms from ₹1000/night (incl. breakfast). Special rates for long stays.",
      icon: "🏡"
    },
    {
      name: "La Villa Bethany",
      phone: "+91 135 2630054 / 09910049644",
      email: "mail@lavillabethany.com",
      website: null,
      details: "5-min walk from school.",
      icon: "🏘️"
    },
    {
      name: "DevDar Woods",
      phone: "+91 135 2632644 / 2632544",
      email: "anilprakash56@yahoo.com",
      website: null,
      details: "Located at Sister's Bazar.",
      icon: "🌲"
    },
    {
      name: "Ivy Bank Guest House",
      phone: "+91 135 2631433 / 09897604999",
      email: "ivy_bank@yahoo.co.in",
      website: "www.ivybank.in",
      details: "10-min walk from school.",
      icon: "🏨"
    },
    {
      name: "Woodside",
      phone: "+91 11 26843503 / 09811322285",
      email: "bhattyiz@gmail.com",
      website: null,
      details: "Sister's Bazaar, Landour.",
      icon: "🪵"
    },
    {
      name: "See Forth Lodge",
      phone: "+91 135 2632801",
      email: "revinodkumarart@hotmail.com",
      website: null,
      details: "Near Clock Tower, Mussoorie.",
      icon: "🏔️"
    },
    {
      name: "Doma's Inn Guest House",
      phone: null,
      email: "siddharth.nima@gmail.com / tenzing@momotours.com",
      website: null,
      details: null,
      icon: "🏠"
    },
    {
      name: "Elcott",
      phone: "+91 135 2632301 / 011 23013188",
      email: null,
      website: null,
      details: null,
      icon: "🛏️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 text-center">
            Accommodation
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-12"></div>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Find comfortable lodging within walking distance of the school
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">⚠️</span>
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-3">Important Notice</h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                  The school <strong>does not arrange accommodation</strong>. Students must make their own 
                  arrangements early—especially between <strong>May and October</strong>, when accommodation 
                  is limited due to peak tourist season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boarding Houses */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">🏠</span>
            <h2 className="text-4xl font-bold text-amber-900">Recommended Boarding Houses</h2>
          </div>
          <p className="text-gray-600 mb-8 text-lg">All within walking distance from the school</p>

          <div className="grid md:grid-cols-2 gap-6">
            {boardingHouses.map((house, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{house.icon}</span>
                    <h3 className="text-2xl font-bold text-white">{house.name}</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  {house.phone && (
                    <div className="flex items-start gap-3">
                      <span className="text-amber-600 text-xl">📞</span>
                      <div>
                        <p className="text-sm text-gray-500 font-semibold">Phone</p>
                        <p className="text-gray-800">{house.phone}</p>
                      </div>
                    </div>
                  )}
                  
                  {house.email && (
                    <div className="flex items-start gap-3">
                      <span className="text-amber-600 text-xl">📧</span>
                      <div>
                        <p className="text-sm text-gray-500 font-semibold">Email</p>
                        <p className="text-gray-800 break-words">{house.email}</p>
                      </div>
                    </div>
                  )}
                  
                  {house.website && (
                    <div className="flex items-start gap-3">
                      <span className="text-amber-600 text-xl">🌐</span>
                      <div>
                        <p className="text-sm text-gray-500 font-semibold">Website</p>
                        <p className="text-blue-600 hover:underline cursor-pointer">{house.website}</p>
                      </div>
                    </div>
                  )}
                  
                  {house.details && (
                    <div className="pt-4 border-t">
                      <p className="text-gray-700 leading-relaxed">{house.details}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Tips */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">💡</span>
              <h2 className="text-3xl font-bold text-amber-900">Booking Tips</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-900 mb-3">📅 Book Early</h3>
                <p className="text-gray-700">
                  Make reservations well in advance, especially for stays during May-October when 
                  Mussoorie is at peak tourist season.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-900 mb-3">💰 Long-Stay Discounts</h3>
                <p className="text-gray-700">
                  Many properties offer special rates for extended stays. Mention you are a student at 
                  Landour Language School when inquiring.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-900 mb-3">🚶 Walking Distance</h3>
                <p className="text-gray-700">
                  Most recommended properties are 5-10 minutes walk from the school, perfect for 
                  daily commute without transportation hassles.
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-900 mb-3">🍽️ Meal Options</h3>
                <p className="text-gray-700">
                  Check if breakfast or other meals are included. Some properties offer meal plans 
                  which can be convenient during your studies.
                </p>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-amber-900 mb-3">🔥 Heating</h3>
                <p className="text-gray-700">
                  Ensure your accommodation has proper heating facilities, especially if studying 
                  during autumn or winter months.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-900 mb-3">📞 Direct Contact</h3>
                <p className="text-gray-700">
                  Contact the properties directly using the phone numbers or emails provided for 
                  the best rates and availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">What to Expect in Landour</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <span className="text-5xl mb-3 block">🏔️</span>
                <h3 className="text-xl font-semibold mb-2">Mountain Setting</h3>
                <p className="text-amber-100">
                  Peaceful hill station atmosphere with stunning views
                </p>
              </div>

              <div className="text-center">
                <span className="text-5xl mb-3 block">🌡️</span>
                <h3 className="text-xl font-semibold mb-2">Cool Climate</h3>
                <p className="text-amber-100">
                  Pleasant weather year-round, pack warm clothes
                </p>
              </div>

              <div className="text-center">
                <span className="text-5xl mb-3 block">🛒</span>
                <h3 className="text-xl font-semibold mb-2">Local Amenities</h3>
                <p className="text-amber-100">
                  Shops, cafes, and markets within walking distance
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/30 text-center">
              <p className="text-lg">
                Landour offers a quiet, focused environment ideal for language learning, 
                away from the hustle and bustle of city life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
