
import car_bg from '../assets/modern_car_bg.png';
import title from '../assets/title.svg';

function Login() {
 

  return (
    <>
      <div className="bg-cover bg-center w-full h-screen flex flex-row items-center justify-center gap-10" style={{ backgroundImage: `url(${car_bg})` }}>
        <div className='bg-[#1E1E1E] p-4 rounded-lg w-fit'>
          <h2 className='text-white font-bold uppercase'>Login to Olympus</h2>
        </div>

        <img src={title} alt="Olympus Title" className='ml-24 mt-48'/>


      </div>
    </>
  )
}

export default Login
