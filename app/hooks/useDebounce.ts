import { debounce } from "lodash";
import { useEffect, useMemo, useRef } from "react";

export const useDebounce = (callback: Function, timer: number) => {
  const ref = useRef<Function>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, timer);
  }, [timer]);

  return debouncedCallback;
};