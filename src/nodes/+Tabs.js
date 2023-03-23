import { Fragment } from "react";
import TabsComponent from "../Components/Tabs";

export class tabs {
  static path = "layout";

  static title = "tabs";
  static description = "tabs";

  constructor() {
    this.addInput("values", "");
    this.addInput("setValue", -1);

    // Output Slot
    this.addOutput("copmonent", "");
    this.addOutput("onChange", -1);

    this._setValue = () => {};
    this._onChange = (v) => {
      this.triggerSlot(1, v);
    };
  }

  onExecute() {
    const values = this.getInputData(0);

    this.setOutputData(
      0,
      Array.isArray(values) ? (
        <TabsComponent
          values={values}
          setValue={(fn) => (this._setValue = fn)}
          onChange={this._onChange}
        />
      ) : (
        <Fragment />
      )
    );
  }

  onAction(action, param) {
    const idx = Number(param);
    if (!Number.isNaN(idx)) this._setValue(idx);
  }
}
