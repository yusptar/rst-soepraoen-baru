import Link from "next/link";

export default function Custom404() {
  return (
    <section className="flex items-center h-full p-1">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-blue-900">
            <span className="sr-only">Error</span>Maaf
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Halaman masih dalam proses pengembangan
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            Silahkan kembali ke halaman utama
          </p>
          <Link
            rel="noopener noreferrer"
            href="/"
            className="px-8 py-3 font-semibold rounded bg-blue-900 text-white hover:bg-blue-800"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}
