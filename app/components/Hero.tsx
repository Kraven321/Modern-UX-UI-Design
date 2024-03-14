import Image from 'next/image'
import BlurArrow from '../../public/assets/blue-button.svg'
import Gradient from '../../public/assets/Gradient.svg'
import HeroImage from '../../public/assets/Image.svg'
import Google from '../../public/assets/Google.svg'
import Slack from '../../public/assets/Slack.svg'
import TrusPilot from '../../public/assets/Trustpilot.svg'
import Cnn from '../../public/assets/CNN.svg'
import Cluth from '../../public/assets/Clutch.svg'
const Hero = () => {
  return (
    <div className="pt-4 lg:pt-10">
        <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">Start monitoring your <br /> website like a pro</h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">Get a birds eye view with our customizable dashboard. Stay on top of things Revamp <br /> your work process with our game-changing feature. Boost productivity and efficiency!</p>

        <div className="flex w-full pt-[32px] justify-center gap-x-6">
        <button className="bg-[#4328eb] py-4 px-6 w-1/2 text-white rounded-[4px] lg:w-fit">Try for free</button>
        <button className="w-1/2 text-[#4328eb] flex items-center justify-center gap-x-2 lg:w-fit">View Pricing <span><Image priority alt='arrow right' src={BlurArrow}/></span></button>
        </div>

        </div>

        <div className='relative flex h-full w-full justify-center'>
            <Image alt='gradient' priority src={Gradient} className='min-h-[500px] w-full object-cover lg:h-auto'/>
            
           <div className='absolute flex w-full flex-col items-center bottom-5'>
            <Image alt='hero image' priority src={HeroImage} className='-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]'/>

            <div className='flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20'>
              <p className='text-white text-center lg:text-[18px]'>Trusted  by these companies</p>

              <div className='grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5'>
                <Image alt='google' src= {Google}/>
                <Image alt='google' src= {Slack}/>
                <Image alt='google' src= {TrusPilot}/>
                <Image alt='google' src= {Cnn}/>
                <Image alt='google' src= {Cluth}/>
              </div>
            </div>
           </div>
        </div>
      
    </div>
  )
}

export default Hero
