import { Button, Card, CardBody, CardFooter, CardHeader, Input, Textarea } from '@nextui-org/react'
import React from 'react'
const Brand = () => {
    return (
      <div className="w-full h-full p-4">
      <Card>
        <CardHeader className="p-4 border-b">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-lg font-extrabold">Brand Details</h3>
          </div>
        </CardHeader>

        <CardBody className="gap-4 p-4">
          <div>
            <form className="w-full md:w-1/2">
              <Input
                type="text"
                label="Brand Name"               
              />
              <Textarea
                type="text"
                label="Brand Description"               
                className="mt-4"
              />
               <Input
                type="file"
                label="Choose File"                
              />
            </form>
          </div>
        </CardBody>
        
        <CardFooter className="p-4">
          <Button className="bg-slate-800 text-white uppercase">
            Add Brand
          </Button>
        </CardFooter>
      </Card>
    </div>
    );
  };
  export default Brand;