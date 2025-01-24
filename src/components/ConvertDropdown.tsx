export default function ConvertDropdown({ currentFormat, onConvert }: any) {
  const formats = ["png", "jpg", "jpeg", "webp"].filter((f) => f !== currentFormat);

  return (
    <div className="space-y-4">
      <select
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
        onChange={(e) => onConvert(e.target.value)}
      >
        <option value="">Select Format</option>
        {formats.map((format) => (
          <option key={format} value={format}>
            {format.toUpperCase()}
          </option>
        ))}
      </select>
      <button
        className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-blue-700"
        onClick={() => alert("File Converted!")}
      >
        Convert and Download
      </button>
    </div>
  );
}
