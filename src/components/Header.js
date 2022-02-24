import { useAnimation, useViewportScroll, motion } from "framer-motion";
import { useEffect } from "react";
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
  margin: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    color: "#425A73",
  },
};

export function Header() {
  const { scrollY } = useViewportScroll();
  const headerAnimation = useAnimation();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        headerAnimation.start("visible");
      } else {
        headerAnimation.start("initial");
      }
    });
  }, [scrollY, headerAnimation]);
  return (
    <Wrapper variants={HeaderVariants} animate={headerAnimation} exit="exit">
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
        <Li variants={HoverVariants} whileHover="Hover">
          CONTACT
        </Li>
      </Nav>
    </Wrapper>
  );
}
