"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setIsEnabled(true);
    }
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      return undefined;
    }

    const cursorOuter = cursorOuterRef.current;
    const cursorInner = cursorInnerRef.current;

    if (!cursorOuter || !cursorInner) return undefined;

    const moveCursor = (event) => {
      const { clientX, clientY } = event;

      cursorInner.style.transform = `translate(${clientX}px, ${clientY}px)`;
      cursorOuter.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    const addHoverClass = () => {
      cursorInner.classList.add("cursor-hover");
      cursorOuter.classList.add("cursor-hover");
    };

    const removeHoverClass = () => {
      cursorInner.classList.remove("cursor-hover");
      cursorOuter.classList.remove("cursor-hover");
    };

    document.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll(
      "a, button, .cursor-pointer"
    );

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", addHoverClass);
      element.addEventListener("mouseleave", removeHoverClass);
    });

    cursorInner.style.visibility = "visible";
    cursorOuter.style.visibility = "visible";

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", addHoverClass);
        element.removeEventListener("mouseleave", removeHoverClass);
      });
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <div ref={cursorOuterRef} className='mouseCursor cursor-outer'></div>
      <div ref={cursorInnerRef} className='mouseCursor cursor-inner'></div>
    </>
  );
};

export default CustomCursor;
