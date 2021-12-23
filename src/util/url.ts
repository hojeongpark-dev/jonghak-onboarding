export default function getPureDomain(url:string) {
  return url.split("?")[0];
}
