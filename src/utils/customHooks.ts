import {
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
  ReactEventHandler,
} from 'react';
import { throttle } from 'lodash';

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

export interface UseOnScrollArgs {
  scrollCheckTimeout?: number;
  onScrollFinished?: () => void;
  onScrollStarted?: () => void;
}

export interface UseOnScrollReturn {
  // Attach the handleScroll to your onScroll property on the element you want to listen to
  handleScroll: ReactEventHandler<UIEvent>;
  isScrolling: boolean;
}
export const useOnScrollListener = ({
  scrollCheckTimeout = 350,
  onScrollFinished,
  onScrollStarted,
}: UseOnScrollArgs): UseOnScrollReturn => {
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollEventTime = useRef<number>();

  useEffect(() => {
    const isScrollFinished = () => {
      if (
        isScrolling &&
        Date.now() - scrollCheckTimeout >
          (lastScrollEventTime?.current || Date.now())
      ) {
        console.log('detected scroll finished');
        setIsScrolling(false);
        if (onScrollFinished) {
          onScrollFinished();
        }
      }
    };
    const scrollCheckTimer = setInterval(isScrollFinished, scrollCheckTimeout);
    return () => clearInterval(scrollCheckTimer);
  }, [isScrolling, scrollCheckTimeout]);

  // check scroll started every second to see if it's finished
  return {
    handleScroll: throttle(() => {
      if (!isScrolling) {
        console.log('detected scroll started');
        setIsScrolling(true);
        if (onScrollStarted) {
          onScrollStarted();
        }
      }
      lastScrollEventTime.current = Date.now();
    }, scrollCheckTimeout),
    isScrolling,
  };
};
