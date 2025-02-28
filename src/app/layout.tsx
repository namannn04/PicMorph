import "../styles/globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex justify-center items-center">
            <Image
              src="/PicMorph.png"
              alt="PicMorph Logo"
              width={40}
              height={40}
              priority
            />
            <h1 className="text-2xl font-bold text-indigo-600">PicMorph</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto flex-1 px-6 py-8">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} PicMorph. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
