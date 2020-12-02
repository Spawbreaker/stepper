import './App.css';
import React, {useState} from 'react';
import { Stepper } from './Stepper';
import { Panel, Button, GlobalStyles, Box, H0, Text } from '@bigcommerce/big-design';

function App() {
  const [step, setStep] = useState(0);
  const previousStep = () => setStep(step-1);
  const nextStep = () => setStep(step+1);

  return (
    <div className="App">
      <GlobalStyles />
        <Box margin="xxxLarge">
          <H0>Creating Channel</H0>
          <Stepper
              steps={[
                'Step 1',
                'The long step #2',
                'Step 3',
                'The longest step #4 that is so long that it needs to be wrapped around!',
                'Step 5'
              ]}
              currentStep={step}
          />
          <Panel header="Controls">
            <Text>This is the panel that controls the Stepper above!</Text>
            <Button onClick={previousStep}>{'<-- Go one step back'}</Button>
            <Button onClick={nextStep}>{'Go one step further -->'}</Button>
          </Panel>
        </Box>
    </div>
  );
}

export default App;
