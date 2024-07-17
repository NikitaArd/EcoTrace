import { Text } from "@chakra-ui/react";

import { useMemo } from "react";

import { useLocation } from "react-router";

import get_fact from "../facts";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Total() {
  const total = localStorage.getItem("total");
  const [fact, color, status] = get_fact(total);

  const query = useQuery();

  const passed = Boolean(query.get("passed"));

  return (
    <div className="h-screen w-screen pt-64">
      {status && (
        <>
          <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
            Your estimated CO<sub>2</sub> trace is ~
            <Text color={color}>{total}</Text> kg.
          </h1>

          <h2 className="font-bold text-2xl w-1/2 m-auto my-12 underline">
            Did you know ?
          </h2>

          <div className="p-7 bg-white h-fit w-1/3 m-auto shadow-lg rounded-2xl -rotate-1">
            <p className="m-auto text-xl text-center">
              <span className="underline underline-offset-2">{total}</span> kg
              C2
              <sub>2</sub> is {fact}
            </p>
          </div>
        </>
      )}

      {!status && (
        <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
          {fact}
        </h1>
      )}

      {passed && (
        <p>
          Do you want to provide upadated data about your life-style ? Come and
          do it
        </p>
      )}
    </div>
  );
}
