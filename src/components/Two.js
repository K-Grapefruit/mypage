import vj from "./img/js.PNG";
import styled from "styled-components";
const PofPage = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 30px;
  padding: 40px;
`;
const PofPage1 = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 10px;
`;
const PofPage2 = styled.div`
  min-width: 
  min-height: 400px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;

  padding: 10px;
`;

const Title = styled.h1``;
const Info = styled.p``;
const Person = styled.h1``;

const Site = styled.button``;
export function Two() {
  return (
    <PofPage>
      <PofPage1>
        <Title>TITLE : 카카오톡 Clone</Title>
        <Info>
          기존 PC카카오톡의 채팅방을 보고 HTML과 CSS만으로 구현한 포트폴리오
          입니다.
        </Info>
        <Person>제작 : 개인제작</Person>
        <Site>사이트 방문</Site>
      </PofPage1>
      <PofPage2 bgphoto={vj}></PofPage2>
    </PofPage>
  );
}
