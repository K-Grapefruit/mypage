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

export function Four() {
  const goSite = (site) => {
    window.open(`${site}`);
  };

  return (
    <PofPage>
      <PofFrame>
        <Pf style={{ marginBottom: 50 }}>
          <Pic
            onClick={() =>
              goSite("https://k-grapefruit.github.io/CRYPTO-TRACKER")
            }
            photo="https://ffnews.com/wp-content/uploads/2022/02/14.jpg"
          ></Pic>
          <Title>Coin-Tracker</Title>
        </Pf>
        <Pf style={{ marginBottom: 50 }}>
          <Pic
            onClick={() => goSite("https://k-grapefruit.github.io/wookflix/#/")}
            photo="https://videoweek.com/wp-content/uploads/2019/01/netflix.jpg"
          ></Pic>
          <Title>Netfilx</Title>
        </Pf>
        <Pf style={{ marginBottom: 50 }}>
          <Pic
            onClick={() => goSite("https://k-grapefruit.github.io/todo-react/")}
            photo="https://img.utdstc.com/icon/4db/a79/4dba79609f6da29ecc5aba31204dba5ddd7ed0c57e264313f9cccaad19e29397:200"
          ></Pic>
          <Title style={{ color: "red" }}>Todo-React</Title>
        </Pf>
        <Pf>
          <Pic
            onClick={() => goSite("https://k-grapefruit.github.io/react-app/")}
            photo="https://media.cdnandroid.com/60/4d/d5/db/cf/imagen-which-movie-cinema-films-quiz-0thumb.jpeg"
          ></Pic>
          <Title>Movie Review</Title>
        </Pf>
      </PofFrame>
    </PofPage>
  );
}
