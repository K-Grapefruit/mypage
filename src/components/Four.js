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

export function Four() {
  const goKakao = () => {
    window.open("https://kimtube.herokuapp.com/");
  };

  return (
    <PofPage>
      <PofFrame>
        <Pf>
          <Pic
            onClick={() => goKakao()}
            photo="https://media.cdnandroid.com/item_images/31757/imagen-youtube-0thumb.jpg"
          ></Pic>
          <Title>Coin-Tracker</Title>
        </Pf>
      </PofFrame>
    </PofPage>
  );
}
