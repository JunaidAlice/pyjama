import Chart from "react-apexcharts";
import pyjama from "../assets/bgstuf/Pyjama.svg";

const About = () => {
  return (
    <>
      <div className="p-4 bg-[#312965] bg-opacity-95 font-acme ">
        <div className="bg-[#401D6D] bg-opacity-70  rounded-3xl border border-[#787878] p-4 ">
          <div className="flex justify-center items-center flex-col w-full max-w-xs mx-auto md:max-w-md lg:max-w-lg text-white space-y-4  ">
            <h1 className=" text-3xl">Tokenomics</h1>
            <h1 className="">Total Supply</h1>
            <h1>Max Supply:1,000,000,000 PyjamaCoins</h1>
            <Chart
              className="flex justify-center items-center  flex-col  w-[100%]  md:w-[150%] "
              type="donut"
              width={300}              height={560}
              series={[4, 4, 20, 30, 7, 35]}
              options={
                
                
                
                
                {

                  plotOptions:{  pie:{
                    donut:{
                      size:'80%',
                    } }
                
                  },

                labels: [
                  "Listing",
                  "Marketing",
                  " Dev & Team",
                  "Gameplay Rewards",
                  "Airdrops",
                  "Presale",
                ],

                colors: [
                  "#1D4ED8",
                  "#10B981",
                  "#F59E0B",
                  "#EF4444",
                  "#aaa",
                  "#45F",
                ],
                legend: {
                  position: "bottom",
                  itemMargin: {
                    horizontal: 19,
                    vertical: 8,
                  },
                  horizontalAlign: "center",

                  fontSize: "14px",
                  labels: {
                    colors: [
                      "#ffff ",
                      "#ffff",
                      "#ffff",
                      "#ffff",
                      "#ffff",
                      "#ffff",
                    ],
                  },

                  title: {
                    show:false,
                    text: [""],
                  },
                  dataLabels: {
                    enabled: true,
                    style: {
                      colors: ["#ffffff"],
                    },
                  },
                  responsive: [
                    {
                      breakpoint: 640,
                      options: {
                        chart: {
                          width: 300,
                        },
                      },
                    },
                    {
                      breakpoint: 768,
                      options: {
                        chart: {
                          width: 400,
                        },
                      },
                    },
                    {
                      breakpoint: 1024,
                      options: {
                        chart: {
                          width: 500,
                        },
                      },
                    },
                  ],
                },
                responsive: [
                  {
                    legend: {
                      show: true,
                      fontSize: "16px",
                      itemMargin: {
                        horizontal: 15,
                        vertical: 10,
                      },
                      markers: {
                        width: 14,
                        height: 1,
                      },
                    },
                  },
                ],
              }}
            />{" "}
            <img
              src={pyjama}
              alt="Center Image"
              className="absolute w-52 h-80   md:w-50 md:h-70 lg:w-54 lg:h-80"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
