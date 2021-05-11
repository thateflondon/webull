import styled from "styled-components";
import BackgroundImage from "../../assets/images/bckg.png";

export const Section = styled.section`
  background-image: url(${BackgroundImage});
  height: 785px;
  display: block;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  width: 100%;
  height: 100px;
`;

export const Left = styled.div`
  padding-left: 220px;
  padding-top: 143px;
`;

export const Title = styled.p`
  font-size: 55px;
  color: #04050a;
  font-weight: 400;
`;

export const Description = styled.p`
  width: 472px;
  font-size: 20px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 58px;
`;

export const Button = styled.a`
  width: 371px;
  height: 71px;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 22px;
  line-height: 71px;
  text-decoration: none;
  border-radius: 18px;
  margin-top: 58px;
  cursor: pointer;
`;
