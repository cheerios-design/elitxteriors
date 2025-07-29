export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <div className="bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-pulse">
            <div className="h-16 bg-white/20 rounded-lg mb-6 mx-auto w-2/3"></div>
            <div className="h-8 bg-white/10 rounded-lg mb-8 mx-auto w-3/4"></div>
          </div>
        </div>
      </div>

      {/* Services Grid Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {Array(4)
            .fill(0)
            .map((_, serviceIndex) => (
              <div key={serviceIndex} className="animate-pulse">
                {/* Service Header */}
                <div className="text-center mb-12">
                  <div className="h-10 bg-gray-200 rounded mb-4 mx-auto w-1/3"></div>
                  <div className="h-6 bg-gray-200 rounded mx-auto w-1/2"></div>
                </div>

                {/* Service Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                  <div className="h-96 bg-gray-200 rounded-lg"></div>
                  <div>
                    <div className="h-8 bg-gray-200 rounded mb-6 w-3/4"></div>
                    <div className="space-y-3 mb-8">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                    <div className="h-10 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <div className="h-6 bg-gray-200 rounded mb-4 w-1/2"></div>
                    <div className="space-y-3">
                      {Array(6)
                        .fill(0)
                        .map((_, i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-4 h-4 bg-gray-200 rounded mr-3"></div>
                            <div className="h-4 bg-gray-200 rounded flex-1"></div>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div>
                    <div className="h-6 bg-gray-200 rounded mb-4 w-1/2"></div>
                    <div className="space-y-3">
                      {Array(4)
                        .fill(0)
                        .map((_, i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-4 h-4 bg-gray-200 rounded mr-3"></div>
                            <div className="h-4 bg-gray-200 rounded flex-1"></div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* CTA Section Skeleton */}
        <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-xl p-8 mt-16">
          <div className="max-w-2xl mx-auto text-center animate-pulse">
            <div className="h-8 bg-white/20 rounded mb-4 mx-auto w-1/2"></div>
            <div className="h-6 bg-white/10 rounded mb-8 mx-auto w-3/4"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="h-12 bg-white/20 rounded w-32"></div>
              <div className="h-12 bg-white/20 rounded w-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
