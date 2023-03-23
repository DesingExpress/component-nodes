import DisplayComp, { PreservedComp } from "../Components/PreserveComp";

export class preserve {
  static path = "layout";

  static title = "preserve";
  static description = "preserve";
  constructor() {
    this.domElem = document.createElement("div");

    this.addInput("", -1);
    this.addInput("component", "");

    this.addOutput("", -1);
    this.addOutput("component", "");
    this.addOutput("preserved Component", "");
  }

  onNodeRemoved() {
    // this.domElem.remove();
  }

  onExecute() {
    const comp = this.getInputData(1);
    this.setOutputData(
      2,
      <PreservedComp ref={this.domElem}>{comp}</PreservedComp>
    );
    this.setOutputData(1, <DisplayComp ref={this.domElem} />);
  }
  onAction() {
    // this.onExecute();
    this.triggerSlot(0);
  }
}
