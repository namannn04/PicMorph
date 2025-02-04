import ImageConverter from "@/components/ImageConverter";

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">Transform Your Images Instantly</h1>
          <p className="text-lg mb-6">
            Upload your image, choose the format, and download in seconds.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-8">Image Converter</h2>
        <ImageConverter />
      </section>

      <section id="about" className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">About PicMorph</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            PicMorph is a modern image conversion tool designed to make your image processing tasks effortless and efficient.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>Have any questions? Feel free to reach out!</p>
          <p>Email: <a href="mailto:support@picmorph.com" className="underline">support@picmorph.com</a></p>
        </div>
      </section>
    </div>
  );
}
