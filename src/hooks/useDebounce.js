import { useEffect, useState } from 'react';
//Tạo độ trể cho xử lý
export default function useDebounce(initValue = '', delay = 500) {
  const [debounceValue, setDebounceValue] = useState(initValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initValue]);
  return debounceValue;
}
