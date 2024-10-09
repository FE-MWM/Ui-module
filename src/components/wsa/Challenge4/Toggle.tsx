import { useDarkMode } from "./context/DarkModeContext";

export default function Toggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="w-screen h-screen flex flex-col items-center gap-4 pt-8 px-2 bg-white dark:bg-black">
        <h1 className="text-orange-400 dark:text-orange-500">
          Light/Dark Mode - Toggle Button
        </h1>

        <div
          className="relative w-24 h-12 cursor-pointer"
          onClick={toggleDarkMode}
        >
          <div className="absolute top-[2px] left-[2px] dark:left-[50px] w-11 h-11 bg-white rounded-full transition-all duration-300"></div>
          <div className="w-full h-full flex bg-green-500 dark:bg-rose-500 rounded-full shadow-md transition-colors duration-300">
            {darkMode ? (
              <div className="w-full h-full flex items-center ml-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </div>
            ) : (
              <div className="w-full h-full flex justify-end items-center mr-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        <article className="text-black dark:text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          optio ab porro magni in sunt ipsam, doloremque minima, itaque sapiente
          consequatur, repellat velit voluptatum accusantium aperiam. Nostrum
          sunt reprehenderit nemo!
        </article>
      </div>
    </div>
  );
}
