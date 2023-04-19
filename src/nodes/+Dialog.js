import { useEffect, useState } from "react";
import DialogComp from "../Components/Dialog";

export class dialog {
  static path = "layout";

  static title = "Dialog";
  static description = "Dialog";

  constructor() {
    this.addInput("", -1);
    this.addInput("component", "");
    this.addInput("visible");
    this._update = () => {};
    const useUpdate = (_o, _c) => {
      const [open, setOpen] = useState(_o);
      const [comp, setComp] = useState(_c);
      useEffect(() => {
        this._update = (o, c) => {
          setOpen(o);
          setComp(c);
        };
      }, []);

      return [open, comp];
    };
    this.useUpdate = useUpdate;
    // Output Slot
    this.addOutput("", -1);
    this.addOutput("copmonent", "");
  }

  onExecute() {
    const childComp = this.getInputData(1);
    const isOpen = this.getInputData(2);
    this.setOutputData(
      1,
      <DialogComp defaultOpen={isOpen} useProps={this.useUpdate}>
        {childComp}
      </DialogComp>
    );
  }
  onAction() {
    const childComp = this.getInputData(1);
    const isOpen = this.getInputData(2);
    this._update(isOpen, childComp);
    this.triggerSlot(0);
  }
}
