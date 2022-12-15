import { formatNumber } from "@utils/helpers";
import React, { useMemo, useState } from "react";

type Props = {};

const RandomNumber = (props: Props) => {
  const [length, setLength] = useState<string>("2");

  const [number, setNumber] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value < "6") {
      setLength("6");
    } else if (e.target.value > "10") {
      setLength("10");
    }
    setLength(e.target.value);
  };

  const generateNumber = () => {
    const temp = Math.floor(Math.random() * 100 + 1);

    setNumber(+temp);
  };

  return (
    <div>
      <div>
        <p>Enter the characters for random number to be generated: {length}</p>
        <input
          type="text"
          name="length"
          minLength={1}
          maxLength={2}
          value={length}
          onChange={handleChange}
          className="p-3 bg-app rounded-md font-bold focus:outline-none focus:ring-2 focus:shadow-xl shadow-md text-lg transition-200 focus:ring-app"
        />
      </div>
      <div>
        <button className="btn" onClick={generateNumber}>
          Generate
        </button>
      </div>
      <div className="mt-4">
        <p>Random Number: {number}</p>
      </div>
    </div>
  );
};

export default RandomNumber;
