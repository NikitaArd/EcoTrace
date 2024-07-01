import Bike from "../assets/Bike.svg";

import { RadioGroup, Progress, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import QuizOption from "../components/QuizOption";

import questions from "../quiz.js";

import { useState } from "react";


export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const questionAmount = questions.length;

  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [answers, setAnswers] = useState([]);

  function submitQuestion(){
    setAnswers(prevAnswers => {
      return [...prevAnswers, currentAnswer];
    });

    setCurrentQuestion(questions.filter(question => question.id === answers.length + 2)[0]);
  }
  

  return (
    <div className="flex w-screen h-screen bg-transparent">
      <section className="m-auto h-fit w-fit p-28 pt-12 border-2 border-stone-200 rounded-sm shadow-xl">
        <div className="mt-3 mb-20">
          <p className="my-2 font-semibold">{currentQuestion.id} / {questionAmount}</p>
          <Progress colorScheme="green" size="sm" value={currentQuestion.id * questionAmount} mt="0" />
        </div>

        <h1 className="text-3xl font-bold mx-4 my-5">
          {currentQuestion.question}
        </h1>

        <RadioGroup display="block" name="option">
          <ul className="mt-7">
            {currentQuestion.options.map((option, id) => {
              return (
                <QuizOption key={id} value={option.value} setAnswer={setCurrentAnswer}>{option.text}</QuizOption>
              );
            })}
          </ul>
        </RadioGroup>

        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="green"
          variant="solid"
          mt="8"
          ml="70%"
          onClick={submitQuestion}
        >
          Submit
        </Button>
      </section>
      <img class="absolute max-h-56 ml-32 bottom-0 right-72" src={Bike} />
    </div>
  );
}
