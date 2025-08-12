
import car_bg from '../assets/modern_car_bg.png';
import title from '../assets/olympus_title.png';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function Login() {
 

  return (
    <>
      <>
      <div className="relative bg-cover bg-center w-full h-screen flex flex-row items-center justify-center gap-10" style={{ backgroundImage: `url(${car_bg})` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className='flex flex-col justify-center gap-4 relative z-10 bg-[#1E1E1E] p-10 rounded-[16px] w-fit'>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-white text-5xl font-bold uppercase font-[moderniz]'>Login to</h2>
            <h2 className='text-white text-7xl font-bold uppercase font-[moderniz]'>Olympus</h2>
          </div>
          
          <div className='flex flex-col items-center justify-center gap-4'>
            <Input className='p-4 rounded-lg text-white w-xs' type="email" placeholder="Enter your Email" />
            <Input className='p-4 rounded-lg text-white w-xs' type="password" placeholder="Enter your Password" />

            <Button className='min-w-3xs mt-4 bg-white text-black p-2 rounded-lg hover:bg-[#e2e5de] hover:cursor-pointer '>Login</Button>
          </div>
          
          
        </div>
        <img src={title} width="700" height="700" alt="Olympus Title" className='ml-24 mt-48 relative z-10'/>
      </div>
    </>
    </>
  )
}

export default Login
