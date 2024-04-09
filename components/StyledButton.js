import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: #64ccc5;
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;

  ${({ variant }) =>
    variant === "delete" &&
    css`
      background-color: #053b50;
      color: white;
    `}
`;
