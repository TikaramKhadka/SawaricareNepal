'use client'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'

const Calculator = () => {
  const [output, setOutput] = useState('')

  const handleClick = (value) => {
    setOutput((prevOutput) => prevOutput + value)
  }

  const handleClear = () => {
    setOutput('')
  }

  const handleEvaluate = () => {
    try {
      setOutput(eval(output).toString())
    } catch {
      setOutput('Error')
    }
  }

  return (
    <div className='bg-black w-100 p-4 rounded-lg'>
      <div className='text-white text-right text-3xl p-2 mb-4'>{output}</div>
      <div className='grid grid-cols-4 gap-2 p-2'>
        <Button className='bg-gray-200' onClick={handleClear}>AC</Button>
        <Button className='bg-gray-200' onClick={() => handleClick('+/-')}>+/-</Button>
        <Button className='bg-gray-200' onClick={() => handleClick('%')}>%</Button>
        <Button className='bg-orange-500' onClick={() => handleClick('/')}>/</Button>

        <Button className='bg-gray-800 text-white' onClick={() => handleClick('7')}>7</Button>
        <Button className='bg-gray-800 text-white' onClick={() => handleClick('8')}>8</Button>
        <Button className='bg-gray-800 text-white' onClick={() => handleClick('9')}>9</Button>
        <Button className='bg-orange-500' onClick={() => handleClick('*')}>*</Button>

        <Button className='bg-gray-800 text-white' onClick={() => handleClick('4')}>4</Button>
        <Button className='bg-gray-800 text-white' onClick={() => handleClick('5')}>5</Button>
        <Button className='bg-gray-800 text-white' onClick={() => handleClick('6')}>6</Button>
        <Button className='bg-orange-500' onClick={() => handleClick('-')}>-</Button>

        <Button className='bg-gray-800 text-white' onClick={() => handleClick('1')}>1</Button>
        <Button className='bg-gray-800 text-white' onClick={() => handleClick('2')}>2</Button>
        <Button className='bg-gray-800 text-white' onClick={() => handleClick('3')}>3</Button>
        <Button className='bg-orange-500' onClick={() => handleClick('+')}>+</Button>

        <Button className='bg-gray-800 text-white col-span-2' onClick={() => handleClick('0')}>0</Button>
        <Button className='bg-gray-800 text-white' onClick={() => handleClick('.')}>.</Button>
        <Button className='bg-orange-500' onClick={handleEvaluate}>=</Button>
      </div>
    </div>
  )
}

export default Calculator