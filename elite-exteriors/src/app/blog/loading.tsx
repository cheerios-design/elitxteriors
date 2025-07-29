export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <div className="bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-pulse">
            <div className="h-16 bg-white/20 rounded-lg mb-6 mx-auto w-2/3"></div>
            <div className="h-8 bg-white/10 rounded-lg mb-8 mx-auto w-3/4"></div>

            {/* Category Pills Skeleton */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 bg-white/10 rounded-full h-8 w-20"
                  ></div>
                ))}
            </div>

            {/* Stats Skeleton */}
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

      <div className="container mx-auto px-4 py-12">
        {/* Featured Posts Skeleton */}
        <div className="mb-16 animate-pulse">
          <div className="text-center mb-8">
            <div className="h-8 bg-gray-200 rounded mb-4 mx-auto w-1/3"></div>
            <div className="h-6 bg-gray-200 rounded mx-auto w-1/2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array(2)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-sm border overflow-hidden"
                >
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                      </div>
                      <div className="h-4 bg-gray-200 rounded w-16"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Search and Filters Skeleton */}
        <div className="mb-8 animate-pulse">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded w-32"></div>
            <div className="h-12 bg-gray-200 rounded w-32"></div>
          </div>

          <div className="flex flex-wrap gap-2">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="h-8 bg-gray-200 rounded w-20"></div>
              ))}
          </div>
        </div>

        {/* Blog Posts Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-pulse">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm border overflow-hidden"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-3 bg-gray-200 rounded mb-2 w-16"></div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gray-200 rounded-full mr-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-16"></div>
                    </div>
                    <div className="h-3 bg-gray-200 rounded w-12"></div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex justify-center animate-pulse">
          <div className="flex gap-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="w-10 h-10 bg-gray-200 rounded"></div>
              ))}
          </div>
        </div>

        {/* SEO Content Skeleton */}
        <div className="mt-16 animate-pulse">
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="max-w-4xl mx-auto">
              <div className="h-8 bg-gray-200 rounded mb-6 mx-auto w-1/2"></div>
              <div className="space-y-4 mb-8">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="h-6 bg-gray-200 rounded mb-3 w-1/2"></div>
                  <div className="space-y-2">
                    {Array(6)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="h-4 bg-gray-200 rounded w-3/4"
                        ></div>
                      ))}
                  </div>
                </div>
                <div>
                  <div className="h-6 bg-gray-200 rounded mb-3 w-1/3"></div>
                  <div className="space-y-2">
                    {Array(7)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="h-4 bg-gray-200 rounded w-2/3"
                        ></div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
