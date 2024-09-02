import logo from '../assets/navstuf/logo.svg'
import img1 from "../assets/hero section/twitter.svg";
import img2 from "../assets/hero section/tiktok.svg";
import img3 from "../assets/hero section/telegram.svg";
import img4 from "../assets/hero section/insta.svg";
import img5 from "../assets/hero section/facbook.svg";
const Footer = () => {
    const navlinks = [
        { path: "#home", title: "Home" },
        { path: "#about", title: "About Us" },
        { path: "#whitepaper", title: "Whitepaper" },
        { path: "#presale", title: "Presale" },
      ];
      const imgLinks = [
        { id: 1, title: img1 },
        { id: 2, title: img2 },
        { id: 3, title: img3 },
        { id: 4, title: img4 },
        { id: 5, title: img5 },
      ];
  return (
    <div className=' sm: grid grid-cols-1 md:grid md:grid-cols-1  border-t-[2px] p-6 font-acme text-white'>
        <div className='md:flex justify-center items-center md:ml-0 '>
            <img className='md:ml-10' src={logo} alt="" />
            <nav className='md:flex gap-4 flex-1 md:justify-center md:ml-0 mt-4'>
                {navlinks.map((t,i)=>(
                    <div className='' key={i}><a href={t.path}>{t.title}</a></div>
                ))}

            </nav>

        </div>
        <div className='hidden w-[100%] rounded-lg p-2 border border-[#787878] mt-4 md:flex md:justify-around md:items-center'>
            <div><p>&copy; 2024 Pyjama-coin. All Rights Reserved.</p></div>
            <div className='flex'>
                <div className='mr-2'>Terms of Service</div>
                <div className=' h-6 border flex justify-center items-center rounded-full '></div>
                <div className='ml-2'>Network status</div>
            </div>
            <div className="flex gap-2 ">
            {imgLinks.map((t, id) => (
              <a key={id} href={t.Path}>
                <img src={t.title} alt="" />
              </a>
            ))}
          </div>

        </div>
        <div className='mt-4 '>
            <p>Investing in cryptocurrencies, including Pyjama Coin, involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved. The value of cryptocurrencies can be highly volatile, and past performance is not indicative of future results. We strongly recommend consulting with a financial advisor before making any investment decisions. By using our platform, you acknowledge that you understand and accept these risks.

</p>
        </div>
        <div className='md:hidden w-[100%] rounded-lg p-2  mt-4 md:ml-12 space-y-8'>
          
            <div className='md:flex'>
                <div className='md:mr-2'>Terms of Service</div>
                <div className='  hidden md:h-7 md:border '></div>
                <div className='md:ml-2'>Network status</div>
            </div>
            <div className="flex gap-2 ">
            {imgLinks.map((t, id) => (
              <a key={id} href={t.Path}>
                <img src={t.title} alt="" />
              </a>
            ))}
          </div>
          <div><p>&copy; 2024 Pyjama-coin. All Rights Reserved.</p></div>

        </div>
      
    </div>
  )
}

export default Footer
