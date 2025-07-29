export default function HomeLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <div className="bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-20 bg-white/20 rounded-lg mb-8 mx-auto w-3/4"></div>
              <div className="h-8 bg-white/10 rounded-lg mb-8 mx-auto w-2/3"></div>
              <div className="h-12 bg-white/20 rounded w-48 mx-auto mb-8"></div>
              <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                <div className="text-center">
                  <div className="h-8 bg-white/20 rounded mb-2"></div>
                  <div className="h-4 bg-white/10 rounded"></div>
                </div>
                <div className="text-center">
                  <div className="h-8 bg-white/20 rounded mb-2"></div>
                  <div className="h-4 bg-white/10 rounded"></div>
                </div>
                <div className="text-center">
                  <div className="h-8 bg-white/20 rounded mb-2"></div>
                  <div className="h-4 bg-white/10 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section Skeleton */}
      <div className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-6 mx-auto w-1/2"></div>
            <div className="h-6 bg-gray-200 rounded mx-auto w-2/3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-lg shadow-sm overflow-hidden animate-pulse"
                >
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="space-y-2 mb-6">
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-40 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* About Section Skeleton */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-pulse">
            <div>
              <div className="h-8 bg-gray-200 rounded mb-6 w-1/2"></div>
              <div className="space-y-4 mb-8">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded w-32"></div>
            </div>
            <div className="h-96 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Before/After Skeleton */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4 mx-auto w-1/3"></div>
            <div className="h-6 bg-gray-200 rounded mx-auto w-1/2"></div>
          </div>
          <div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>

      {/* Testimonials Skeleton */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4 mx-auto w-1/4"></div>
            <div className="h-6 bg-gray-200 rounded mx-auto w-1/3"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded mb-2 w-24"></div>
                      <div className="h-3 bg-gray-200 rounded w-16"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
