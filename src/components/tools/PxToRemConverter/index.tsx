import React, { useEffect, useRef, useState } from "react";
import { ArrowsRightLeftIcon, PencilIcon } from "@heroicons/react/24/outline";
import { formatNumber } from "@utils/helpers";

type Props = {};

const initialState = {
  pxValue: "16",
  remValue: "1",
  baseValue: "16",
};

const PxToRemConverter = (props: Props) => {
  const span = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [state, setState] = useState<{
    pxValue: string;
    remValue: string;
    baseValue: string;
  }>(initialState);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(span.current.offsetWidth);
  }, [state.baseValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "pxValue") {
      setState({
        ...state,
        [e.target.name]: e.target.value,
        remValue: (+e.target.value / +state.baseValue).toString(),
      });
    }
    if (e.target.name === "remValue") {
      setState({
        ...state,
        [e.target.name]: e.target.value,
        pxValue: (+e.target.value * +state.baseValue).toString(),
      });
    }
  };

  useEffect(() => {
    if (state.baseValue !== "0") {
      setState((prevState) => ({
        ...prevState,
        pxValue: state.baseValue,
        // remValue: (+state.pxValue / +state.baseValue).toString(),
      }));
    }
  }, [state.baseValue]);

  return (
    <>
      <form className="space-x-10 flex items-center">
        <div className="flex flex-col items-start justify-center">
          <label htmlFor="pxValue" className="pb-1 text-2xl">
            Pixels
          </label>
          <input
            type="number"
            name="pxValue"
            value={state.pxValue}
            onChange={handleChange}
            className="p-3 bg-app rounded-md font-bold focus:outline-none focus:ring-2 focus:shadow-xl shadow-md text-lg transition-200 focus:ring-app"
          />
        </div>
        <div>
          <ArrowsRightLeftIcon className="w-10 h-10" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <label htmlFor="pxValue" className="pb-1 text-2xl">
            REM
          </label>
          <input
            type="number"
            name="remValue"
            value={state.remValue}
            onChange={handleChange}
            className="p-3 bg-app rounded-md font-bold focus:outline-none focus:ring-2 focus:shadow-xl shadow-md text-lg transition-200 focus:ring-app"
          />
        </div>
      </form>
      <div className="mt-16 text-white font-semibold flex items-center space-x-2 select-none">
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
                setState({ ...state, baseValue: "1" });
              } else {
                setState({
                  ...state,
                  baseValue: e.target.value,
                });
              }
            }}
            style={{ width }}
            className={`bg-transparent min-w-[1px] p-0`}
          />
        </div>
        <p>pixel{!!state.baseValue && state.baseValue > "0" && "s"}.</p>
      </div>
      <div className="mt-4">
        <button
          type="reset"
          className="btn"
          onClick={() => setState(initialState)}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default PxToRemConverter;
