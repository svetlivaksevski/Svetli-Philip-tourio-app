import styled from "styled-components";
import Link from "next/link";

const Headline = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  margin: 0;
  padding: 20px;
  color: #053b50;
  text-align: center;
    
  z-index: 1;
  cursor: pointer;
`;

export default function TitleBar() {
  return (
    <Link href={"/"} passHref legacyBehavior>
      <Headline>Tourio</Headline>
    </Link>
  )
}
