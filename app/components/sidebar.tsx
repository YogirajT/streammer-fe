"use client";
import { faPause, faPlay, faRefresh, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAppContext } from "../contexts/app-provider";
import clsx from "clsx";

function SideBar() {

  const { state } = useAppContext();

  return <div id="drawer-navigation" className={clsx("flex-shrink-0 top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800", state.sidebarOpen && "transform-none")} aria-labelledby="drawer-navigation-label">
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        <li>
          <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <FontAwesomeIcon icon={faPlay} />
            <span className="flex-1 ml-3 whitespace-nowrap">Start Stream</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <FontAwesomeIcon icon={faPause} />
            <span className="flex-1 ml-3 whitespace-nowrap">Pause</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <FontAwesomeIcon icon={faRefresh} />
            <span className="flex-1 ml-3 whitespace-nowrap">Restart</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
}


export default SideBar