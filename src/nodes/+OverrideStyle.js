import { Fragment, isValidElement } from "react";
import OverrideStyle from "../Components/OverrideStyle";

export class overrideStyleNode {
  static path = "layout";

  static title = "OverrideStyle";
  static description = "OverrideStyle";

  constructor() {
    // Input Slot
    this.addInput("component", "");
    this.addInput("style", "object");

    // Output Slot
    this.addOutput("component", "");
    // this.addOutput("eventOutput", -1);
  }

  // Execute function when you Click Play button
  onExecute() {
    // Get data from Input Slot[1]
    const inputComponent = this.getInputData(0);
    const style = this.getInputData(1);
    // set output slot data 'hello World'
    this.setOutputData(
      0,
      isValidElement(inputComponent) ? (
        <OverrideStyle style={style}>{inputComponent}</OverrideStyle>
      ) : (
        <Fragment />
      )
    );
  }

  // Will Execute when the node received events
  // onAction(action, parameters) {
  //   // Trigger event out slot
  //   this.triggerSlot(0, parameters);
  // }
}
