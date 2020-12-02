import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';

import { DashProps, TextProps, LightProps } from './Stepper';

export const StyledStep = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px 1fr;
  grid-template-rows: 40px 1fr;
  grid-template-areas: "dashl bubble dashr"
  "text text text";
`

export const StyledStepper = styled.div`
  font-family: Source Sans Pro, Arial, sans-serif;
  display: grid; 
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  width: 100%;
  gap: 0 0;
`

export const StyledDash = styled.div<DashProps>`
  height: 4px;
  width: 100%;
  align-self: center;
  background-color: ${({theme}) => theme?.colors?.secondary50 };
  grid-area: ${({gridArea}) => gridArea};

  ${({active, theme}) => active && css`
    background-color: ${theme?.colors?.primary };
  `}
`
export const StyledLight = styled.div<LightProps>`
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

export const StyledText = styled.p<TextProps>`
  color: ${({theme}) => theme?.colors?.secondary50 };
  grid-area: text;
  text-align: ${({ textAlign }) => textAlign };
  ${({active, theme}) => active && css`
    color: ${theme?.colors?.secondary70 };
  `}
`
StyledStep.defaultProps = {
  theme: defaultTheme,
};

StyledDash.defaultProps = {
  theme: defaultTheme,
};

StyledLight.defaultProps = {
  theme: defaultTheme,
};

StyledText.defaultProps = {
  theme: defaultTheme,
};
