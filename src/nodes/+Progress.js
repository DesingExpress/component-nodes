import { CircularProgress, LinearProgress } from "@mui/material";

export class progress {
  static path = "layout";

  static title = "Progress";
  static description = "Progress";
  static ["@type"] = {
    type: "enum",
    values: ["circular", "linear"],
  };
  constructor() {
    this.properties = { size: 20, type: "circular" };
    // Output Slot
    this.addOutput("copmonent", "");
    this.addWidget("combo", "type", this.properties.type, "type", {
      values: progress["@type"].values,
    });
    this.addWidget("number", "size", this.properties.size, "size", {
      step: 1000,
      min: 0,
    });
  }

  onExecute() {
    this.setOutputData(
      0,
      this.properties.type === "linear" ? (
        <LinearProgress size={this.properties.size} />
      ) : (
        <CircularProgress size={this.properties.size} />
      )
    );
  }
}
