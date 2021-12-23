import axios from "axios";
import getPureDomain from "../util/url";

type Nullable<T> = T | null

type S3UploadArgs = {
  preSignedUrl:string
  file: Nullable<File>
}
export default async function s3Upload({ preSignedUrl, file } :S3UploadArgs) {
  await axios.put(preSignedUrl, file);
  return getPureDomain(preSignedUrl);
}
