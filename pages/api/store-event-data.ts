import {File, getFilesFromPath, Web3Storage} from "web3.storage";
import {FileObject} from "files-from-path";

const { resolve } = require("path");

export default async function handler(req: any, res: any): Promise<() => void> {
  if (req.method === "POST") {
    return await storeEventData(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function storeEventData(req: any, res: any) {
  const body = req.body;
  try {
    const files = await makeFileObjects(body);
    const cid = await storeFiles(files);
    return res.status(200).json({ success: true, cid: cid });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Error creating event", success: false });
  }
}

async function makeFileObjects(body: {
  name: string,
  description: string,
  link: string,
  image: string,
}): Promise<FileObject[]> {
  const buffer = Buffer.from(JSON.stringify(body));

  const imageDirectory = resolve(process.cwd(), `public/images/${body.image}`);
  const files = await getFilesFromPath(imageDirectory);

  files.push(new File([buffer], "data.json"));
  return files;
}

function makeStorageClient() {
  return new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN as string });
}

async function storeFiles(files: FileObject[]) {
  const client = makeStorageClient();
  return await client.put(files);
}