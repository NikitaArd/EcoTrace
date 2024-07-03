import BoxMoving from "../assets/Box-moving-2.svg";

import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div class="h-screen flex items-center justify-center">
      <section class="text-center h-fit">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-green-600 md:text-5xl lg:text-6xl dark:text-white">
          Your Path to a <span class="text-green-400">Greener</span> Future.
        </h1>
        <div class="m-16 justify-start px-4 flex">
          <div>
            <Link to="quiz">
              <button
                type="button"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-6 py-3 me-6 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Start quiz !
              </button>
            </Link>
          </div>

          <div>
            <Link to="learn-more">
              <button
                type="button"
                class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-6 py-3 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
              >
                Learn more
              </button>
            </Link>
          </div>
        </div>
        <img
          src={BoxMoving}
          class="absolute max-w-80 bottom-0 right-52"
        />
      </section>
    </div>
  );
}
