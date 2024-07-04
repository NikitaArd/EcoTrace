export default function QuizOption({ value, children, setAnswer }) {
  return (
    <li className="mx-7 my-3" onClick={() => setAnswer(value)}>
      <div>
        <label
          htmlFor={children}
          className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-green-500 has-[:checked]:ring-1 has-[:checked]:ring-green-500"
        >
          <p className="text-gray-700 text-base">{children}</p>



          <input
            type="radio"
            name="option"
            value={value}
            id={children}
            className="sr-only"
          />
        </label>
      </div>
    </li>
  );
}
