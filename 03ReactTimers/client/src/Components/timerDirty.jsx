import React, { useState, useEffect } from "react";

export function TimerClean() {
  console.log("TimerClean component render");
  const [count, setCount] = useState(0);

  useEffect(function() {
    console.log("TimerClean component useEffect callback");

    const interval = setInterval(function() {
      setCount(function(currentCount) {
        currentCount + 1
      } );
    }, 1000);

    return function() {
      console.log("TimerClean component useEffect cleanup");
      clearInterval(interval);
    };
  }, []);

  return <div>Count: {count}</div>;
}