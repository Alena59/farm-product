import styled from "styled-components";
import { Section } from "../../../components/styled/section/section";

export const StyledSection = styled(Section)`
  max-width: 1280px;
  padding: 30px 90px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
  }
`

export const Copyright = styled.span`
  color: #333333;
  font-style: 18px;
  line-height: 27px;
`