import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("screen rendered");
    // checkCount();
    // setTimeout(() => {
    //   setCount((previousState) => {
    //     return previousState + 1;
    //   });
    // }, 1000);
  });

  function increase() {
    setCount((previousState) => {
      return previousState + 1;
    });
  }

  function checkCount() {
    if (count > 5) {
      setCount(1);
    }
  }
  return (
    <>
      <h1>I have rendered {count} times </h1>
      <button onClick={increase}>click here</button>
    </>
  );
}

export default Timer;
