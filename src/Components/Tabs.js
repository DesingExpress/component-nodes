import { Tab, Tabs } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

function TabsComponent({ values, setValue: _setValue, onChange, ...props }) {
  const [value, setValue] = useState(0);

  const handleChangeValue = useCallback((_, v) => {
    setValue(v);
    onChange?.(v);
  }, []);

  useEffect(() => {
    _setValue((v) => handleChangeValue(undefined, v));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_setValue]);

  return (
    <Tabs
      value={value}
      onChange={handleChangeValue}
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      {...props}
    >
      {values.map((v, i) => (
        <Tab label={v} value={i} />
      ))}
    </Tabs>
  );
}

export default TabsComponent;
