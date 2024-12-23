import { useEffect } from "react";

function Timer({ dispatch, secoundRemaining }) {
  const min = Math.floor(secoundRemaining / 60);
  const secounds = secoundRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{secounds < 10 && "0"}
      {secounds}
    </div>
  );
}

export default Timer;
