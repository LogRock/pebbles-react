import React from "react";
import styled from "styled-components";

import Stepper from "../../../../lib/components/Stepper";
import StepperStep from "../../../../lib/components/Stepper/StepperStep";

export default {
  title: "Components/Stepper",
  component: Stepper,
};

const NoMarginText = styled.h4`
  margin: 0;
`;

const Template = (args) => <Stepper {...args}></Stepper>;

export const Default = Template.bind({});
Default.args = {
  forceTwoDigitsIndicator: true,
  showHoverEffect: true,
  children: (
    <>
      <StepperStep stepIndex={1} completed>
        <NoMarginText>Personal</NoMarginText>
      </StepperStep>
      <StepperStep stepIndex={2} completed>
        <NoMarginText>Company</NoMarginText>
      </StepperStep>
      <StepperStep stepIndex={3} current>
        <NoMarginText>ELD</NoMarginText>
      </StepperStep>
      <StepperStep stepIndex={4} last>
        <NoMarginText>Finish</NoMarginText>
      </StepperStep>
    </>
  ),
};

export const InformativeOnly = Template.bind({});
InformativeOnly.args = {
  forceTwoDigitsIndicator: true,
  showHoverEffect: true,
  children: (
    <>
      <StepperStep stepIndex={1}>
        <NoMarginText>Personal</NoMarginText>
      </StepperStep>
      <StepperStep stepIndex={2}>
        <NoMarginText>Company</NoMarginText>
      </StepperStep>
      <StepperStep stepIndex={3}>
        <NoMarginText>ELD</NoMarginText>
      </StepperStep>
      <StepperStep stepIndex={4}>
        <NoMarginText>Documents</NoMarginText>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          consequatur ab quas aperiam, eos modi voluptas sit autem tenetur ipsa
          ex reprehenderit illum voluptates iste, dolorum explicabo. Quaerat,
          laborum ab? Quos autem suscipit libero commodi reiciendis quam minima,
          molestias rerum nisi officiis itaque. Debitis expedita qui, velit
          dolorum quidem tempora aperiam et distinctio perferendis reiciendis
          hic! Reiciendis nostrum ullam incidunt vel unde at quod assumenda ea
          modi eos vero labore explicabo debitis iusto ex, temporibus illo
          repellat sequi. Facere, atque!
        </p>
      </StepperStep>
      <StepperStep stepIndex={5} last>
        <NoMarginText>Last Step</NoMarginText>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            voluptatem delectus at dolorem, modi harum, omnis ea atque saepe
            architecto aperiam! Magnam obcaecati ipsa eveniet at deleniti labore
            non minus suscipit iure placeat cupiditate quas, vero facilis
            commodi accusamus nemo.
          </p>
        </div>
      </StepperStep>
    </>
  ),
};
