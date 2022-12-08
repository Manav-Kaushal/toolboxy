import { useGlobalStore } from "@store/global";
import { sidebarOptions } from "@utils/mocks";
import classNames from "classnames";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  const { view, setView } = useGlobalStore();

  return (
    <aside className="col-span-3 p-4 rounded-md shadow-md bg-app/75 h-fit max-h-fit custom__sidebar">
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
