import { useState } from "react";

interface ImageDetails {
  file: File;
  type: string;
  size: string;
}

interface ImageUploaderProps {
  setImageDetails: (details: ImageDetails) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ setImageDetails }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileType = file.type.split("/")[1].toUpperCase();
    const fileSize = (file.size / 1024).toFixed(2); // Size in KB

    setImageDetails({ file, type: fileType, size: `${fileSize} KB` });
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col items-center p-6 border-2 border-dashed border-neutral-200 rounded-lg bg-neutral-100">
      <label htmlFor="file-input" className="cursor-pointer">
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="p-4 text-neutral-800 bg-neutral-200 rounded hover:bg-neutral-300 transition">
          Click to Upload Image
        </div>
      </label>
      {preview && (
        <div className="mt-4">
          <img src={preview} alt="Uploaded Preview" className="w-48 h-48 object-cover rounded-lg shadow" />
        </div>
      )}
    </div>
  );
};
