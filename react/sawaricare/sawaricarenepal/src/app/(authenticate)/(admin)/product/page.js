import { Button, Card, CardBody, CardFooter, CardHeader, Input, Textarea } from '@nextui-org/react';
import React from 'react';

const Product = () => {
  return (
    <div className="w-full h-full p-4">
      <Card>
        <CardHeader className="p-4 border-b">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-lg font-extrabold">Product Details</h3>
          </div>
        </CardHeader>
        <CardBody className="gap-4 p-4">
          <form className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                type="text"
                label="Product Name"               
              />
              <Input
                type="text"
                label="Category Name"               
              />
                <Input
                type="text"
                label="Sub Category Name"               
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <Input
                type="number"
                label="Unit Price"               
              /> 
              <Input
                type="number"
                label="Discount Price"               
              />
                <Input
                type="number"
                label="Quantity"               
              />
            </div>
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Textarea
              type="text"
              label="Product Description" 
              />       
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
             <Input
                type="file"
                label="Choose File"                
              />
              </div>
          </form>
        </CardBody>
        <CardFooter className="p-4">
          <Button className="bg-slate-800 text-white uppercase">
            Add Product
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Product;
