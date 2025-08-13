
"use client";

import car_bg from '../assets/modern_car_bg.png';
import title from '../assets/olympus_title.png';

import {zodResolver} from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { LoginSchema } from '@/schema/schema';
import type {LoginSchemaType} from '@/schema/schema'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"


function Login() {

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
    defaultValues: {
      email: '',
      password: '',
    },
  });
 
  const onSubmit = (data: LoginSchemaType) => {
    console.log("Form Data:", data);
    
  }
  return (
    <>
      <div className="relative bg-cover bg-center w-full h-screen flex flex-row items-center justify-center gap-10" style={{ backgroundImage: `url(${car_bg})` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className='flex flex-col justify-center gap-4 relative z-10 bg-[#1E1E1E] p-10 rounded-[16px] w-fit'>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-white text-5xl font-bold uppercase font-[moderniz]'>Login to</h2>
            <h2 className='text-white text-7xl font-bold uppercase font-[moderniz]'>Olympus</h2>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col items-center justify-center gap-4'>
            <FormField control={form.control}
              name="email"
              render = {({ field }) => (
                <FormItem>
                  
                  <FormControl>
                    <Input {...field} className='p-4 rounded-lg text-black w-xs bg-white' type="email" placeholder="Enter your Email" />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}/>

              <FormField control={form.control}
              name="password"
              render = {({ field }) => (
                <FormItem>
                  
                  <FormControl>
                    <Input {...field} className='p-4 rounded-lg text-black w-xs bg-white' type="password" placeholder="Enter your Password" />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}/>

              <Button type="submit"  className='min-w-3xs mt-4 bg-white text-black p-2 rounded-lg hover:bg-[#e2e5de] hover:cursor-pointer '>Login</Button>

            </form>

          </Form>
          
        </div>
        <img src={title} width="700" height="700" alt="Olympus Title" className='ml-24 mt-48 relative z-10'/>
      </div>
    </>
  )
}

export default Login
