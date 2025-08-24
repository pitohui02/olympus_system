import car_bg from '../assets/modern_car_bg.png';
import title from '../assets/title.svg';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import {zodResolver} from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

import { RegisterSchema } from '@/schema/schema';
import type {RegisterSchemaType} from '@/schema/schema'

function Registration() {

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange",
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
  });
   
    const onSubmit = (data: RegisterSchemaType) => {
      console.log("Form Data:", data);
      
    }
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

    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-4"
      >
        {/* First Name */}
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="p-4 rounded-lg text-black w-xs bg-white"
                  type="text"
                  placeholder="Enter your First Name:"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Last Name */}
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="p-4 rounded-lg text-black w-xs bg-white"
                  type="text"
                  placeholder="Enter your Last Name:"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="p-4 rounded-lg text-black w-xs bg-white"
                  type="email"
                  placeholder="Enter your Email:"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="p-4 rounded-lg text-black w-xs bg-white"
                  type="password"
                  placeholder="Enter your Password:"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="p-4 rounded-lg text-black w-xs bg-white"
                  type="password"
                  placeholder="Confirm your Password:"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="min-w-3xs mt-4 bg-white text-black p-2 rounded-lg hover:bg-[#e2e5de] hover:cursor-pointer"
        >
          Register
        </Button>
      </form>
    </Form>


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

export default Registration;
