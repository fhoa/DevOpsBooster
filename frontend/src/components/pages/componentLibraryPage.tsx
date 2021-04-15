import React, { useState, useRef} from "react";
import Button from "../shared/button/button";
import styled from "@emotion/styled";
import Theme from "../shared/theme/theme";
import Layout from "../shared/layout/layout";

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const ColorBox = styled.div`
  width: 150px;
  height: 60px;
  margin: 1rem;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  background: ${(props) => props.color};
  font-size: 14px;
  font-weight: bold;
`;

const Overview = styled.div`
  width: 15%;
  position: sticky;
  z-index: 2;
  height: 100%;
  right: 0;
  float: right;
  top: 60px;
  text-align: center;
  background: ${Theme.color.background.main};
`;

const StyledText = styled.p`
  color: ${(props) => props.color};
`;

const ComponentPage: React.FC = () => {
  const [disabled, setDisabled] = useState(true);

  const ThemeRef = useRef(null);
  const ButtonRef = useRef(null);

  const scrollToRef = (ref: any) =>
    window.scrollTo({ top: ref.current.offsetTop - 60, behavior: "smooth" });

  return (
    <Layout>
      <Overview>
        <h3>Components</h3>
        <Button
          text={"Theme color"}
          fullwidth={true}
          onClick={() => {
            scrollToRef(ThemeRef);
          }}
        ></Button>
        <Button
          text={"Buttons"}
          fullwidth={true}
          onClick={() => {
            scrollToRef(ButtonRef);
          }}
        ></Button>
      </Overview>

      <h2 ref={ThemeRef}> Theme - Colors</h2>
      <h3>Standard</h3>
      <Container>
        <ColorBox color={Theme.color.main}>main</ColorBox>
        <ColorBox color={Theme.color.secoundary}>secoundary</ColorBox>
        <ColorBox color={Theme.color.cancel}>cancel</ColorBox>
        <ColorBox color={Theme.color.disabled}>disabled</ColorBox>
      </Container>
      <h3>Background</h3>
      <Container style={{ background: "black" }}>
        <ColorBox color={Theme.color.background.dark}>background.dark</ColorBox>
        <ColorBox color={Theme.color.background.main}>background.main</ColorBox>
        <ColorBox color={Theme.color.background.layout}>
          background.layout
        </ColorBox>
      </Container>
      <h3>Texts</h3>
      <Container>
        <ColorBox color={"white"}>
          <StyledText color={Theme.color.text.dark.primary}>
            text.dark.primary
          </StyledText>
        </ColorBox>
        <ColorBox color={"white"}>
          <StyledText color={Theme.color.text.dark.disabled}>
            text.dark.disabled
          </StyledText>
        </ColorBox>
        <ColorBox color={"black"}>
          <StyledText color={Theme.color.text.light.primary}>
            text.light.primary
          </StyledText>
        </ColorBox>
        <ColorBox color={"black"}>
          <StyledText color={Theme.color.text.light.disabled}>
            text.light.disabled
          </StyledText>
        </ColorBox>
      </Container>
      <h3>Status</h3>
      <Container>
        <ColorBox color={Theme.color.status.success}>status.success</ColorBox>
        <ColorBox color={Theme.color.status.warning}>status.warning</ColorBox>
        <ColorBox color={Theme.color.status.alert}>status.alert</ColorBox>
      </Container>
      {/* Laanding page for application */}
      <h1 ref={ButtonRef}>Buttons</h1>
      <Container>
        <Button
          text={"Main, small, halv width"}
          variant="MAIN"
          size={"SMALL"}
          onClick={() => setDisabled(!disabled)}
        ></Button>
        <Button
          text={"Main, large, halv width"}
          variant="MAIN"
          size={"LARGE"}
          onClick={() => setDisabled(!disabled)}
        ></Button>
        <Button
          text={"Secoundary, large, fullwidth"}
          variant="SECOUNDARY"
          size={"LARGE"}
          fullwidth={true}
          onClick={() => {
            scrollToRef(ThemeRef);
          }}
        ></Button>
        <Button
          text={"Cancel, large, fullwidth, disabled"}
          variant="CANCEL"
          size={"LARGE"}
          fullwidth={true}
          disabled={disabled}
          onClick={() => setDisabled(!disabled)}
        ></Button>
      </Container>
    </Layout>
  );
};

export default ComponentPage;
