import React from 'react';
import { CheckIcon } from '@bigcommerce/big-design-icons'

import { StyledStep, StyledDash, StyledLight, StyledText, StyledStepper } from './styled';

export interface StepProps {
  number?: number;
  text?: String;
  state?: 'pending' | 'current' | 'done';
  isFirst?: boolean;
  isLast?: boolean; 
  textAlign?: 'left' | 'center' | 'right';
}

export interface StepperProps {
  steps?: Array<String>;
  currentStep?: number;
  textAlign?: 'left' | 'center' | 'right';
}

export interface DashProps {
  gridArea?: 'dashl' | 'dashr';
  active?: boolean;
  hidden?: boolean;
};

export interface TextProps {
  active?: boolean;
  textAlign?: 'left' | 'center' | 'right';
}

export interface LightProps {
  active?: boolean;
}

export const Step: React.FC<StepProps> = ({ number, text, state, isFirst, isLast, textAlign }) => {
  return (
    <StyledStep>
      <StyledDash gridArea='dashl' active={state !== 'pending' } hidden={isFirst} />
      <StyledLight active={state === 'current' || state === 'done'}>
        {state === 'done' ? <CheckIcon color="white" /> : number}
      </StyledLight>
      <StyledDash gridArea='dashr' active={state === 'done'} hidden={isLast} />
      <StyledText active={state === 'current'} textAlign={textAlign} >
        {text}
      </StyledText>
    </StyledStep>
  );
}

export const Stepper: React.FC<StepperProps> = ({ steps = [], currentStep = 0, textAlign = 'center' }) => {

  const determineStep = (index: number) => {
    if( currentStep === index) return 'current';
    else if (currentStep < index) return 'pending';
    else return 'done';
  }

  return(
    <StyledStepper>
      {steps.map((text, i) => (<Step 
        number={i+1}
        text={text} 
        state={determineStep(i)}
        isFirst={i===0}
        isLast={i+1===steps.length}
        textAlign={textAlign}
      />))}
    </StyledStepper>
  )
}

Stepper.displayName = 'Stepper';
