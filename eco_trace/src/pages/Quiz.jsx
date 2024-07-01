import Bike from "../assets/Bike.svg";

import { RadioGroup } from "@chakra-ui/react";

import QuizOption from "../components/QuizOption";

export default function Quiz() {
  return (
    <div className="flex w-screen h-screen bg-transparent">
      <section className="m-auto h-fit w-fit p-28 border-2 border-green-500 rounded-3xl shadow-xl">
        <h1 className="text-3xl font-bold mx-4 my-5">
          How often do you use a car?
        </h1>

        <RadioGroup display="block" name="option">
          <ul className="mt-7">
            <QuizOption value="a">Daily</QuizOption>

						<QuizOption value="b">A few times a week</QuizOption>

						<QuizOption value="c">Rarely</QuizOption>

						<QuizOption value="d">Never</QuizOption>
          </ul>
        </RadioGroup>
      </section>
      <img class="absolute max-h-56 ml-32 bottom-0 right-72" src={Bike} />
    </div>
  );
}
