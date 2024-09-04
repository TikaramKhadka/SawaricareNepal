'use client';
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartItems, removeFromWishlist } from '@/redux/reducerSlice/productSlice'; // Ensure correct import

export default function Sidebar() {
    const { wishlistItems, cartItems } = useSelector(state => state.product);
    const dispatch = useDispatch();

    return (
        <div className="w-full max-w-[260px] border-small px-1 py-2 mt-16 rounded-small border-default-200 dark:border-default-100">
            {/* Wishlist Section */}
            <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">Wishlist Items ({wishlistItems.length}):</h2>
                {wishlistItems.length > 0 ? (
                    wishlistItems.map((item, id) => (
                        <div className="flex items-center justify-between p-2 border-b border-gray-200" key={item.id}>
                            <span>{id + 1} - {item.title}</span>
                            <FaTrash
                                className="ml-2 cursor-pointer text-red-500"
                                onClick={() => dispatch(removeFromWishlist({ id: item.id }))}
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No Wishlist!!</p>
                )}
            </div>

            {/* Cart Section */}
            <div>
                <h2 className="text-lg font-bold mb-2">Cart Items ({cartItems.length}):</h2>
                {cartItems.length > 0 ? (
                    cartItems.map((item, id) => (
                        <div className="flex items-center justify-between p-2 border-b border-gray-200" key={item.id}>
                            <span>{id + 1} - {item.title} (Qty: {item.quantity})</span>
                            <FaTrash
                                className="ml-2 cursor-pointer text-red-500"
                                onClick={() => dispatch(removeFromCartItems({ id: item.id }))}
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No Cart Items!!</p>
                )}
            </div>
        </div>
    );
}
