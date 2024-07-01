import { Radio } from "@chakra-ui/react";


export default function QuizOption({ value, children }) {
  return (
    <li className="mx-7 my-3">
      <Radio value={value} colorScheme="green">
        <span className="text-xl font-normal">{children}</span>
      </Radio>
    </li>
  );
}
