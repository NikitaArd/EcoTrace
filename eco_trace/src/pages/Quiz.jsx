import Bike from "../assets/Bike.svg";

import { RadioGroup, Progress, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import QuizOption from "../components/QuizOption";

export default function Quiz() {
  const currentQuestion = 3;

  return (
    <div className="flex w-screen h-screen bg-transparent">
      <section className="m-auto h-fit w-fit p-28 pt-12 border-2 border-stone-200 rounded-sm shadow-xl">
        <div className="mt-3 mb-20">
          <p className="my-2 font-semibold">{currentQuestion} / 10</p>
          <Progress
            colorScheme="green"
            size="sm"
            value={currentQuestion * 10}
            mt="0"
          />
        </div>

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

        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="green"
          variant="solid"
					mt="8"
					ml="70%"
        >
          Submit
        </Button>
      </section>
      <img class="absolute max-h-56 ml-32 bottom-0 right-72" src={Bike} />
    </div>
  );
}
