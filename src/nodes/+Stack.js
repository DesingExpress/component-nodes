import { Fragment } from "react";
import StackComponent from "../Components/Stack";

export class arrayComponent {
  static path = "layout";

  static title = "arrayComponent";
  static description = "arrayComponent";

  constructor() {
    this.addInput("component", "");
    this.addInput("copmonent", "");

    // Output Slot
    this.addOutput("copmonent", "");
  }

  onGetInputs() {
    return [["copmonent", ""]];
  }

  // Execute function when you Click Play button
  onExecute() {
    const comps = [];
    if (this.inputs) {
      for (var i = 0; i < this.inputs.length; i++) {
        let v = this.getInputData(i);
        if (v === undefined) {
          continue;
        }
        comps.push(v);
      }
    }
    this.setOutputData(0, <Fragment>{comps}</Fragment>);
  }
}

export class stack {
  static path = "layout";

  static title = "stack";
  static description = "stack";

  constructor() {
    this.addInput("component", "");
    this.addInput("setDirection", -1);
    this.addInput("setSpacing", -1);

    // Output Slot
    this.addOutput("copmonent", "");
    this.properties = { direction: "row", spacing: 0 };
    this._setProps = () => {};
    this.setDirection = (v) => {
      this._setProps({ direction: v });
    };
    this.setSpacing = (v) => {
      this._setProps({ spacing: v });
    };
  }

  onGetInputs() {
    return [["copmonent", ""]];
  }

  // Execute function when you Click Play button
  onExecute() {
    // const comps = [];
    // if (this.inputs) {
    //   for (var i = 0; i < this.inputs.length; i++) {
    //     let v = this.getInputData(i);
    //     if (v === undefined) {
    //       continue;
    //     }
    //     comps.push(<div style={{ flex: 1, overflow: "hidden" }}>{v}</div>);
    //   }
    // }
    const comps = this.getInputData(0);
    this.setOutputData(
      0,
      <StackComponent
      defaultDirection={this.properties.direction}
      defaultSpacing={this.properties.spacing}
        setProps={(cb) => {
          this._setProps = cb;
        }}
      >
        {comps}
      </StackComponent>
    );
  }

  onAction(action, param) {
    this[`${action}`]?.(param);
  }
}
