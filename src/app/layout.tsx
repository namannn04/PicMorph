import "../styles/global.css";

export const metadata = {
  title: "PicMorph",
  description: "Effortlessly convert images between formats with ease.",
  icons: {
    icon: "/PicMorph.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
            <h1 className="text-3xl font-extrabold text-[#ff2d2d]">PicMorph</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
        <footer className="bg-gray-100 mt-10 py-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 PicMorph. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
