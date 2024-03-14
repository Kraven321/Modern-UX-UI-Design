import Image from 'next/image'
import Feature1 from '../../public/assets/feature-1.svg'
import Feature2 from '../../public/assets/feature-2.svg'
import Feature3 from '../../public/assets/feature-3.svg'
import Check from '../../public/assets/check.svg'
import Bluebutton from '../../public/assets/blue-button.svg'
import Greenbutton from '../../public/assets/green-button.svg'
import Pinkbutton from '../../public/assets/pink-button.svg'
const Features = () => {
  return (
    <div className='flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]'>
      <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
        <Image src={Feature1} priority className='hidden w-1/2 sm:block' alt='feature 1 desktop'/>
        <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
          <h3 className='text-[#0085ff] font-medium lg:text-[18px]'>Sales Monitoring</h3>
          <h1 className='pt-[12px] text-[24px] font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]'>Simplify your sales monitoring</h1>
          <Image alt='feature1' src={Feature1} priority className='pt-[24px] sm:hidden'/>
          <p className='py-[24px] text-[#36485c] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing. Get a birds eye view
            with our customizable dashboard.
          </p>

          <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
            <li className='flex items-center gap-x-2 text-[#36485c]'>
              <span><Image alt='check' src={Check} priority /></span>
              Lorem ipsum dolor sit amet
            </li>
            <li className='flex items-center gap-x-2 text-[#36485c]'>
              <span><Image alt='check' src={Check} priority /></span>
              Lorem ipsum dolor sit amet
            </li>
            <li className='flex items-center gap-x-2 text-[#36485c]'>
              <span><Image alt='check' src={Check} priority /></span>
              Lorem ipsum dolor sit amet
            </li>
          </ul>

          <p className='flex items gap-x-2 pt-[24px] font-medium text-[#0085ff] lg:text-[18px]'>
            Learn More <span><Image alt='arrow right' src={Bluebutton} priority/></span>
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-x-6 sm:flex-row'>
        <Image src={Feature2} priority className='hidden w-1/2 sm:block' alt='feature 1 desktop'/>
        <div className='sm:w-1/2 lg:py-[56px] lg:pl-[56px]'>
          <h3 className='text-[#00a424] font-medium lg:text-[18px]'>Customer Support</h3>
          <h1 className='pt-[12px] text-[24px] font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]'>Get in touch with your customers</h1>
          <Image alt='feature1' src={Feature2} priority className='pt-[24px] sm:hidden'/>
          <p className='py-[24px] text-[#36485c] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing. Get a birds eye view
            with our customizable dashboard.
          </p>

          <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
            <li className='flex items-center gap-x-2 text-[#36485c]'>
              <span><Image alt='check' src={Check} priority /></span>
              Lorem ipsum dolor sit amet
            </li>
            <li className='flex items-center gap-x-2 text-[#36485c]'>
              <span><Image alt='check' src={Check} priority /></span>
              Lorem ipsum dolor sit amet
            </li>
            <li className='flex items-center gap-x-2 text-[#36485c]'>
              <span><Image alt='check' src={Check} priority /></span>
              Lorem ipsum dolor sit amet
            </li>
          </ul>

          <p className='flex items gap-x-2 pt-[24px] font-medium text-[#00a424] lg:text-[18px]'>
            Learn More <span><Image alt='arrow right' src={Greenbutton} priority/></span>
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
        <Image src={Feature3} priority className='hidden w-1/2 sm:block' alt='feature 1 desktop'/>
        <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
          <h3 className='text-[#eb2b91] font-medium lg:text-[18px]'>Growth Monitoring</h3>
          <h1 className='pt-[12px] text-[24px] font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]'>Monitor your site new subscribers</h1>
          <Image alt='feature1' src={Feature3} priority className='pt-[24px] sm:hidden'/>
          <p className='py-[24px] text-[#36485c] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing. Get a birds eye view
            with our customizable dashboard.
          </p>

        <div className='flex w-full gap-x-[24px] '>
          <div className='w-1/2 flex flex-col gap-y-3'>
            <h3 className='font-medium text-[20px] text-[#172026]'>100+</h3>
            <p className='text-[#36485c] text-[16px]'>Lorem Ipsum dolor sit</p>
          </div>
          <div className='w-1/2 flex flex-col gap-y-3'>
            <h3 className='font-medium text-[20px] text-[#172026]'>800+</h3>
            <p className='text-[#36485c] text-[16px]'>Conse adipiscing elit</p>
          </div>
        </div>

          <p className='flex items gap-x-2 pt-[24px] font-medium text-[#eb2b91] lg:text-[18px]'>
            Learn More <span><Image alt='arrow right' src={Pinkbutton} priority/></span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features
