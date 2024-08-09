 import { Button, Card, CardBody, CardHeader, Image, Input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

 const login = () => {

   return (
     <div className='w-full h-screen flex justify-center items-center bg-slate-50'>
      <Card>
        <CardHeader className='p-0 m-0 border'>
        <Image
          height={100}
          width={350}
          alt="Sawaricare Nepal"
          src="logo.png"
          style={{ borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }}
        />
        </CardHeader>
      <CardBody className='gap-3'>
        <Input      
          type="email"
          label="Email"         
        />
        <Input
          label="Password"         
          type='password'        
        />
     <Button className='bg-slate-800 text-white font-bold uppercase'>
        Login
    </Button>
    </CardBody>
        <p className='m-auto pb-5 font-light'>Don't have account yet? <Link href="/sawaricarenepal/signup" > <strong>Sign Up</strong></Link> Instead</p>
    </Card>
     </div>
   )
 }
 
 export default login
 