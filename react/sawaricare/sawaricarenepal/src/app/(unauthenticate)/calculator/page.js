'use client'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'

const Calculator = () => {
    const [output, setOutput] = useState('0')
    const [prevValue, setPrevValue] = useState(null)
    const [operation, setOperation] = useState(null)
    const [isNewEntry, setIsNewEntry] = useState(false)

    const buttons = [
        [{key: 'AC', className: 'bg-gray-300'},
        {key: '+/-', className: 'bg-gray-300'},
        {key: '%', className: 'bg-gray-300'},
        {key: '/', className: 'bg-orange-300'}],
        [{key: '7', className: 'bg-gray-300'},
        {key: '8', className: 'bg-gray-300'},
        {key: '9', className: 'bg-gray-300'},
        {key: '*', className: 'bg-orange-300'}],
        [{key: '4', className: 'bg-gray-300'},
        {key: '5', className: 'bg-gray-300'},
        {key: '6', className: 'bg-gray-300'},
        {key: '-', className: 'bg-orange-300'}],
        [{key: '1', className: 'bg-gray-300'},
        {key: '2', className: 'bg-gray-300'},
        {key: '3', className: 'bg-gray-300'},
        {key: '+', className: 'bg-orange-300'}],
        [{key: '0', className: 'bg-gray-300 col-span-2'},
        {key: '.', className: 'bg-gray-300'},
        {key: '=', className: 'bg-orange-300'},
        {key: 'x', className: 'bg-orange-300'}]
    ]

    const handleDigit = (key) => {     
        if (isNewEntry) {
            setOutput(key)
            setIsNewEntry(false)
        } else {
            setOutput(output === '0' ? key : output + key)
        }
    }

    const handleOperation = (key) => {
        if (operation && !isNewEntry) {
            const result = calculate(prevValue, output, operation)
            setOutput(String(result))
            setPrevValue(result)
        } else {
            setPrevValue(parseFloat(output))
        }
        setOperation(key)
        setIsNewEntry(true)
    }

    const handleEquals = () => {
        if (operation && prevValue !== null) {
            const result = calculate(prevValue, output, operation)
            setOutput(String(result))
            setPrevValue(null)
            setOperation(null)
            setIsNewEntry(true)
        }
    }

    const calculate = (prev, current, op) => {
        const currentNum = parseFloat(current)
        switch(op) {
            case '+': return prev + currentNum
            case '-': return prev - currentNum
            case '*': return prev * currentNum
            case '/': return prev / currentNum
            default: return currentNum
        }
    }

    const handleSpecial = (key) => {
        switch(key) {
            case 'AC':
                setOutput('0')
                setPrevValue(null)
                setOperation(null)
                break
            case '+/-':
                setOutput((parseFloat(output) * -1).toString())
                break
            case '%':
                setOutput((parseFloat(output) / 100).toString())
                break
                case 'x': 
                setOutput(output.length > 1 ? output.slice(0, -1) : '0')
                break
            default:
                break
        }
    }

    const handleChange = (key) => {
        if (!isNaN(key) || key === '.') {
            handleDigit(key)
        } else if (key === '=' || key === 'AC' || key === '+/-' || key === '%'  || key === 'x') {
            if (key === '=') {
                handleEquals()
            } else {
                handleSpecial(key)
            }
        } else {
            handleOperation(key)
        }
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='bg-black p-4 text-white border-4 border-gray-400 rounded-lg'>
                <div className='bg-gray-800 text-right text-2xl py-4 px-2 rounded-md mb-4'>{output}</div>
                {buttons.map((row, id) => (
                    <div key={id} className='m-2 flex justify-center'>
                        {row.map((val, idx) => (
                            <Button 
                                key={idx} 
                                onClick={() => handleChange(val.key)} 
                                className={val.className + ' rounded-md mx-1'}>
                                {val.key}
                            </Button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Calculator
