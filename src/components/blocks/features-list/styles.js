import styled from "styled-components";
import Button from "../../../components/ui/button/button";
import { Section } from "../../styled/section/section";

export const Features = styled(Section)`
  padding: 100px 90px;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  & h1:first-child {
      margin-bottom: 61px;
    }
`;

export const Ul = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:  1fr 1fr;
  row-gap: 20px;
  column-gap: 2%;
  margin-bottom: 64px;
`;

export const Li = styled.li`
  display: flex;
  flex-grow: 1;
`;

export const StyledButton = styled(Button)`
  margin-top: 64px;
`;