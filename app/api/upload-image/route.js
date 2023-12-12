import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export const POST = async (req, res) => {
    console.log("req.headers.host ===> ", req.headers.host);
    const formData = await req.formData();
    const file = formData.get("file");
    console.log("file ", file);
    if (!file) {
        return NextResponse.json({ message: "no image found", success: false });
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const fileSplitted = file.name.split(".");
    const fileName = `${Date.now()}.${fileSplitted[fileSplitted.length - 1]}`;
    await writeFile(`./.next/static/media/${fileName}`, buffer);
    return NextResponse.json({ message: "image uploaded", success: true, url: `/${fileName}` });
};
