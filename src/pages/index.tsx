import { getOptionsForVote } from "@/utils/getRandomPokemon";
import { trpc } from "@/utils/trpc";
import { useMemo } from "react";

//https://youtu.be/PKy2lYEnhgs?t=2330

export default function Home(){

  const [first, second] = useMemo(() => getOptionsForVote(), []);

  const firstPokemon = trpc.useQuery(["get-pokemon-by-id", {id: first}]);
  console.log(firstPokemon.data);


  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Pokemon is rounder?</div>
      <div className="p-2" />
      <div className="border rounded p-8 flex items-center justify-between max-w-2xl ">
        <div className="w-16 h-16 bg-red-800">{first}</div>
        <div className="p-8">Vs</div>
        <div className="w-16 h-16 bg-red-800">{second}</div>
      </div>
    </div>
  );
}