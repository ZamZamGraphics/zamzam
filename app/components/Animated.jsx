"use client";
import { useEffect, useRef, useState } from "react";

function Animated({ children, classes = "", animateClass }) {
  const [animation, setAnimation] = useState("");
  const innerRef = useRef(null);

  useEffect(() => {
    const onIntersection = (items) => {
      const animationItem = items[0];
      if (animationItem.isIntersecting) {
        setAnimation(animateClass);
      } else {
        setAnimation("");
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer) {
      observer.observe(innerRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
        setAnimation("");
      }
    };
  }, [innerRef, animateClass]);

  return (
    <div ref={innerRef} className={`animate__animated ${animation} ${classes}`}>
      {children}
    </div>
  );
}

export default Animated;
