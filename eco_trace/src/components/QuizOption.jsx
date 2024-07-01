import { Radio } from "@chakra-ui/react";


export default function QuizOption({ value, children, setAnswer }) {
  return (
    <li className="mx-7 my-3" onClick={() => setAnswer(value)}>
      <Radio value={value} colorScheme="green">
        <span className="text-xl font-normal">{children}</span>
      </Radio>
    </li>
  );
}
