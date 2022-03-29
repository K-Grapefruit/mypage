//HTML CSS
import kakao from "./img/kakao.PNG";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useRouteMatch, useHistory } from "react-router-dom";

const PofPage = styled.div`
  width: 100%;

  border-radius: 30px;
  padding: 40px;
`;

const PofFrame = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  place-items: center;
`;
const Pf = styled.div`
  width: 200px;
  height: 200px;

  position: relative;
`;
const Pic = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.photo});
  border-radius: 100px;
  cursor: pointer;
`;
const Title = styled.h1`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
`;
/* const PofPage1 = styled.div`
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

const OverlayItem = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  min-height: 600px;
  top: 10%;
  left: 0;
  right: 0;

  margin: 0 auto;
  border-radius: 15px;
  background-color: red;
`;

const Title = styled.h1``;
const Info = styled.p``;
const Person = styled.h1``;

const Site = styled.button``; */
export function Two() {
  /*  const detailMatch = useRouteMatch("/detail/:id");
  const location = useHistory();
  const goDetail = (id) => location.push(`/detail/:${id}`); */

  const goKakao = () => {
    window.open("https://k-grapefruit.github.io/2021-vanilla-js/");
  };

  const goPaintBox = () => {
    window.open("https://k-grapefruit.github.io/paintjs/");
  };

  return (
    <PofPage>
      <PofFrame>
        <Pf>
          <Pic
            onClick={() => goKakao()}
            photo="https://ai-i2.infcdn.net/icons_siandroid/png/200/15623/15623971.png"
          ></Pic>
          <Title>Todo App</Title>
        </Pf>
        <Pf>
          <Pic
            onClick={() => goPaintBox()}
            photo="https://store-images.s-microsoft.com/image/apps.31793.13510798887943504.ab5675bc-52c9-4e8a-a56a-8c31831dcf83.0d376b2a-bd6c-43a4-9c11-24761e0442b7?mode=scale&q=90&h=200&w=200&background=%23FFFFFF"
          ></Pic>
          <Title>Paint</Title>
        </Pf>
      </PofFrame>
    </PofPage>
  );
}
