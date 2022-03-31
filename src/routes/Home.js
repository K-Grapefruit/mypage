import { motion, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { First } from "../components/First";
import { Four } from "../components/Four";
import { Three } from "../components/Three";
import { Two } from "../components/Two.js";

const section = [
  {
    tab: "HTML CSS",
  },
  {
    tab: "HTML JS CSS",
  },
  {
    tab: "NODEJS EXPRESS",
  },
  {
    tab: "REACT",
  },
];

const Wrapper = styled.div`
  width: 100%;

  min-width: 1300px;
`;

const Banner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://i.imgur.com/0qV1tYs.jpg");
  position: relative;
`;

const Intro = styled.h1`
  position: absolute;
  top: 70%;
  left: 20%;
  color: white;
  font-size: 80px;
  font-weight: 800;
`;
const Aboutme = styled.div`
  padding: 350px 20% 350px 20%;
  display: flex;
`;

const AboutImg = styled.div`
  width: 300px;
  min-width: 300px;
  height: 300px;
  min-height: 300px;

  position: relative;
  background-image: url("https://blog.kakaocdn.net/dn/39rRU/btqRePNovqK/pUrn5mUvE81U7F0vwWHbEk/img.png");
  background-size: cover;
`;
const AboutInfo = styled.div`
  padding: 0 80px 0 80px;
`;
const Info = styled.h1`
  margin-bottom: 20px;
`;

const Skill = styled.div`
  position: relative;
  padding: 350px 20% 350px 20%;
  display: flex;
  flex-direction: column;
`;

const SkillImg = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  div {
    margin-right: 5px;
  }
`;
const ToolImg = styled.div``;

const SkillImage1 = styled.div`
  background-image: url("https://d1telmomo28umc.cloudfront.net/media/public/badges/html5_1IJr1hb.png");
  width: 100px;
  height: 100px;
  background-size: cover;
`;

const SkillImage2 = styled.div`
  background-image: url("https://d1telmomo28umc.cloudfront.net/media/public/badges/css3.png");
  width: 100px;
  height: 100px;
  background-size: cover;
`;
const SkillImage3 = styled.div`
  background-image: url("https://d1telmomo28umc.cloudfront.net/media/public/badges/JS.png");
  width: 100px;
  height: 100px;
  background-size: cover;
`;
const SkillImage4 = styled.div`
  background-image: url("https://d1telmomo28umc.cloudfront.net/media/public/badges/es6.png");
  width: 100px;
  height: 100px;
  background-size: cover;
`;
const SkillImage5 = styled.div`
  background-image: url("https://d1telmomo28umc.cloudfront.net/media/public/badges/JS_Node.png");
  width: 100px;
  height: 100px;
  background-size: cover;
`;
const SkillImage6 = styled.div`
  background-image: url("https://d1telmomo28umc.cloudfront.net/media/public/badges/Pug_TAaOtzg.png");
  width: 100px;
  height: 100px;
  background-size: cover;
`;
const SkillImage7 = styled.div`
  background-image: url("https://d1telmomo28umc.cloudfront.net/media/public/badges/typescript_psOTuYC.png");
  width: 100px;
  height: 100px;
  background-size: cover;
`;

const SkillImage8 = styled.div`
  background-image: url("https://d1telmomo28umc.cloudfront.net/media/public/badges/React_Z6rkrgv.png");
  width: 100px;
  height: 100px;
  background-size: cover;
`;

const ToolImg1 = styled.div`
  width: 100px;
  height: 100px;
  background-size: cover;
  background-image: url("https://noblinkyblinkycom.files.wordpress.com/2017/09/vsc-logo.png");
`;

const FortFolio = styled.div`
  padding: 350px 20% 350px 20%;
`;

const FortFolio1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FortFolioTab = styled.button`
  padding: 20px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: 600;
`;
const FortFolioTabLi = styled(motion.div)`
  list-style: none;
  width: 100%;
`;
const FortFolio2 = styled.div``;

const FortFolio1Section = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Contact = styled.div`
  padding: 350px 0 350px 20%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const ContactText = styled.h1`
  width: 50%;
  background-color: rgba(205, 132, 241, 0.2);
  border-radius: 20px;
`;
const ContactImg = styled.div`
  background-image: url(${(props) => props.photo});
  background-size: cover;
  width: 500px;
  height: 500px;
  margin-right: 30px;
  position: relative;
`;

const ContactText1 = styled.h1`
  line-height: 2.5;
  font-size: 18px;
  font-weight: 600;
`;
const ContactText2 = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const GithubBtn = styled(motion.button)`
  cursor: pointer;
  padding: 20px;
  background: transparent;
  border: none;
  border-radius: 10px;
  position: absolute;
  width: 200px;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
`;
export function Home() {
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      console.log(scrollY.get());
    });
  }, [scrollY]);

  let a = document.body.scrollTop;
  a = document.body.scrollHeight;
  console.log(a);

  const useTabs = (currentIndex, allTabs) => {
    const [current, setCurrent] = useState(currentIndex);

    return { result: allTabs[current], change: setCurrent, compo: current };
  };

  const { result, change, compo } = useTabs(0, section);

  const aVariants = {
    visible: {},
  };

  const btnVariants = {
    hover: {
      backgroundColor: "#ffb8b8",
    },
  };

  return (
    <Wrapper>
      <Banner>
        <Intro>K-DEVELOPER</Intro>
      </Banner>
      <Aboutme>
        <AboutImg>
          <h1
            style={{
              position: "absolute",
              top: "-40px",
              fontSize: "30px",
              fontWeight: "700",
            }}
          >
            AboutMe
          </h1>
        </AboutImg>
        <AboutInfo>
          <Info>이름 : 김진욱</Info>
          <Info>나이 : 28</Info>
          <Info>학력 : 경남정보대학교 컴퓨터정보 학과 졸업</Info>
          <Info>
            수료내역 : 2019.03.19 ~ 2019.09.10 아이티윌 부산 교육센터
            <br /> 스마트웹 하이브리드앱 자바 개발자 양성 과정 수료 ( 6개월 )
          </Info>
          <Info>자격증 : 정보처리산업기사</Info>
          <Info>좌우명 : 끝까지 해낸다.</Info>
        </AboutInfo>
      </Aboutme>
      <Skill>
        <SkillImg>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "15px",
            }}
          >
            Verified Skills
          </h1>
          <div style={{ display: "flex", marginBottom: "15px" }}>
            <SkillImage1></SkillImage1>
            <SkillImage2></SkillImage2>
            <SkillImage3></SkillImage3>
            <SkillImage4></SkillImage4>
            <SkillImage5></SkillImage5>
            <SkillImage6></SkillImage6>
            <SkillImage7></SkillImage7>
            <SkillImage8></SkillImage8>
          </div>
        </SkillImg>
        <ToolImg>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "15px",
            }}
          >
            Verified Tools
          </h1>
          <div style={{ display: "flex", marginBottom: "15px" }}>
            <ToolImg1></ToolImg1>
          </div>
        </ToolImg>
      </Skill>
      <FortFolio>
        <FortFolio1>
          <h1 style={{ fontSize: "60px", fontWeight: "700" }}>PORTFOLIO</h1>
          <FortFolio1Section>
            {section.map((item, index) => (
              <FortFolioTab onClick={() => change(index)}>
                {item.tab}
              </FortFolioTab>
            ))}
          </FortFolio1Section>
          <FortFolioTabLi>
            {compo === 0 ? <First></First> : null}
          </FortFolioTabLi>
          <FortFolioTabLi>{compo === 1 ? <Two></Two> : null}</FortFolioTabLi>
          <FortFolioTabLi>
            {compo === 2 ? <Three></Three> : null}
          </FortFolioTabLi>
          <FortFolioTabLi>{compo === 3 ? <Four></Four> : null}</FortFolioTabLi>
        </FortFolio1>
        <FortFolio2></FortFolio2>
      </FortFolio>
      <Contact>
        <ContactText
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ContactText1>
            "트렌드가 빠르게 변하는 IT업계에서 항상 겸손하고 초심잃지 않는
            개발자 ,
            <p style={{ display: "flex", justifyContent: "center" }}>
              <strong
                style={{
                  color: "#8c7ae6",
                }}
              >
                김진욱
              </strong>
              이 되겠습니다"
            </p>
            <ContactText2>연락처 : doos1113@gmail.com 01098991306</ContactText2>
          </ContactText1>
          <div>
            <GithubBtn
              onClick={() => window.open("https://github.com/K-Grapefruit")}
              variants={btnVariants}
              whileHover="hover"
            >
              GITHUB 바로가기
            </GithubBtn>
          </div>
        </ContactText>
        <ContactImg photo="http://www.binumaru.net/shopimages/natural1111/024001000063.jpg?1578101546">
          <h1 style={{ fontSize: 40, fontWeight: 600, position: "absolute" }}>
            Contact
          </h1>
        </ContactImg>
      </Contact>
    </Wrapper>
  );
}
