import { useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { First } from "../components/First";
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
  {
    tab: "TYPESCRIPT",
  },
];

const Wrapper = styled.div`
  width: 100%;
  min-height: 1000vh;
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
const FortFolioTabLi = styled.div`
  list-style: none;
  width: 100%;
`;
const FortFolio2 = styled.div``;

const FortFolio1Section = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export function Home() {
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      console.log(scrollY.get());
    });
  }, [scrollY]);

  const useTabs = (currentIndex, allTabs) => {
    const [current, setCurrent] = useState(currentIndex);

    return { result: allTabs[current], change: setCurrent, compo: current };
  };

  const { result, change, compo } = useTabs(0, section);

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
        </FortFolio1>
        <FortFolio2></FortFolio2>
      </FortFolio>
    </Wrapper>
  );
}
