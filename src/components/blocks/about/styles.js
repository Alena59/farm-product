import styled from "styled-components";
import { P } from "../../styled/p/p";
import aboutImage from "../../../assets/about.svg";

export const StyledAbout = styled.section`
  background-color: ${(props) => props.theme.backgroundColorBlue};
  
  .about__wrapper {
    padding: 183px 553px 183px 90px;
    position: relative;
    overflow: hidden;
    max-width: 1280px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .about__wrapper::before {
    position: absolute;
    top: 37px;
    right: 0;
    content: "";
    width: 446px;
    height: 627px;
    background-image: url(${aboutImage});
    background-repeat: no-repeat;
    background-size: contain;
  }

  .about__content {
    max-width: 538px;
  }
  
  .about__content h1 {
    margin-bottom: 24px;
  }
`;

export const Text = styled(P)`
  font-size: 18px;
  line-height: 27px;
  margin: 0;
`;
