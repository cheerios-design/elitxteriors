export default function HandymanLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-16 bg-white/20 rounded-lg mb-6 mx-auto w-3/4"></div>
              <div className="h-8 bg-white/10 rounded-lg mb-8 mx-auto w-2/3"></div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <div className="h-12 bg-white/20 rounded w-40"></div>
                <div className="h-12 bg-white/20 rounded w-32"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="h-6 bg-white/10 rounded"></div>
                <div className="h-6 bg-white/10 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4 mx-auto w-1/3"></div>
          <div className="h-6 bg-gray-200 rounded mx-auto w-1/2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Array(9)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-lg shadow-sm border animate-pulse"
              >
                <div className="w-12 h-12 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
        </div>

        {/* Why Choose Us Skeleton */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-16 animate-pulse">
          <div className="text-center mb-8">
            <div className="h-8 bg-gray-200 rounded mb-4 mx-auto w-1/2"></div>
            <div className="h-6 bg-gray-200 rounded mx-auto w-2/3"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-5 h-5 bg-gray-200 rounded-full mr-3"></div>
                  <div className="h-4 bg-gray-200 rounded flex-1"></div>
                </div>
              ))}
          </div>
        </div>

        {/* Contact Skeleton */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 animate-pulse">
              <div className="h-8 bg-white/20 rounded mb-4 mx-auto w-1/3"></div>
              <div className="h-6 bg-white/10 rounded mx-auto w-1/2"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
              <div>
                <div className="h-6 bg-white/20 rounded mb-4 w-1/2"></div>
                <div className="space-y-3">
                  <div className="h-5 bg-white/10 rounded"></div>
                  <div className="h-5 bg-white/10 rounded"></div>
                  <div className="h-5 bg-white/10 rounded"></div>
                </div>
              </div>
              <div>
                <div className="h-6 bg-white/20 rounded mb-4 w-1/3"></div>
                <div className="space-y-3">
                  <div className="h-5 bg-white/10 rounded"></div>
                  <div className="h-5 bg-white/10 rounded"></div>
                  <div className="h-5 bg-white/10 rounded w-2/3"></div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8 animate-pulse">
              <div className="h-12 bg-white/20 rounded w-48 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
