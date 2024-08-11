import { Card, CardBody, CardFooter, CardHeader, Input } from '@nextui-org/react'
import React from 'react'
const product = () => {
  return (
    <div className='w-full h-full'>
    <Card>
    <CardHeader className='p-0 m-0 border'>
    <div >
        <h3 className='p-3 font-extrabold'>Product Details</h3>
    </div>
    </CardHeader>
  <CardBody className='gap-3'>
  <Input  
      type="text"
      label="Product Name" 
      labelPlacement="outside"         
    /> 
   
</CardBody>
<CardFooter>      
<Button className='bg-slate-800 mt-2 text-white font-bold uppercase'>
    Add Product
</Button>
 </CardFooter>
</Card>
</div>
  )
}
export default product



