import { Fragment, isValidElement, useEffect, useState } from "react";

function PaginatorComponent({ setValue, defaultComponent }) {
  const [comp, setComp] = useState(defaultComponent ?? <div />);

  useEffect(() => {
    setValue((v) => setComp(isValidElement(v) ? v : <div />));
  }, [setValue]);
  return <Fragment>{comp}</Fragment>;
}

export default PaginatorComponent;
