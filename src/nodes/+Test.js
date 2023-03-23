import { useEffect, useState } from "react";

function DummytestStateComponent() {
  const [s, ss] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      ss((v) => v+1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return <div>{s}</div>;
}
export class testStateComponent {
  static path = "layout";
  static title = "TestStateComponent";
  static description = "TestStateComponent";
  constructor() {
    this.addOutput("", "");
  }
  onExecute() {
    this.setOutputData(0, <DummytestStateComponent />);
  }
}
