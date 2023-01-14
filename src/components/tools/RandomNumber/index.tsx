import { formatNumber } from "@utils/helpers";
import useClipboard from "@utils/hooks/useClipboard";
import React, { useEffect, useState } from "react";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

const RandomNumber: React.FC = () => {
  const [randomNumber, setRandomNumber] = useState("");
  const [length, setLength] = useState(3);
  const { copyToClipboard, isCopied } = useClipboard();

  const generateRandomNumber = () => {
    if (length > 0) {
      let randomNum = "";
      for (let i = 0; i < length; i++) {
        randomNum += Math.floor(Math.random() * 10);
      }
      if (randomNum.startsWith("0")) {
        randomNum = randomNum.slice(1);
        randomNum = "1" + randomNum;
      }
      setRandomNumber(randomNum);
    } else {
      setRandomNumber("Please enter length");
    }
  };

  useEffect(() => {
    if (isCopied) {
      toast.success("Copied To Clipboard");
    }
  }, [isCopied]);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-lg">
          Enter length (0 - 9) for random number to be generated:
        </p>
        <input
          name="length"
          type="number"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="p-3 text-lg font-bold rounded-md shadow-md bg-app focus:outline-none focus:ring-2 focus:shadow-xl transition-200 focus:ring-app"
          autoComplete="off"
        />
      </div>
      <div>
        <button type="submit" className="btn" onClick={generateRandomNumber}>
          Generate
        </button>
      </div>
      <div className="mt-4">
        <div className="text-lg">
          Random Number:{" "}
          <div className="flex items-center space-x-2">
            <pre className="py-1.5 px-3 text-4xl bg-app w-fit rounded-md">
              {formatNumber(+randomNumber)}
            </pre>
            {randomNumber > "0" && (
              <DocumentDuplicateIcon
                className="w-10 h-10 p-2 transition-all duration-200 ease-in-out rounded-full cursor-pointer hover:bg-slate-900 active:w-9 active:h-9"
                onClick={() => copyToClipboard(randomNumber)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomNumber;
