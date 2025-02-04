import { NextApiRequest, NextApiResponse } from "next";
import sharp from "sharp";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const form = formidable({ multiples: false });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: "Error processing file" });
    }

    // Handle file input
    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Handle target format
    const targetFormat = Array.isArray(fields.format) ? fields.format[0] : fields.format;
    if (!targetFormat) {
      return res.status(400).json({ message: "Target format not specified" });
    }

    const validFormats = ["jpg", "jpeg", "png", "webp"];
    if (!validFormats.includes(targetFormat)) {
      return res.status(400).json({ message: "Invalid target format" });
    }

    const buffer = fs.readFileSync(file.filepath);
    let convertedImage;

    try {
      convertedImage = await sharp(buffer).toFormat(targetFormat as keyof sharp.FormatEnum).toBuffer();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Conversion failed" });
    }

    res.setHeader("Content-Type", `image/${targetFormat}`);
    res.send(convertedImage);
  });
};

export default handler;
