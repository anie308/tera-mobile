import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const CreateButton = () => {
  return (
   <Link asChild href="/create-event">
     <TouchableOpacity  className='absolute bottom-[8%] right-[5%] h-[60px] w-[60px] rounded-full bg-primary items-center justify-center'>
      <Text>c</Text>
    </TouchableOpacity>
    </Link>
  )
}

export default CreateButton