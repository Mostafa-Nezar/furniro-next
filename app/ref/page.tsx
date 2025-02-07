"use client";
import React, { useEffect, useRef, useState } from "react";

function Myref() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const r = useRef(null);
  const s = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      s.current?.focus();
      r.current?.click();
    }
  }, [y]);

  const plusxhandler = () => {
    setx(x + 3);
  };

  const plusyhandler = () => {
    sety(y + 3);
  };

  return (
    <>
      <button onClick={plusxhandler} ref={r}>
        Add x{" "}
      </button>
      <button onClick={plusyhandler}>Add y </button>
      <br />
      <button
        onClick={() => {
          setx(x + 1);
        }}
      >
        add x state{" "}
      </button>
      <button
        onClick={() => {
          sety(y + 1);
        }}
      >
        add y state{" "}
      </button>
      <input type="text" ref={s} style={{ color: "red" }} />
      <h3>{x}</h3>
      <h3>{y}</h3>
    </>
  );
}

function Inc() {
  const ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }

  return <button onClick={handleClick}>Click me!</button>;
}


function Stopvideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

export default function Ref() {
  return (
    <div>
      <Myref />
      <Stopvideo />
      <Stopwatch />
      <Inc />
    </div>
  );
}
