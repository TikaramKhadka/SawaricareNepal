'use client'
import { changeBackgroundColor, changeShape, increaseSize, decreaseSize, moveRight, moveDown, moveUp, moveLeft } from '@/redux/reducerSlice/boxSlice'
import { Button } from '@nextui-org/react'
import React from 'react'
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
    const dispatch = useDispatch()
    const { width, marginLeft, height,  borderRadius, backgroundColor, marginTop } = useSelector((state) => state.box)
    const area = borderRadius ? Math.PI * (width / 2) ** 2 : width * height
    const handleChange = (e) => {
        dispatch(changeBackgroundColor(e.target.value))
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            {/* Fixed-size box */}
            <div
                style={{
                    position: 'relative', 
                    width: '300px', 
                    height: '300px', 
                    border: '2px solid #000', 
                    overflow: 'hidden', 
                    display: 'flex',
                    alignItems: 'top',
                    justifyContent: 'center'
                    
                }}
            >
                {/* Movable box */}
                <div
                    onClick={() => dispatch(changeShape())}
                    style={{
                        position: 'absolute',
                        marginLeft: marginLeft,
                        marginTop: marginTop,
                        backgroundColor: backgroundColor,
                        width: width,
                        height: height,
                        borderRadius: borderRadius
                    }}
                >
                </div>
            </div>          
            <input className='m-5 border' onChange={handleChange} placeholder="Enter color..." />        
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <Button onClick={() => dispatch(moveLeft())}><FaArrowLeft /></Button>              
                <Button onClick={() => dispatch(moveUp())}><FaArrowUp /></Button>
                <Button onClick={() => dispatch(moveDown())}><FaArrowDown /></Button>
                <Button onClick={() => dispatch(moveRight())}><FaArrowRight /></Button>
                <Button onClick={() => dispatch(changeShape())}>Change Shape</Button>
                <Button onClick={() => dispatch(increaseSize())}>Increase Width</Button>
                <Button onClick={() => dispatch(decreaseSize())}>Decrease Width</Button>
            </div>
        </div>
    )
}

export default Box
