import { useEffect, useState } from "react";
import BoxComp from "../Components/Box";

export class box {
  static path = "layout";

  static title = "Box";
  static description = "Box";

  constructor() {
    this.addInput("", -1);
    this.addInput("component", "");
    this._update = () => {};
    const useUpdate = () => {
      const [comp, setComp] = useState();
      useEffect(() => {
        this._update = (c) => {
          setComp(c);
        };
      }, []);

      return comp;
    };
    this.useUpdate = useUpdate;
    // Output Slot
    this.addOutput("", -1);
    this.addOutput("copmonent", "");
  }

  onExecute() {
    const childComp = this.getInputData(1);
    this.setOutputData(
      1,
      <BoxComp useProps={this.useUpdate}>{childComp}</BoxComp>
    );
  }
  
  onAction() {
    const childComp = this.getInputData(1);
    this._update(childComp);
    this.triggerSlot(0);
  }
}
