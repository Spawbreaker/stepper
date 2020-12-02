import React, { useState, useEffect } from 'react';
import { CheckIcon } from '@bigcommerce/big-design-icons'

import { StyledStep, StyledDash, StyledLight, StyledLightText, StyledText, StyledStepper, StyledMobileLight } from './styled';

export interface StepProps {
  number?: number;
  text?: String;
  state?: 'pending' | 'current' | 'done';
  isLast?: boolean; 
}

export interface StepperProps {
  steps?: Array<String>;
  currentStep?: number;
}

export interface LightProps { active?: boolean; };
export interface DashProps { active?: boolean; };
export interface TextProps { active?: boolean; };

export const Step: React.FC<StepProps> = ({ number, text, state, isLast }) => {
  const [ isCurrent, setIsCurrent ] = useState(state === 'current');
  const [ isDone, setIsDone ] = useState(state === 'done');
  useEffect(() => {setIsCurrent(state === 'current'); setIsDone(state === 'done');}, [state]);

  return (
    <StyledStep>
      <StyledLight active={isCurrent || isDone}>
        { isDone ? 
          <CheckIcon color="white" size="100%"  /> : <StyledLightText>{number}</StyledLightText>
        }
      </StyledLight>
      <StyledDash active={isDone} hidden={isLast}/>
      <StyledText active={isCurrent}>{text}</StyledText>
    </StyledStep>
  );
}

export const Stepper: React.FC<StepperProps> = ({ steps = [], currentStep = 0 }) => {

  const determineStep = (index : number) => {
    if( currentStep === index) return 'current';
    else if (currentStep < index) return 'pending';
    else return 'done';
  }

  return(
    <StyledStepper>
      <StyledMobileLight >Step {currentStep+1} of {steps.length}</StyledMobileLight>
      {steps.map((text, i) => (<Step 
        number={i+1}
        text={text} 
        state={determineStep(i)}
        isLast={i+1===steps.length}
      />))}
    </StyledStepper>
  )
}

Stepper.displayName = 'Stepper';
