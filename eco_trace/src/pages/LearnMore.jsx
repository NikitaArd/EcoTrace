import Co2Impact from "../assets/co2-impact.svg";
import Bike from "../assets/Bike.svg";
import Plants from "../assets/Plants.svg";
import Video from "../assets/video/co2-impact.mp4";

import Footer from "../components/Footer";
// import LearnMoreHeader from "../components/LearnMoreHeader";
// import LearnMoreBlock from "../components/LearnMoreBlock";


export default function LearnMore() {
  return (
    <>
      {/* <LearnMoreHeader /> */}

      <section class="mb-20 mt-10">
        <video class="w-3/5 m-auto" controls>
          <source src={Video} type="video/mp4" />
          Looks like your browser does not support the video tag.
        </video>

        <p class="italic w-3/5 m-auto">
          *Video by{" "}
          <a
            href="https://www.youtube.com/@PlanetNutshell"
            target="blank"
            class="underline"
          >
            Planet Nutshell
          </a>
          .
        </p>
      </section>
{/* 
      <LearnMoreBlock>
        <img src={Co2Impact} class="max-h-80 mr-32" />
        <article class="h-fit m-auto">
          <h1 class="text-3xl font-semibold pb-6 pl-3">
            Impact of CO<sub>2</sub> on our life
          </h1>
          <p class="h-fit text-lg">
            CO<sub>2</sub> absorbs and emits infrared radiation trapping heat
            and this is the core reason for climate change. Extreme weather,
            food supply disruptions, and increased wildfires are other effects
            of climate change caused by high CO<sub>2</sub> and other greenhouse
            gases.
          </p>
        </article>
      </LearnMoreBlock>

      <LearnMoreBlock>
        <article class="h-fit m-auto">
          <h1 class="text-3xl font-semibold pb-6 pl-3">
            Sources of global CO<sub>2</sub> emissions
          </h1>
          <p class="h-fit text-lg">
            About 90 per cent of the world's carbon emissions comes from the
            burning of fossil fuels – mainly for electricity, heat and
            transport.
          </p>
          <p class="h-fit text-lg mt-4">
            In 2022, most of the world's fossil fuel carbon emissions came from
            coal (40 per cent), oil (32 per cent), natural gas (21 per cent),
            cement (5 per cent) and flaring and other smaller sources (2 per
            cent).
          </p>
        </article>

        <img src={Bike} class="max-h-80 ml-32" />
      </LearnMoreBlock>

      <LearnMoreBlock>
        <img src={Plants} class="max-h-72 mr-32" />

        <article class="h-fit m-auto">
          <h1 class="text-3xl font-semibold pb-6 pl-3">
            How can you reduce CO<sub>2</sub> emissions?
          </h1>
          <ul class="list-disc ml-3 h-fit text-lg">
            <li class="my-1">Tap into renewable energy sources</li>
            <li class="my-1">Plant a tree</li>
            <li class="my-1">Commit to sustainable mobility</li>
            <li class="my-1">Stop buying water in plastic</li>
          </ul>
        </article>
      </LearnMoreBlock> */}

      <Footer />
    </>
  );
}
