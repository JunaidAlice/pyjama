// import React from "react";

const Roadmap = () => {
  const roadMapCards = [
    {
      id: "Card1",
      title: "01",
      Heading: "Phase 1: Concept & Development",
      p1: "Idea inception and team formation",
      p2: "Initial game design and mechanics planning",
      p3: "Creation of digital pet assets and animations",
    },
    {
      id: "Card2",
      title: "02",
      Heading: "Phase 2: Presale & Airdrop",
      p1: "Launch the presale in three phases",
      p2: "Implement the airdrop program",
      p3: "Commence initial marketing and community building",
      p4: "Listing on CoinMarketCap and CoinGecko",
    },
    {
      id: "Card3",
      title: "03",
      Heading: " Phase 3: Smart Contract Development  Audit",
      p1: "Develop and audit the PyjamaCoin smart contract",
      p2: "Deploy the smart contract on the Solana blockchain",
    },
    {
      id: "Card4",
      title: "04",
      Heading: " Phase 4: Game Launch and Introduction",
      p1: "Officially launch the game following the Raydium listing",
      p2: "Integrate an NFT marketplace for accessories",
    },
  ];

  return (
    <div className="p-4 bg-[#312965] bg-opacity-95 text-white  ">
      <h1 className=" text-3xl  flex justify-center text-center font-acme ">
        Our Roadmap
      </h1>
      <div className="md:grid grid-cols-2 flex flex-col pt-6 ">
        {roadMapCards.map((t, i) => (
          <div key={i} className=" pt-4 md:w-[70%] w-[80%] md:ml-24 ml-11 font-acme">
            <h1 className="p-2 rounded border w-fit relative ml-1 border-[#787878] bg-slate-400 bg-opacity-30">
              {t.title}
              <span
                className="absolute rounded-full bg-slate-400 bg-opacity-35 p-2
         left-2 top-8 border border-[#787878]"
              ></span>
            </h1>
            <div className="md:h-9 h-5 w-0 ml-5 border-2 border-[#787878]   rounded-full"></div>
            <div className="border border-[#787878]  rounded-3xl flex flex-col p-4 bg-[url('C:\Users\junaidAly\Desktop\pyjama\src\assets\bgstuf\background2.svg')] bg-no-repeat bg-cover">
              <h1>{t.Heading}</h1>
              <ul className=" space-y-2">
                <li className="list-disc list-inside">{t.p1}</li>
                <li className="list-disc list-inside">{t.p2}</li>
                {t.p3 && <li className="list-disc list-inside"> {t.p3}</li>}
                {t.p4 && <li className="list-disc list-inside">{t.p4}</li>}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
