import Happy2 from "../assets/bgstuf/Happy2.svg";
const PresaleStep2 = () => {
  const Cards = [
    {
      title: "The Perfect Blend of Fun and Value",
      p: "Enjoy endless fun while earning coins that hold real value. Join us and start your adventure now!",
    },
    {
      title: "The Perfect Blend of Fun and Value",
      p: "Enjoy endless fun while earning coins that hold real value. Join us and start your adventure now!",
    },
    {
      title: "The Perfect Blend of Fun and Value",
      p: "Enjoy endless fun while earning coins that hold real value. Join us and start your adventure now!",
    },
    {
      title: "The Perfect Blend of Fun and Value",
      p: "Enjoy endless fun while earning coins that hold real value. Join us and start your adventure now!",
    },
  ];
  return (
    <div>
      <div className="p-4 bg-[#312965] bg-opacity-95 text-white font-acme ">
        <div className="flex justify-center items-center flex-col p-8 bg-[url('C:\Users\junaidAly\Desktop\pyjama\src\assets\bgstuf\background2.svg')] bg-no-repeat bg-cover rounded-[70px] ">
          <h1 className="text-2xl">Play Earn Thrive Pyjama Coin</h1>
          <p>
            Unlock the Future of Gaming and Crypto with Pyjama Coin. Step into a
            world where your favorite childhood game meets the cutting-edge
            technology of cryptocurrency. Discover the unique benefits of Pyjama
            Coin today!
          </p>
          <div className=" mt-4 flex flex-col  items-center md:grid grid-cols-2 gap-4  ">
            {Cards.map((t, i) => (
              <div
                key={i}
                className="flex flex-col rounded-3xl border border-[#787878] w-[60%] justify-center items-center mt-4 md:ml-16 p-2 cards backdrop-blur-md "
              >
                <img src={Happy2} alt="Happy" />
                <h1 className="text-3xl">{t.title}</h1>
                <p className="text-start">{t.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresaleStep2;
