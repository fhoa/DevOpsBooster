import React from "react";
import styled from "@emotion/styled";
import Theme from "../theme/theme";

type Props = {
  text: string;
  onClick: () => void;
  variant?: "MAIN" | "SECOUNDARY" | "CANCEL";
  fullwidth?: false | true;
  size?: "SMALL" | "LARGE";
  disabled?: false | true;
};

const Button: React.FC<Props> = ({
  text,
  onClick,
  variant,
  fullwidth,
  size,
  disabled,
}) => {
  const StyledButton = styled.button`
    width: ${fullwidth ? "calc(100% - 2rem)" : "calc(50% - 2rem)"};
    padding: 10px;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 10px;
    margin-bottom: 10px;
    height: ${size === "LARGE" ? "80px" : "50px"};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0;
    cursor: ${(disabled ? "not-allowed" :  "pointer")};
    background: ${(variant === "MAIN" && Theme.color.main) ||
                (variant === "SECOUNDARY" && Theme.color.secoundary) ||
                (variant === "CANCEL" && Theme.color.cancel) ||
    Theme.color.main};
    font-size: 16px;
    font-weight: bold;
    color: ${disabled
      ? Theme.color.text.light.disabled
      : Theme.color.text.light.primary};
    :hover {
        opacity: ${(disabled ? 1 : 0.8)};
    }
  `;

  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
