// app/layout.tsx
export const metadata = {
  title: "Image Converter",
  description: "Easily convert images between formats like PNG, JPG, and WEBP.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-gray-800 text-white p-4 text-center">
          <h1 className="text-2xl font-semibold">Image Converter</h1>
        </header>
        <main className="flex flex-col items-center justify-center p-6">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
          <p>&copy; 2025 Image Converter. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
