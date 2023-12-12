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
    const path = `uploaded-images/${Date.now()}.${file.name.split(".")[1]}`;
    await writeFile(`./public/${path}`, buffer);
    return NextResponse.json({ message: "image uploaded", success: true, url: `/${path}` });
};
