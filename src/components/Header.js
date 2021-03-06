import { useAnimation, useViewportScroll, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 100%;
  min-width: 1300px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  list-style: none;
`;
const Li = styled(motion.li)`
  font-size: 25px;
  cursor: pointer;

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px 0 30px;
`;

const HeaderVariants = {
  initial: {
    opacity: 0,
    scacle: 0,
    display: "none",
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
  visible: {
    display: "block",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    scacle: 0,
    display: "none",
    transition: {
      duration: 1,
      type: "tween",
    },
  },
};

const HoverVariants = {
  Hover: {
    backgroundColor: "#425A73",
  },
};

export function Header() {
  const { scrollY } = useViewportScroll();
  const homematch = useRouteMatch("/");
  const headerAnimation = useAnimation();
  const [updown, setUpdown] = useState(false);
  const setDown = () => {
    setUpdown(true);
    window.scrollTo(0, document.body.scrollHeight, {
      behavior: "smooth",
    });
  };
  const setUp = () => {
    setUpdown(false);
    window.scrollTo(0, 0, {
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        headerAnimation.start("visible");
      } else {
        headerAnimation.start("initial");
      }
    });
  }, [scrollY, headerAnimation]);
  console.log(homematch);
  return (
    <>
      {homematch ? (
        <Wrapper
          variants={HeaderVariants}
          animate={headerAnimation}
          exit="exit"
        >
          <Nav>
            <Li
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              variants={HoverVariants}
              whileHover="Hover"
            >
              HOME
            </Li>
            <Li
              onClick={() => {
                window.scrollTo({ top: 1000, behavior: "smooth" });
              }}
              variants={HoverVariants}
              whileHover="Hover"
            >
              ABOUT ME
            </Li>
            <Li
              onClick={() => {
                window.scrollTo({ top: 2000, behavior: "smooth" });
              }}
              variants={HoverVariants}
              whileHover="Hover"
            >
              SKILL
            </Li>
            <Li
              onClick={() => {
                window.scrollTo({ top: 3000, behavior: "smooth" });
              }}
              variants={HoverVariants}
              whileHover="Hover"
            >
              PORTFOLIO
            </Li>
            <Li
              onClick={() => {
                window.scrollTo({ top: 4200, behavior: "smooth" });
              }}
              variants={HoverVariants}
              whileHover="Hover"
            >
              CONTACT
            </Li>
            {updown ? (
              <Li onClick={setUp} variants={HoverVariants} whileHover="Hover">
                ??????
              </Li>
            ) : (
              <Li onClick={setDown} variants={HoverVariants} whileHover="Hover">
                ?????????
              </Li>
            )}
          </Nav>
        </Wrapper>
      ) : null}
    </>
  );
}
