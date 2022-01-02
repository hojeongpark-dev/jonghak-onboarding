import styled from "styled-components";

// CustomerContent, CustomerHeader 와 다르게 style만 있어서 styled에 있는데,
// 추후 tsx, style을 가지게 되었을때는 똑같이 바꿔줘야 하는데 style만 있더라도 디렉토리를 미리 만들어 두는게 좋지 않은지?
const CenterLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export default CenterLayout;
