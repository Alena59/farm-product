import styled from "styled-components";
import { P } from "../../styled/p/p";
import { Img } from "../../styled/img/img";

export const Feature = styled.article`
  padding: 20px;
  background: #e1edce;
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
`;

export const Image = styled(Img)`
  float: left;
  width: 56px;
  height: 56px;
  margin-right: ${(props) => props.theme.indent};
`;

export const Header = styled.header`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Text = styled(P)`
  margin: 0;
  font-size: 18px;
  line-height: 27px;
`;

export const Owner = styled.span`
  background: #88aa4d;
  color: #ffffff;
  padding: 4px 10px;
  margin: 0 0 5px;
  display: block;
`;