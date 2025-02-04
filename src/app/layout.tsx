import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
        <header className="bg-indigo-600 text-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex justify-center items-center">
            <h1 className="text-xl font-bold">PicMorph</h1>
          </div>
        </header>

        <main className="container mx-auto flex-1 px-6 py-8">{children}</main>

        <footer className="bg-gray-800 text-white text-center py-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} PicMorph. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
