import { motion } from "framer-motion";
import styled from "styled-components";

const BottomLine = styled.div`
  position: absolute;
  width: 100%;
  height: 300px;
  background-color: #353b48;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Footer() {
  return (
    <BottomLine>
      <span style={{ color: "white" }}>
        이 사이트는 개인적 목적으로 사용되는 사이트입니다.
      </span>
    </BottomLine>
  );
}
