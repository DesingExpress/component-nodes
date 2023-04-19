import { Typography } from "@mui/material";

export class typography {
  static path = "layout";
  static typeMap = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    h7: "h7",
    title: "title2",
    "title(small)": "title1",
    subtitle: "subtitle4",
    "subtitle(small)": "subtitle43",
    body: "body2",
    "body(small)": "body1",
    caption: "helper1",
    label: "label1",
  };
  static title = "Typography";
  static description = "Typography";
  static ["@type"] = {
    type: "enum",
    values: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "h7",
      "title",
      "title(small)",
      "subtitle",
      "subtitle(small)",
      "body",
      "body(small)",
      "caption",
      "label",
    ],
  };
  constructor() {
    this.properties = { type: "circular", text: "" };
    // Output Slot
    this.addOutput("copmonent", "");
    this.addWidget("combo", "type", this.properties.type, "type", {
      values: typography["@type"].values,
    });
    this.addWidget("text", "text", this.properties.text, "text", {
      multiline: true,
    });
  }

  onExecute() {
    this.setOutputData(
      0,
      <Typography variant={typography.typeMap[this.properties.type]}>
        {this.properties.text}
      </Typography>
    );
  }
}
