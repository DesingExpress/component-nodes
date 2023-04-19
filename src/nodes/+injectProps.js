import { cloneElement, isValidElement } from "react";

export class injectProps {
  static path = "layout";
  static title = "InjectProps";
  static description = "InjectProps";
  constructor() {
    this.addInput("", -1);
    this.addInput("component", "");
    this.addInput("properties", "");
    this.addOutput("", -1);
    this.addOutput("component", "");
  }
  onExecute() {
    const comp = this.getInputData(1);
    const props = this.getInputData(2);
    if (isValidElement(comp) && typeof props === "object")
      this.setOutputData(1, cloneElement(comp, props));
    else {
    }
  }
}
