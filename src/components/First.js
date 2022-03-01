//HTML CSS
import kakao from "./img/kakao.PNG";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useRouteMatch, useHistory } from "react-router-dom";

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
const PofPage2 = styled(motion.div)`
  width: 200px;
  min-height: 400px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;

  padding: 10px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
`;

const Title = styled.h1``;
const Info = styled.p``;
const Person = styled.h1``;

const Site = styled.button``;
export function First() {
  const detailMatch = useRouteMatch("/detail/:id");
  const location = useHistory();
  const goDetail = (id) => location.push(`/detail/:${id}`);

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
      <PofPage2 onClick={() => goDetail("kakao")} bgphoto={kakao}></PofPage2>
      <Overlay></Overlay>
    </PofPage>
  );
}
