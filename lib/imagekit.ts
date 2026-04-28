import { ImageKit, toFile } from "@imagekit/nodejs";

let _client: InstanceType<typeof ImageKit> | null = null;

function getClient() {
  if (!_client) {
    _client = new ImageKit({
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
    });
  }
  return _client;
}

export async function uploadBufferToImageKit(params: {
  buffer: Buffer;
  fileName: string;
  folder: string;
  mimeType: string;
}) {
  const client = getClient();
  const file = await toFile(params.buffer, params.fileName, {
    type: params.mimeType,
  });

  const result = await client.files.upload({
    file,
    fileName: params.fileName,
    folder: params.folder,
    useUniqueFileName: true,
  });

  return { url: result.url!, fileId: result.fileId! };
}
