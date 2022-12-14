import React, { useEffect, useRef, useState } from "react";
import { PencilIcon } from "@heroicons/react/24/outline";

type Props = {};

const PxToRemConverter = (props: Props) => {
  const span = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [state, setState] = useState<{
    pxValue: number;
    remValue: number;
    baseValue: number;
  }>({
    pxValue: 0,
    remValue: 0,
    baseValue: 16,
  });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(span.current.offsetWidth);
  }, [state.baseValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="flex items-center space-x-2 select-none">
        <p>Calculation based on a root font-size of</p>
        <div className="flex items-center">
          <span
            ref={span}
            className="absolute opacity-0 z-[-100] whitespace-pre"
          >
            {state.baseValue}
          </span>

          <input
            type="number"
            name="baseValue"
            value={state.baseValue}
            onChange={(e) => {
              if (+e.target.value <= 0) {
                setState({ ...state, baseValue: 1 });
              } else {
                setState({
                  ...state,
                  baseValue: +e.target.value,
                });
              }
            }}
            style={{ width }}
            className={`bg-transparent min-w-[1px] p-0`}
          />
        </div>
        <p>pixel{!!state.baseValue && state.baseValue > 0 && "s"}.</p>
      </div>
      <input
        type="number"
        name="pxValue"
        value={state.pxValue}
        onChange={handleChange}
        className="py-4 text-black"
      />
    </div>
  );
};

export default PxToRemConverter;
