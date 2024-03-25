import AirdropInjective from "@/components/injective/airdrop-injective";
import NavBar from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-radial bg-gradiant-to-b from-gray-800 p-3 lg:px-20 lg:py-10">
      <NavBar />
      <AirdropInjective />
    </main>
  );
}
