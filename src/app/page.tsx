import ImageConverter from "@/components/ImageConverter";

export default function HomePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl text-white py-24 text-center shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-30 blur-3xl"></div>

        <div className="relative container mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg animate-fade-in">
            Transform Your Images <br />{" "}
            <span className="text-yellow-300">Instantly</span>
          </h1>

          <p className="text-lg max-w-2xl mx-auto opacity-90 animate-slide-up">
            Upload your image, choose the format, and download in seconds. No
            hassle, just magic!🚀
          </p>

          <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full blur-xl opacity-40"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-red-500 rounded-full blur-xl opacity-40"></div>
        </div>
      </section>

      <section className="mt-12">
        <ImageConverter />
      </section>
    </div>
  );
}
