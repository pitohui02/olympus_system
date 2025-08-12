import car_bg from '../assets/modern_car_bg.png';
import title from '../assets/title.svg';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function UserRegistration() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-fixed bg-cover bg-center flex flex-row items-center justify-center gap-10"
      style={{
        backgroundImage: `url(${car_bg})`,
      }}
    >
    <div className='flex flex-col justify-center gap-4 relative z-10 bg-[#1E1E1E] p-10 rounded-[16px] w-fit'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-white text-4xl font-bold uppercase font-[moderniz]'>Register an</h2>
          <h2 className='text-white text-6xl font-bold uppercase font-[moderniz]'>account</h2>
        </div>

        <div className='flex flex-col items-center justify-center gap-4'>
            <Input className='p-4 rounded-lg text-white w-xs' type="text" placeholder="Enter your Name" />
            <Input className='p-4 rounded-lg text-white w-xs' type="email" placeholder="Enter your Email" />
            <Input className='p-4 rounded-lg text-white w-xs' type="password" placeholder="Enter your Password" />
            <Input className='p-4 rounded-lg text-white w-xs' type="password" placeholder="Re-enter your Password" />

            <Button className='min-w-3xs mt-4 bg-white text-black p-2 rounded-lg hover:bg-[#e2e5de] hover:cursor-pointer '>Register</Button>
        </div>

      <div className="text-white text-sm mt-2 text-center">
        Already have an account?{" "}
        <a href="/login" className="underline hover:text-gray-300">
          Login here
        </a>
      </div>

    </div>
      <img src={title} alt="Olympus Title" className="ml-24 mt-48" />
    </div>
  );
}

export default UserRegistration;
