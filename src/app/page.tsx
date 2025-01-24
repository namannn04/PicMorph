"use client";

import ImageUploader from "../components/ImageUploader";
import ConvertDropdown from "../components/ConvertDropdown";
import { useState } from "react";

interface FileDetails {
  name: string;
  type: string;
  size: string;
  previewUrl: string;
}

export default function Page() {
  const [fileDetails, setFileDetails] = useState<FileDetails | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleFileUpload = (details: FileDetails) => {
    setFileDetails(details);
    setDownloadUrl(null);
  };

  const handleConversion = (newFormat: string) => {
    if (fileDetails) {
      const convertedFileName = `${
        fileDetails.name.split(".")[0]
      }.${newFormat}`;
      const blob = new Blob(["Dummy content"], { type: `image/${newFormat}` });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);

      alert(`File converted to ${newFormat}!`);
    }
  };

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-extrabold text-gray-800">
          Convert Your Images Seamlessly
        </h1>
        <p className="text-gray-600">
          Effortlessly upload, preview, convert, and download your images in a
          few clicks.
        </p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-700">Upload Your Image</h2>
        <ImageUploader onUpload={handleFileUpload} />
      </section>

      {fileDetails && (
        <section className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-700">File Details</h2>
          <div className="space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={fileDetails.previewUrl}
                alt="Uploaded Preview"
                className="w-48 h-48 object-contain border border-gray-300 rounded-lg"
              />
              <p className="text-gray-600">
                This is the uploaded image preview.
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <strong>File Name:</strong> {fileDetails.name}
              </p>
              <p>
                <strong>Format:</strong> {fileDetails.type}
              </p>
              <p>
                <strong>Size:</strong> {fileDetails.size}
              </p>
            </div>
          </div>

          <ConvertDropdown
            currentFormat={fileDetails.type}
            onConvert={handleConversion}
          />

          {downloadUrl && (
            <a
              href={downloadUrl}
              download={`converted-image.${fileDetails.type}`}
              className="inline-block bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-green-700"
            >
              Download Converted Image
            </a>
          )}
        </section>
      )}
    </div>
  );
}
