"use client";
import { useMemo, useState } from "react";

export default function Memechangecolor() {
  const randomcolor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const m = useMemo(() => {
    return (
      <div
        style={{
          backgroundColor: randomcolor,
          width: 200,
          height: 200,
        }}
      ></div>
    );
  }, [x]);
  return (
    <div>
      {m}
      <button onClick={() => setx(x + 1)}>set x</button>
      <button onClick={() => sety(y + 1)}>set y</button>
    </div>
  );
}
