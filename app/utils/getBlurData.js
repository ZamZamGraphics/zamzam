import { getPlaiceholder } from "plaiceholder";

export async function getBlurData(imageUrl) {
    const res = await fetch(imageUrl);
    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
}