export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <div className="bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-pulse">
            <div className="h-16 bg-white/20 rounded-lg mb-6 mx-auto w-1/2"></div>
            <div className="h-8 bg-white/10 rounded-lg mb-8 mx-auto w-2/3"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Form and Info Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form Skeleton */}
          <div className="bg-white rounded-xl shadow-sm border p-8 animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-6 w-1/2"></div>
            <div className="space-y-6">
              <div>
                <div className="h-4 bg-gray-200 rounded mb-2 w-1/4"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-200 rounded mb-2 w-1/4"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-200 rounded mb-2 w-1/4"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-200 rounded mb-2 w-1/4"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-200 rounded mb-2 w-1/4"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
              </div>
              <div className="h-12 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Contact Info Skeleton */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-sm border p-8 animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-6 w-1/2"></div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gray-200 rounded mr-4 mt-1"></div>
                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gray-200 rounded mr-4"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gray-200 rounded mr-4"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-sm border p-8 animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-6 w-1/2"></div>
              <div className="space-y-4">
                {Array(7)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-xl shadow-sm border p-8 animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-6 w-1/2"></div>
              <div className="grid grid-cols-2 gap-4">
                {Array(8)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="h-4 bg-gray-200 rounded"></div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Skeleton */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden mb-16 animate-pulse">
          <div className="h-96 bg-gray-200"></div>
        </div>

        {/* FAQ Section Skeleton */}
        <div className="bg-white rounded-xl shadow-sm border p-8 animate-pulse">
          <div className="text-center mb-8">
            <div className="h-8 bg-gray-200 rounded mb-4 mx-auto w-1/3"></div>
            <div className="h-6 bg-gray-200 rounded mx-auto w-1/2"></div>
          </div>

          <div className="space-y-6">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-6">
                  <div className="h-6 bg-gray-200 rounded mb-4 w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
