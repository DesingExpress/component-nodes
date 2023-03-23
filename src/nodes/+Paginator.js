import PaginatorComponent from "../Components/Paginator";

export class paginator {
  static path = "layout";

  static title = "Paginator";
  static description = "paginator";

  constructor() {
    this.addInput("", -1);
    this.addInput("component", "");

    // Output Slot
    this.addOutput("", -1);
    this.addOutput("copmonent", "");

    this._setValue = () => {};
  }

  onExecute() {
    const childComp = this.getInputData(1);

    this.setOutputData(
      1,
      <PaginatorComponent setValue={(fn) => (this._setValue = fn)} defaultComponent={childComp} />
    );
  }

  onAction(action, param) {
    const childComp = this.getInputData(1);
    this._setValue(childComp)
    this.triggerSlot(0);
  }
}
