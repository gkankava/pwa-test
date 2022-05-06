import React, {
  useEffect,
  useRef,
  Children,
  cloneElement,
  isValidElement,
  useState,
} from "react";

function Content({ show, close, children, tRef, top = 80 }) {
  const ref = useRef(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        tRef.current &&
        !ref.current.contains(event.target) &&
        !tRef.current.contains(event.target)
      ) {
        setMounted(false);
        setTimeout(() => {
          close && close();
        }, 100);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
    // eslint-disable-next-line
  }, [close]);

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { close });
    }
    return child;
  });

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setMounted(true);
      }, 100);
    } else {
      setMounted(false);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      ref={ref}
      className={`drop-down-content active-${mounted}`}
      onClick={() => {
        setMounted(false);
        setTimeout(() => {
          close();
        }, 100);
      }}
      style={{ top }}
    >
      {childrenWithProps}
    </div>
  );
}

export default Content;
