'use client'
import { changeBackgroundColor, changeShape, increaseSize, decreaseSize, moveRight, moveDown, moveUp, moveLeft } from '@/redux/reducerSlice/boxSlice'
import { Button } from '@nextui-org/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
    const dispatch = useDispatch()
    const { width, marginLeft, height,  borderRadius, backgroundColor, marginTop } = useSelector((state) => state.box)
    const area = borderRadius ? Math.PI * (width / 2) ** 2 : width * height
    const handleChange = (e) => {
        dispatch(changeBackgroundColor(e.target.value))
    }
    useEffect(()=>{
        document.body.addEventListener('keydown', (e)=>{
            switch(e.key){
                case 'ArrowUp':
                    dispatch(moveUp());
                    break;
                    case 'ArrowDown':
                        dispatch(moveDown())
                        break;
                        case 'ArrowLeft':
                            dispatch(moveLeft())
                            break;
                            case 'ArrowRight':
                                dispatch(moveRight())
                                break;                                
            }
        })
    },[])

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
                <Button onClick={() => dispatch(changeShape())}>Change Shape</Button>
                <Button onClick={() => dispatch(increaseSize())}>Increase Width</Button>
                <Button onClick={() => dispatch(decreaseSize())}>Decrease Width</Button>
            </div>            
        </div>
    )
}

export default Box
