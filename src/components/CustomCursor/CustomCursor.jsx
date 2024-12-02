import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  // Refs for the big and small cursor balls
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Smooth cursor tracking
  const moveCursorSmoothly = () => {
    const bigBall = bigBallRef.current;
    const smallBall = smallBallRef.current;

    if (bigBall && smallBall) {
      // Smooth cursor following logic
      bigBall.style.transition = 'transform 0.1s ease-out';
      smallBall.style.transition = 'transform 0.1s ease-out';

      bigBall.style.transform = `translate(${cursorPos.x - 15}px, ${cursorPos.y - 15}px)`;
      smallBall.style.transform = `translate(${cursorPos.x - 5}px, ${cursorPos.y - 7}px)`;
    }
  };

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update cursor position
      setCursorPos({ x: e.pageX, y: e.pageY });
    };

    // Add mousemove event listener
    document.body.addEventListener('mousemove', handleMouseMove);

    // Clean up event listener
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Trigger the smooth cursor movement
  useEffect(() => {
    // Using requestAnimationFrame for smooth movement
    const smoothMove = () => {
      moveCursorSmoothly();
      requestAnimationFrame(smoothMove);
    };

    smoothMove(); // Initial trigger
  }, [cursorPos]);

  // Handle hover states
  useEffect(() => {
    const handleMouseHover = () => {
      setIsHovered(true);
    };

    const handleMouseHoverOut = () => {
      setIsHovered(false);
    };

    // Adding hover events to the hoverable elements
    document.querySelectorAll('.hoverable').forEach((element) => {
      element.addEventListener('mouseenter', handleMouseHover);
      element.addEventListener('mouseleave', handleMouseHoverOut);
    });

    // Clean up hover event listeners
    return () => {
      document.querySelectorAll('.hoverable').forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseHover);
        element.removeEventListener('mouseleave', handleMouseHoverOut);
      });
    };
  }, []);

  return (
    <>
      {/* Big cursor ball */}
      <div
        ref={bigBallRef}
        className={`fixed pointer-events-none z-50 bg-black w-12 h-12 rounded-full mix-blend-difference transition-all duration-300 ${isHovered ? 'scale-150' : ''}`}
      ></div>

      {/* Small cursor ball */}
      <div
        ref={smallBallRef}
        className="fixed pointer-events-none z-50 bg-white w-4 h-4 rounded-full mix-blend-difference transition-all duration-100"
      ></div>
    </>
  );
};

export default CustomCursor
