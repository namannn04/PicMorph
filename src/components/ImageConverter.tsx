"use client";

import { useState } from "react";
import { Loader2, UploadCloud } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageConverter = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [targetFormat, setTargetFormat] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const formats = ["jpg", "jpeg", "png", "webp"];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleConvert = async () => {
    if (!selectedFile || !targetFormat) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("format", targetFormat);

    const response = await fetch("/api/convert", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `converted.${targetFormat}`;
      link.click();
    } else {
      alert("Failed to convert the image.");
    }
    setLoading(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }} 
      className="max-w-lg mx-auto mt-10 bg-white shadow-xl rounded-2xl p-8 border border-gray-200 backdrop-blur-lg bg-opacity-90"
    >
      <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
        Image Converter
      </h1>

      {/* File Upload */}
      <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-indigo-500 transition bg-gray-50 shadow-md">
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.webp"
          onChange={handleFileChange}
          className="hidden"
        />
        <UploadCloud className="h-10 w-10 text-gray-500 mb-2" />
        <p className="text-gray-600 font-medium text-center">
          {selectedFile ? selectedFile.name : "Drag & Drop or Click to Upload"}
        </p>
      </label>

      {/* Preview */}
      {preview && selectedFile && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }} 
          className="mt-6 bg-white border border-gray-300 rounded-xl p-4 shadow-lg"
        >
          <Image
            src={preview}
            alt="Preview"
            className="w-full max-h-60 object-contain rounded-md mb-4"
          />
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Size:</span>{" "}
            {(selectedFile.size / 1024).toFixed(2)} KB |{" "}
            <span className="font-semibold">Format:</span>{" "}
            {selectedFile.type.split("/")[1]}
          </p>
        </motion.div>
      )}

      {/* Format Selection */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Convert to:
        </label>
        <select
          value={targetFormat}
          onChange={(e) => setTargetFormat(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition"
        >
          <option value="" disabled>
            Select a format
          </option>
          {formats
            .filter((format) => selectedFile && !selectedFile.type.includes(format))
            .map((format) => (
              <option key={format} value={format}>
                {format.toUpperCase()}
              </option>
            ))}
        </select>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleConvert}
        disabled={!selectedFile || !targetFormat || loading}
        className={`mt-6 w-full py-3 px-4 rounded-lg font-semibold shadow-md text-white transition ${
          loading
            ? "bg-indigo-300 cursor-not-allowed"
            : "bg-orange-600 hover:bg-orange-800"
        }`}
      >
        {loading ? <Loader2 className="animate-spin mx-auto" /> : "Convert"}
      </motion.button>
    </motion.div>
  );
};

export default ImageConverter;
