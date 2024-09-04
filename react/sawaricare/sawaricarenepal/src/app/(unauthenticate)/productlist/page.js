'use client';
import AdminSidebar from '@/components/(authenticate)/adminsidebar/page';
import Sidebar from '@/components/(authenticate)/sidebar/page';
import { addToWishlist, addToCartItems } from '@/redux/reducerSlice/productSlice';
import { Card, CardBody, CardFooter, Divider, Image, Tooltip } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const Product = () => {
    const dispatch = useDispatch();
    const [productList, setProductList] = useState([]);

    const fetchProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProductList(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Group products by category
    const groupedItems = productList.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    return (
        <div className="flex gap-2 p-2">
            {/* Admin Sidebar */}
            <div className="flex-shrink-0 w-64">
                <AdminSidebar />
            </div>

            {/* Product List */}
            <div className="flex-grow m-8">
                {Object.entries(groupedItems).map(([category, items], index) => (
                    <div key={index} className="mb-6">
                        <h2 className="text-2xl font-bold mb-2">{category}</h2>
                        <div className="flex overflow-x-auto flex-wrap gap-4">
                            {items.map((item) => (
                                <Card key={item.id} className="w-[250px] flex-shrink-0 h-[350px]" shadow="md">
                                    <CardBody className="relative h-[250px] overflow-hidden">
                                        {/* Add to Cart Icon (Left) */}
                                        <div className="absolute left-2 top-2 z-50">
                                            <Tooltip content="Add to Cart" placement="top">
                                                <div
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        dispatch(addToCartItems({ ...item, quantity: 1 }));
                                                    }}
                                                    className="cursor-pointer"
                                                >
                                                    <FaShoppingCart className="text-gray-500 hover:text-blue-500" />
                                                </div>
                                            </Tooltip>
                                        </div>
                                    
                                        {/* Wishlist Icon (Right) */}
                                        <div className="absolute right-2 top-2 z-50">
                                            <Tooltip content="Add to Wishlist" placement="top">
                                                <div
                                                    onClick={(event) => {
                                                        event.stopPropagation(); 
                                                        dispatch(addToWishlist(item));
                                                    }}
                                                    className="cursor-pointer"
                                                >
                                                    <FaRegHeart className="text-gray-500 hover:text-red-500" />
                                                </div>
                                            </Tooltip>
                                        </div>

                                        <Image
                                            height="100%"
                                            width="100%"
                                            src={item.image} 
                                            alt={item.title}   
                                            className="object-cover" 
                                        />
                                    </CardBody>
                                    <Divider />
                                    <CardFooter className="flex justify-between">
                                        <b>{item.title}</b>  
                                        <p>NRP: {item.price}</p>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Sidebar */}
            <div className="flex-shrink-0 w-64">
                <Sidebar />
            </div>
        </div>
    );
};

export default Product;
