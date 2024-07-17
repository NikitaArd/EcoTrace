import Plants from "../assets/Plants.svg";

import { RadioGroup, Progress, Button, Radio } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

import QuizOption from "../components/QuizOption";
import Total from "./Total.jsx";

import questions from "../quiz.js";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [currentAnswer, setCurrentAnswer] = useState(-1);
  const [emptyOption, setEmptyOption] = useState(false);
  const [total, setTotal] = useState(0);

  const questionAmount = questions.length;

  const navigate = useNavigate();

  useEffect(() => {
    if (parseInt(localStorage.getItem("total"))) {
      navigate("/total?passed=true");
    }
  });

  function submitQuestion() {
    if (questionAmount === currentQuestion.id) {
      localStorage.setItem("total", total);
      navigate("/total");
    }

    if (currentAnswer === -1) {
      setEmptyOption(true);
    } else {
      setTotal((prevTotal) => {
        return prevTotal + currentAnswer;
      });

      setCurrentQuestion(
        questions.filter(
          (question) => question.id === currentQuestion.id + 1
        )[0]
      );
      setCurrentAnswer(-1);
      setEmptyOption(false);
    }
  }

  return (
    <div className="flex w-screen h-screen bg-transparent">
      <section className="m-auto h-fit w-fit max-w-[50%] p-28 pt-12 border-2 relative border-stone-200 bg-stone-50 rounded-sm shadow-xl z-10">
        <button onClick={() => navigate("/")}>
          <ArrowBackIcon className="absolute top-8 left-8" color="gray.600" />
        </button>

        <div className="mt-3 mb-20">
          <p className="my-2 font-semibold">
            {!emptyOption && `${currentQuestion.id} / ${questionAmount}`}
            {emptyOption && "Answer can't by empty"}
          </p>
          <Progress
            colorScheme={emptyOption ? "red" : "green"}
            size="sm"
            value={currentQuestion.id * questionAmount}
            mt="0"
          />
        </div>

        <h1 className="text-3xl font-bold mx-4 my-5">
          {currentQuestion.question}
        </h1>

        <RadioGroup display="block" name="option">
          <ul className="mt-7">
            {currentQuestion.options.map((option, id) => {
              return (
                <QuizOption
                  key={currentQuestion.question + option.text}
                  value={option.value}
                  setAnswer={setCurrentAnswer}
                >
                  {option.text}
                </QuizOption>
              );
            })}
          </ul>
        </RadioGroup>

        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme={emptyOption ? "red" : "green"}
          variant="solid"
          mt="8"
          ml="70%"
          onClick={submitQuestion}
        >
          Submit
        </Button>
      </section>
      <img class="absolute max-h-56 ml-32 bottom-0 right-72 z-0" src={Plants} />
    </div>
  );
}
