import React, { useState } from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'

const CartContents = () => {
    const [cartItems, setCartItems] = useState([
        {
            productId: 1,
            name: "T-shirt",
            size: "M",
            color: "Red",
            quantity: 1,
            price: 15,
            image: "https://picsum.photos/200?random=1",
        },
        {
            productId: 2,
            name: "Jeans",
            size: "L",
            color: "Blue",
            quantity: 1,
            price: 25,
            image: "https://picsum.photos/200?random=2",
        }
    ])

    const handleIncrease = (productId) => {
        setCartItems(cartItems.map(item => 
            item.productId === productId 
                ? {...item, quantity: item.quantity + 1} 
                : item
        ))
    }

    const handleDecrease = (productId) => {
        setCartItems(cartItems.map(item => 
            item.productId === productId && item.quantity > 1
                ? {...item, quantity: item.quantity - 1} 
                : item
        ))
    }

    const handleRemove = (productId) => {
        setCartItems(cartItems.filter(item => item.productId !== productId))
    }

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
    return (
        <div className="divide-y">
            {cartItems.length === 0 ? (
                <p className="py-4 text-center text-gray-500">Your cart is empty</p>
            ) : (
                <>
                    {cartItems.map((product) => (
                        <div key={product.productId} className='flex items-start justify-between py-4'>
                            <div className='flex items-start flex-1'>
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className='w-20 h-24 object-cover mr-4 rounded'
                                />
                                <div className="flex-1">
                                    <h3 className="font-medium">{product.name}</h3>
                                    <p className='text-sm text-gray-500'>
                                        Size: {product.size} | Color: {product.color}
                                    </p>
                                    <div className='flex items-center mt-2'>
                                        <button 
                                            onClick={() => handleDecrease(product.productId)}
                                            className='border rounded px-2 py-1 text-xl font-medium hover:bg-gray-100'
                                        >
                                            -
                                        </button>
                                        <span className='mx-4'>{product.quantity}</span>
                                        <button 
                                            onClick={() => handleIncrease(product.productId)}
                                            className='border rounded px-2 py-1 text-xl font-medium hover:bg-gray-100'
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <p className="font-medium">
                                    ${(product.price * product.quantity).toLocaleString()}
                                </p>
                                <button 
                                    onClick={() => handleRemove(product.productId)}
                                    className="hover:opacity-70"
                                    aria-label="Remove item"
                                >
                                    <RiDeleteBin3Line className="h-6 w-6 text-red-600"/>
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="py-4 border-t">
                        <div className="flex justify-between font-medium text-lg">
                            <span>Total:</span>
                            <span>${calculateTotal().toLocaleString()}</span>
                        </div>
                    </div>
                </>
            )}
        </div>
  )
}

export default CartContents