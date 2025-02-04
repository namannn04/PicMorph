"use client";

import { useState } from "react";

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
    <div className="w-full max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Image Converter
      </h1>

      <input
        type="file"
        accept=".jpg,.jpeg,.png,.webp"
        onChange={handleFileChange}
        className="mb-4 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200 cursor-pointer"
      />

      {preview && selectedFile && (
        <div className="mb-6 border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-sm">
          <img
            src={preview}
            alt="Preview"
            className="w-full max-h-60 object-contain rounded-md mb-4"
          />
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Name:</span> {selectedFile.name} |{" "}
            <span className="font-semibold">Size:</span>{" "}
            {(selectedFile.size / 1024).toFixed(2)} KB |{" "}
            <span className="font-semibold">Format:</span>{" "}
            {selectedFile.type.split("/")[1]}
          </p>
        </div>
      )}

      <div className="mb-6">
        <label
          htmlFor="format"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Convert to:
        </label>
        <select
          id="format"
          value={targetFormat}
          onChange={(e) => setTargetFormat(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

      <button
        onClick={handleConvert}
        disabled={!selectedFile || !targetFormat || loading}
        className={`w-full py-2 px-4 rounded-lg text-white font-semibold shadow-md ${
          loading
            ? "bg-indigo-300 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {loading ? "Converting..." : "Convert"}
      </button>
    </div>
  );
};

export default ImageConverter;
