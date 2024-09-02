import img1 from "../assets/bar/solana.png";
import img2 from "../assets/bar/coin.png";
import img3 from "../assets/bar/coinmart.png";
import img4 from "../assets/bar/jupitter.png";
import img5 from "../assets/bar/partner.png";
import img6 from "../assets/bar/phantom.png";

const Bar = () => {
  const barImages = [
    { title: img1 },
    { title: img2 },
    { title: img3 },
    { title: img4 },
    { title: img5 },
    { title: img6 },
  ];
  return (
    <div className="border border-[#787878] bg-[#1E0613] opacity-50 rounded-3xl flex gap-4 justify-center items-center lg:flex lg:justify-around overflow-hidden">
      {barImages.map((t, i) => (
        <img className=" " key={i} src={t.title} alt="images" />
      ))}
    </div>
  );
};

export default Bar;
