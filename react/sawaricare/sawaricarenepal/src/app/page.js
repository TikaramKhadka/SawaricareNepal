'use client'
import { Button } from '@nextui-org/react';
import { useState } from "react";
import React from 'react'

const Home = () => {
  let [num, setNum] = useState(10);

  const handleChange = (action) => {
    if (action === "increment" && num < 10) {
      setNum(num + 1);
    } else if (action === "decrement" && num > 0) {
      setNum(num - 1);
    }
  }

  return (
    <div>
      {num}
      <Button onClick={() => handleChange("increment")}>Increment</Button>
      <Button onClick={() => handleChange("decrement")}>Decrement</Button>
    </div>
  );
}

export default Home;
