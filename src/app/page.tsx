// app/page.tsx
"use client";

import { useState } from "react";

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSelectedImage(file);
  };

  return (
    <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upload and Convert Your Image</h2>
      
      {/* Image Upload Section */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4 block w-full border p-2 rounded-lg"
      />
      
      {selectedImage && (
        <div className="border p-4 rounded-lg bg-gray-50 shadow">
          <p><strong>File Name:</strong> {selectedImage.name}</p>
          <p><strong>Format:</strong> {selectedImage.type.split("/")[1]}</p>
          <p><strong>Size:</strong> {(selectedImage.size / 1024).toFixed(2)} KB</p>
        </div>
      )}

      {selectedImage && (
        <div className="mt-4">
          <label htmlFor="format" className="block mb-2 font-medium">Convert To:</label>
          <select
            id="format"
            className="block w-full border p-2 rounded-lg"
            defaultValue=""
          >
            <option value="" disabled>Select Format</option>
            {["png", "jpg", "jpeg", "webp"]
              .filter((format) => format !== selectedImage.type.split("/")[1])
              .map((format) => (
                <option key={format} value={format}>
                  {format.toUpperCase()}
                </option>
              ))}
          </select>
        </div>
      )}

      {selectedImage && (
        <button
          className="mt-6 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Convert and Download
        </button>
      )}
    </div>
  );
}
