// url이 넘어오면 query string 앞의 값을 다 사용하게 되는데 domain 외에 port, path to the file, scheme 등이 있는데 pure domain이라고 칭한 이유?
// 사용되는 곳이 한군데 밖에 없는데 util로 따로 만든 이유?
export default function getPureDomain(url: string) {
  return url.split("?")[0];
}
