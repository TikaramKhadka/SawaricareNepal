import { Button, Card, CardBody, CardFooter, CardHeader, DatePicker, Image, Input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

 const signup = () => {

   return (
     <div className='w-full h-screen flex justify-center items-center bg-slate-50'>
      <Card>
        <CardHeader className='p-0 m-0 border'>
        <Image
          height={80}
          width={350}
          alt="Sawaricare Nepal"
          src="logo.png"
          style={{ borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }}
        />
        </CardHeader>
      <CardBody className='gap-3'>
      <Input      
          type="text"
          label="Fullname" 
          labelPlacement="outside"         
        />
       <DatePicker 
            label="Birth date" 
            labelPlacement="outside" 
       />
        <Input      
          type="email"
          label="Email"   
          labelPlacement="outside"       
        />
        <Input
          label="Password"         
          type='password'  
          labelPlacement="outside"       
        />
        <Input
          label="Confirm Password"         
          type='password'  
          labelPlacement="outside"       
        />       
       <Button className='bg-slate-800 mt-2 text-white font-bold uppercase'>
        Sign Up
    </Button>
    </CardBody>
    <CardFooter>      
        <p className='m-auto font-light'>Already have an account? <Link href="/login" > <strong>Login</strong></Link> Instead</p>
     </CardFooter>
    </Card>
     </div>
   )
 }
 
 export default signup