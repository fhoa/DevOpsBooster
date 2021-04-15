import React from "react";
import styled from "@emotion/styled";
import Theme from "../theme/theme";

const Container = styled.div`
    display: flex;
`

const StyledLabel = styled.p`
    margin-left: 0.5rem;
    margin-bottom: 1rem;
    margin-top: 0;
    font-size: 14px;
`

type Props = {
  label: string;
  onChange: () => void;
  checked?: false | true;
  disabled?: false | true;
  name?: string;
};

const Checkbox: React.FC<Props> = ({
  label,
  onChange,
  checked,
  disabled,
  name
}) => {

  const StyledCheckbox = styled.input`
    cursor: ${(disabled ? "not-allowed" :  "pointer")};
    margin-bottom: 1rem;
    min-height: 14px;
    min-width: 14px;
  `;

  return (
    <Container>
    <StyledCheckbox type="checkbox" name={name} disabled={disabled} onChange={onChange} checked={checked} />
    <StyledLabel>{label}</StyledLabel>
    </Container>
   
  );
};

export default Checkbox;
