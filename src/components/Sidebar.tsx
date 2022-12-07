import { sidebarOptions } from "@utils/mocks";
import classNames from "classnames";
import React from "react";
import { useStore } from "../utils/store";

type Props = {};

const Sidebar = (props: Props) => {
  const { view, setView } = useStore();

  return (
    <aside className="col-span-2 bg-app/75 p-4 rounded-md custom__sidebar shadow-md">
      <ul className="space-y-1">
        {sidebarOptions.map((option, index) => (
          <li
            key={index}
            className={classNames(
              "p-3 cursor-pointer rounded-md transition-200",
              view === option.identifier
                ? "bg-app/70 font-bold border-x-2 border-x-app-blue shadow"
                : "hover:bg-app/70"
            )}
            onClick={() => {
              setView(option.identifier);
            }}
          >
            <code className="capitalize">{option.title}</code>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
