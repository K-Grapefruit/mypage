//HTML CSS
import kakao from "./img/kakao.PNG";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useRouteMatch, useHistory } from "react-router-dom";

const PofPage = styled.div`
  width: 100%;
  border: 1px solid black;
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
export function First() {
  /*  const detailMatch = useRouteMatch("/detail/:id");
  const location = useHistory();
  const goDetail = (id) => location.push(`/detail/:${id}`); */

  const goKakao = () => {
    window.open("https://k-grapefruit.github.io/kokoa-clone-2020/");
  };

  const goPaintBox = () => {
    window.open("https://k-grapefruit.github.io/paint-box/");
  };

  const yourName = () => {
    window.open("https://k-grapefruit.github.io/scss_pj/");
  };

  return (
    <PofPage>
      <PofFrame>
        <Pf>
          <Pic
            onClick={() => goKakao()}
            photo="https://file.mk.co.kr/meet/neds/2021/05/image_readtop_2021_471660_16211679464647166.jpg"
          ></Pic>
          <Title>KakaoTalk Clone</Title>
        </Pf>
        <Pf>
          <Pic
            onClick={() => goPaintBox()}
            photo="https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/85/3c/b8/853cb810-73f8-f7c9-c495-4253728fc6bb/source/200x200bb.jpg"
          ></Pic>
          <Title>Paint-Box Clone</Title>
        </Pf>
        <Pf>
          <Pic
            onClick={() => yourName()}
            photo="https://shopping-phinf.pstatic.net/main_8219720/82197203768.2.jpg?type=f200"
          ></Pic>
          <Title>Your name</Title>
        </Pf>
      </PofFrame>
    </PofPage>
  );
}
