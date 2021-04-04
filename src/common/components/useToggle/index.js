import { useState, useCallback } from "react";

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const toggler = useCallback(() => setValue((v) => !v), []);
  return [value, toggler];
};
