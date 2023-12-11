import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Name = ({message , speed}) => {
// Create reference to store the DOM element containing the animation
const el = useRef(null);

useEffect(() => {
  const typed = new Typed(el.current, {
    strings: [`${message}`],
    typeSpeed: Number(speed),
  });

  return () => {
    // Destroy Typed instance during cleanup to stop animation
    typed.destroy();
  };
}, []);

return (
  <div className="App">
    <span ref={el} />
  </div>
);
};

export default Name;