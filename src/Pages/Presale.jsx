import card from "../assets/bgstuf/card.svg";
import Happy from "../assets/bgstuf/happy.svg";
import PresaleStep2 from "./PresaleStep2";

const Presale = () => {
  const cards = [
    { num: 1, title: " Choose Your Pet" },
    { num: 2, title: " Name Your Pet" },
    { num: 3, title: " Name Your Pet" },
    { num: 4, title: " Customise Pajama" },
  ];//Changing
  return (
    <div>
      <div className="bg-[#312965] bg-opacity-95 p-4 flex items-center justify-center font-acme">
        
        <div className="rounded-3xl  bg-[url('C:\Users\junaidAly\Desktop\pyjama\src\assets\bgstuf\background.svg')] bg-no-repeat bg-cover  w-[100%]">
          <div className=" bg-white bg-opacity-15 rounded-3xl border border-[#787878]">
            <div className="w-full bg-[url('C:\Users\junaidAly\Desktop\pyjama\src\assets\bgstuf\background.svg')] bg-no-repeat bg-cover text-white rounded-3xl ">
              <h1 className="flex justify-center items-center p-2 text-center text-3xl">
                How to Participate in the PyjamaCoin Presale Using Phantom
                Wallet
              </h1>
              <div className=" md:flex md: justify-center md:items-center lg: gap-12 ">
                <div className="grid grid-cols-2 md:grid md:grid-cols-2 p-2 md:gap-6 gap-2">
                  {cards.map((t, i) => (
                    <div
                      className="border border-[#787878] flex flex-col justify-center items-center p-2 pb-0 bg-[#832A86] bg-opacity-40 rounded-3xl overflow-hidden md:space-y-4"
                      key={i}
                    >
                      <h1 >
                        {" "}
                        {t.num}.
                        <span>{t.title}</span>
                      </h1>
                      <img src={card} alt="" />
                    </div>
                  ))}
                </div>
                <div className=" flex justify-center items-center">
                  <img src={Happy} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
<PresaleStep2/>
    </div>
  );
};

export default Presale;
