export default function LearnMoreHeader() {
    return (
      <section className="h-fit py-16">
        <h1 className="w-fit m-auto mb-4 text-5xl font-extrabold tracking-tigh text-stone-900">
          Learn more about{" "}
          <span class="text-red-600">
            CO<sub>2</sub>
          </span>
          emissions.
        </h1>
  
        <blockquote className="w-fit m-auto mt-16 mb-4 text-xl italic font-semibold text-gray-600 dark:text-white">
          <svg
            className="w-4 h-4 text-gray-400 dark:text-gray-600 mb-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p>"The creation of a thousand forests is in one acorn."</p>
        </blockquote>
  
        <figcaption className="flex items-center justify-center mt-0 space-x-3 rtl:space-x-reverse">
          <img
            className="w-6 h-6 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ralph_Waldo_Emerson_by_Josiah_Johnson_Hawes_1857.jpg/1024px-Ralph_Waldo_Emerson_by_Josiah_Johnson_Hawes_1857.jpg"
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite className="pe-3 font-medium text-gray-900 dark:text-white">
              Ralph Waldo Emerson
            </cite>
          </div>
        </figcaption>
      </section>
    );
  }
  