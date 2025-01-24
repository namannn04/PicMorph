interface FileDetails {
  name: string;
  type: string;
  size: string;
  previewUrl: string;
}

interface ImageUploaderProps {
  onUpload: (details: FileDetails) => void;
}

export default function ImageUploader({ onUpload }: ImageUploaderProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      onUpload({
        name: file.name,
        type: file.type.split("/")[1],
        size: `${(file.size / 1024).toFixed(2)} KB`,
        previewUrl,
      });
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      <input
        type="file"
        id="file-upload"
        className="hidden"
        onChange={handleFileChange}
      />
      <label
        htmlFor="file-upload"
        className="cursor-pointer inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-blue-700"
      >
        Choose a File
      </label>
    </div>
  );
}
