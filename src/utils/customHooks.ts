import { useEffect, useState, useLayoutEffect, useRef } from 'react';

export function useTimeout(
  callback: () => void,
  delay: number | null,
  uniqueId: string
) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return;
    }

    const id = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(id);
  }, [delay, uniqueId]);
}

export interface UseReturnUnlessTouchArgs {
  returnURL: string | (() => void);
  timeout: number;
}
export const useReturnUnlessTouch = ({
  returnURL,
  timeout,
}: UseReturnUnlessTouchArgs) => {
  const [currentTimeoutId, setCurrentTimeoutId] = useState(0);
  useEffect(() => {
    const handleTouch = () => {
      setCurrentTimeoutId((timeoutId) => {
        console.log('setting timeoutid', timeoutId++);
        return timeoutId++;
      });
    };
    document.addEventListener('touchstart', handleTouch);
    document.addEventListener('mousedown', handleTouch);
    return () => {
      document.removeEventListener('touchstart', handleTouch);
      document.removeEventListener('mousedown', handleTouch);
    };
  }, []);

  useTimeout(
    typeof returnURL === 'function'
      ? returnURL
      : () => (window.location.href = returnURL),
    timeout,
    currentTimeoutId.toString()
  );
};
