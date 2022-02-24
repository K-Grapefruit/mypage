//HTML CSS
import styled from "styled-components";
import kakao from "./img/kakao.PNG";
const PofPage = styled.div`
  display: flex;
  width: 100%;
`;
const PofPage1 = styled.div`
  width: 50%;
`;
const PofPage2 = styled.div`
  width: 200px;
  height: 200px;
  background-image: url("https://blog.kakaocdn.net/dn/Sq4OD/btqzlkr13eD/dYwFnscXEA6YIOHckdPDDk/img.jpg");
  background-size: cover;
`;

const Title = styled.h1``;
const Info = styled.p``;
const Person = styled.h1``;

const Site = styled.button``;
export function First() {
  return (
    <PofPage>
      <PofPage1>
        <Title>TITLE : 카카오톡 Clone</Title>
        <Info>
          기존 카카오톡의 채팅방을 보고 HTML과 CSS만으로 구현한 포트폴리오
          입니다.
        </Info>
        <Person>제작 : 개인제작</Person>
        <Site>사이트 방문</Site>
      </PofPage1>
      <PofPage2></PofPage2>
    </PofPage>
  );
}
