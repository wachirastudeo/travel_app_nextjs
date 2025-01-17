"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Something went wrong!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {error.message || "An error occurred while loading this page."}
          </p>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={reset}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
