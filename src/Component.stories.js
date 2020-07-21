import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Component from "./Component";

export default {
  title: "Horizontal",
  component: Component
};

const actions =  {
  logResults: action("Results logged"),
  setNextEnabled: action("Next button enabled")
};

const options = () => {
  return {
    option0 : text("Option 0", ""),
    option1 : text("Option 1", ""),
    option2 : text("Option 2", ""),
    option3 : text("Option 3", ""),
    option4 : text("Option 4", ""),
    option5 : text("Option 5", ""),
    option6 : text("Option 6", ""),
    option7 : text("Option 7", ""),
    option8 : text("Option 8", ""),
    option9 : text("Option 9", "")
  }
}

const props = () => {
  return {...actions, ...options()}
}

export const Horizontal = () => {
  return <Component dropDown={boolean("Drop Down", true)} {...props()} />
};

export const DropDown = () => {
  return <Component dropDown={true} {...props()} />
};

export const RadioList = () => {
  return <Component dropDown={false} {...props()} />
};
