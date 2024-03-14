import Image from 'next/image'
import Check from '../../public/assets/check.svg'

const Pricing = () => {
  return (
    <div className='py-[48px] lg:py-[60px]'>
      <h1 className='text-[#172026] text-[24px] text-center font-medium lg:text-[42px]'>Flexible plans for you</h1>
      <p className='pt-[15px] pb-[40px] text-center text-[#36485c] lg:text-[18px]'>No hidden fees!</p>

      <div className='flex flex-col gap-y-6 gap-x-6 lg:flex-row'>
        <div className='w-full bg-[#f5f4ff] rounded-[8px] p-6 flex flex-col lg:justify-between'>
          <div>
            <h3 className='font-medium text-[#432beb] text-[18px] lg:text-xl'>Free Trial</h3>
            <p className='pt-[12px] text-[#36485c] lg:text-[18px]'>Perfect for testing the waters</p>
            <h2 className='pt-4 text-2xl font-medium lg:text-[32px]'>0$<span className='text-[#5f7896]'>/mo</span></h2>

            <ul className='flex flex-col gap-y-2 pt-4 text-[#5f7896]'>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image priority alt='check' src={Check}/>
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image priority alt='check' src={Check}/>
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image priority alt='check' src={Check}/>
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>

          <button className='mt-[16px] rounded-[4px] bg-white py-[14px] px-[30px] text-[#432beb] font-medium'>Start Trial</button>
        </div>

        <div className='w-full bg-[#432beb] rounded-[8px] p-6 flex flex-col'>
          <div>
            <h3 className='font-medium text-white text-[18px] lg:text-xl'>Business</h3>
            <p className='pt-[12px] text-[#f4f8fa] lg:text-[18px]'>Perfect for small business</p>
            <h2 className='pt-4 text-2xl font-medium text-white lg:text-[32px]'>$500<span className='text-[#f4f8fa]'>/mo</span></h2>

            <ul className='flex flex-col gap-y-2 pt-4 text-[#f4f8fa]'>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image priority alt='check' src={Check}/>
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image priority alt='check' src={Check}/>
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image priority alt='check' src={Check}/>
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image priority alt='check' src={Check}/>
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image priority alt='check' src={Check}/>
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>

          <button className='mt-[16px] rounded-[4px] bg-white py-[14px] px-[30px] text-[#432beb] font-medium'>Start Trial</button>
        </div>

        <div className='w-full bg-[#f5f4ff] rounded-[8px] p-6 flex flex-col lg:justify-between'>
          <div>
            <h3 className='font-medium text-[#432beb] text-[18px] lg:text-xl'>Enterprise</h3>
            <p className='pt-[12px] text-[#36485c] lg:text-[18px]'>Perfect for big companies</p>
            <h2 className='pt-4 text-2xl font-medium lg:text-[32px]'>Custom</h2>

            <ul className='flex flex-col gap-y-2 pt-4 text-[#5f7896]'>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image priority alt='check' src={Check}/>
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image priority alt='check' src={Check}/>
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image priority alt='check' src={Check}/>
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>

          <button className='mt-[16px] rounded-[4px] bg-white py-[14px] px-[30px] text-[#432beb] font-medium'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
