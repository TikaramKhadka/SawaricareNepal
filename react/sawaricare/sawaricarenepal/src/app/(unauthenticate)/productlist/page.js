'use client';
import Sidebar from '@/components/(authenticate)/sidebar/page';
import { addToWishlist, addToCartItems } from '@/redux/reducerSlice/productSlice';
import { Card, CardBody, CardFooter, Divider, Image, Tooltip } from '@nextui-org/react';
import React from 'react';
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';  // Importing cart icon
import { useDispatch } from 'react-redux';

const Product = () => {
    const dispatch = useDispatch();

    // Combined List with Categories
    const items = [
        { id: 10, productName: 'Ilam Tea', price: 250, productImage: 'https://sewapoint.com/himalayan-herb-images/Tea-ilam-tea-high-quality-orthodox-leaf-tea-jar-200gm-300x300.jpg', category: 'Tea' },
        { id: 11, productName: 'Tokla Tea', price: 350, productImage: 'https://mahalmart.com.au/cdn/shop/products/tokla-chiya-mahal-mart.jpg?v=1680964731', category: 'Tea' },
        { id: 12, productName: 'Darjeeling Tea', price: 200, productImage: 'https://www.teamoods.com/wp-content/uploads/2020/12/PM-D2.jpg', category: 'Tea' },
        { id: 13, productName: 'Antu Tea', price: 400, productImage: 'https://www.shreeantu.com/wp-content/uploads/2020/06/M-P-500G-scaled.jpg', category: 'Tea' },
        { id: 110, productName: 'Pressure Grease', price: 1250, productImage: 'https://fujima.org.np/wp-content/uploads/2020/02/extreme-pressure-300x300.png', category: 'Magic Lubricant' },
        { id: 111, productName: 'Zoom HPT 15W40', price: 1350, productImage: 'https://fujima.org.np/wp-content/uploads/2020/02/Magic-ZOOM-HPT-4-ltr-300x300.png', category: 'Magic Lubricant' },
        { id: 112, productName: 'Shocker Oil', price: 2000, productImage: 'https://fujima.org.np/wp-content/uploads/2020/02/shocker-oil-magic-300x300.png', category: 'Magic Lubricant' },
        { id: 113, productName: 'Cool King', price: 1400, productImage: 'https://fujima.org.np/wp-content/uploads/2020/02/magic-coolking-300x300.png', category: 'Magic Lubricant' },
    ];

    const groupedItems = items.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <div className='flex ml-5'>
            <div className='flex-grow flex flex-wrap gap-3 pr-5'>
                {/* Render Categories */}
                {Object.entries(groupedItems).map(([category, items], index) => (
                    <div key={index} className='w-full mb-8'>
                        <h2 className='text-2xl font-bold mb-4'>{category}</h2>
                        <div className='flex flex-wrap gap-3'>
                            {items.map((item) => (
                                <Card key={item.id} className='w-[250px] h-[350px]' shadow='md'>
                                    <CardBody className="relative h-[250px] overflow-hidden">
                                        {/* Add to Cart Icon (Left) */}
                                        <div className="absolute left-4 top-2 z-50">
                                            <Tooltip content="Add to Cart" placement="top" className="z-50">
                                                <div
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        dispatch(addToCartItems({ ...item, quantity: 1 }));
                                                    }}
                                                    className="cursor-pointer"
                                                >
                                                    <FaShoppingCart className='text-gray-500 hover:text-blue-500' />
                                                </div>
                                            </Tooltip>
                                        </div>
                                    
                                        {/* Wishlist Icon (Right) */}
                                        <div className="absolute right-4 top-2 z-50">
                                            <Tooltip content="Add to Wishlist" placement="top" className="z-50">
                                                <div
                                                    onClick={(event) => {
                                                        event.stopPropagation(); 
                                                        dispatch(addToWishlist(item));
                                                    }}
                                                    className="cursor-pointer"
                                                >
                                                    <FaRegHeart className='text-gray-500 hover:text-red-500' />
                                                </div>
                                            </Tooltip>
                                        </div>

                                        <Image
                                            height="100%"
                                            width="100%"
                                            src={item.productImage}
                                            alt={item.productName}
                                            className="object-cover"  // Ensures the image covers the area while maintaining aspect ratio
                                        />
                                    </CardBody>
                                    <Divider />
                                    <CardFooter className="flex justify-between">
                                        <b>{item.productName}</b>
                                        <p>NRP: {item.price}</p>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>           
            <div className='flex-shrink-0 w-[400px] mt-12'>
                <Sidebar />
            </div>
        </div>
    );
};

export default Product;

