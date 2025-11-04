"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const ACTIVE_SCROLL_THRESHOLD = 120;

const RouteScrollToTop = () => {
  const location = usePathname();
  const buttonRef = useRef(null);
  const pathRef = useRef(null);
  const rafIdRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const buttonEl = buttonRef.current;
    const pathEl = pathRef.current;
    if (!buttonEl || !pathEl) {
      return undefined;
    }

    const pathLength = pathEl.getTotalLength();
    pathEl.style.transition = "none";
    pathEl.style.strokeDasharray = `${pathLength} ${pathLength}`;
    pathEl.style.strokeDashoffset = `${pathLength}`;

    requestAnimationFrame(() => {
      pathEl.style.transition = "stroke-dashoffset 200ms linear";
    });

    const update = () => {
      rafIdRef.current = undefined;
      const scrollY = window.scrollY;
      const scrollLimit =
        document.documentElement.scrollHeight - window.innerHeight;
      const clampedLimit = Math.max(scrollLimit, 1);
      const progress = pathLength - (scrollY * pathLength) / clampedLimit;
      pathEl.style.strokeDashoffset = `${progress}`;
      const shouldActivate = scrollY > ACTIVE_SCROLL_THRESHOLD;
      buttonEl.classList.toggle("active-progress", shouldActivate);
    };

    const handleScroll = () => {
      if (rafIdRef.current) {
        return;
      }
      rafIdRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    const handleClick = (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    buttonEl.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      buttonEl.removeEventListener("click", handleClick);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className='progress-wrap'
      aria-label='scroll indicator'
      title='back to top'
    >
      <span />
      <svg
        className='progress-circle svg-content'
        width='100%'
        height='100%'
        viewBox='-1 -1 102 102'
      >
        <path
          ref={pathRef}
          d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98'
        />
      </svg>
    </button>
  );
};

export default RouteScrollToTop;
