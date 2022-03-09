import React from "react";
import Select from "../../../../lib/components/Select";

const autoCompleteItems = [
  {
    id: 1,
    name: "First Item",
  },
  {
    id: 2,
    name: "Second Item",
  },
  {
    id: 3,
    name: "Third Item",
  },
  {
    id: 4,
    name: "You guessed it",
  },
  {
    id: 5,
    name: "First Item",
  },
  {
    id: 6,
    name: "Second Item",
  },
  {
    id: 7,
    name: "Third Item",
  },
  {
    id: 8,
    name: "You guessed it",
  },
];

export default {
  title: "Components/Select",
  component: Select,
};

const Template = (args) => (
  <>
    <Select
      autoCompleteItems={autoCompleteItems}
      {...args}
      inputProps={{ description: "Select your stuff" }}
    />
    <Select
      autoCompleteItems={autoCompleteItems}
      {...args}
      inputProps={{ helper: "Foo" }}
    />
    <Select
      autoCompleteItems={autoCompleteItems}
      {...args}
      inputProps={{ description: "Select your stuff", helper: "Foo" }}
    />
  </>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomItemRendering = Template.bind({});
CustomItemRendering.args = {
  renderItem: (item) => <li>{item.name} all rendered as li</li>,
};

export const CustomHeader = Template.bind({});
CustomHeader.args = {
  renderHeader: () => (
    <h3>This is a custom header, great for table-like lists</h3>
  ),
};

export const Spaced = Template.bind({});
Spaced.args = {
  spaced: true,
};

export const WithCallback = Template.bind({});
WithCallback.args = {};
