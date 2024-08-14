import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type ButtonProps = {
    text: string,
    action?: () => void
}
const Button = ({text, action}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={action} className='h-[50px] w-full rounded-[10px] bg-primary items-center justify-center'>
      <Text className='text-white text-[18px] font-bold'>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button