import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';

export const StyledStep = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: 40px 1fr;
  grid-template-areas: "bubble dash"
  "text text";
`;

export const StyledLight = styled.div`
  font-size: 24px;
  color: ${({theme}) => theme?.colors?.white };
  user-select: none;
  background: ${({theme}) => theme?.colors?.secondary50 };
  border-radius: 50%;
  width: 30px;
  height: 30px;
  align-self: center;
  justify-self: center;
  grid-area: bubble;
  text-align: center;
  ${({active, theme}) => active && css`
    background-color: ${theme?.colors?.primary };
  `}
`

export const StyledDash = styled.div`
  height: 4px;
  width: 100%;
  align-self: center;
  background-color: ${({theme}) => theme.colors.secondary50 };
  grid-area: dash;

  ${({active, theme}) => active && css`
    background-color: ${theme.colors.primary };
  `}
`;

export const StyledText = styled.div`
  color: ${({theme}) => theme?.colors?.secondary50 };
  grid-area: text;
  text-align: left;
  ${({active, theme}) => active && css`
    color: ${theme?.colors?.secondary70 };
  `}
  margin-right: 1rem;
`

export const StyledStepper = styled.div`
  font-family: Source Sans Pro, Arial, sans-serif;
  display: grid; 
  grid-auto-flow: column;
  width: 100%;
  gap: 0 0;
`;


StyledStep.defaultProps = {
  theme: defaultTheme,
};
StyledLight.defaultProps = {
  theme: defaultTheme,
};
StyledDash.defaultProps = {
  theme: defaultTheme,
};
StyledText.defaultProps = {
  theme: defaultTheme,
};
StyledStepper.defaultProps = {
  theme: defaultTheme,
}