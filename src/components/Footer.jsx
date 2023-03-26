import { Avatar, Box, HStack, Stack, Text, VStack ,Button} from '@chakra-ui/react';
import React from 'react'
import img1 from '../assest/Myprofile.jpg';
import {AiFillGithub} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <Box 
        bgColor={'blackAlpha.900'}
        color="whiteAlpha.800"
        minH={'48'}
        px={'16'}
        py={['16','8']}
       
    >
            <Stack direction={['column','column','row']} w="full" alignItems={'center'} justifyContent={'space-between'} >
                <VStack w={'full'} alignItems={['center','flex-start']}>
                    <Box fontFamily={'bold'}>About Us</Box>
                    <Box>We are best Crypto Trading App in India , we Provide Our Guidance With Very Resonable Price.</Box>
                    <Box>
                      <Box>Connent Us</Box>
                      <Box>Email : <Button variant={'link'} >abdulrazzak4186@gmail.com</Button></Box>
                      <HStack><AiFillGithub /><Button variant={'link'}><a href="https://www.github.com/AbdulRazzak6478" target="blank">AbdulRazzak6478</a></Button></HStack>
                    </Box>
                </VStack>
                <VStack w="full" h="full" justifyContent={'center'} alignItems={['center']}>
                    <Avatar boxSize={"28"} mt={['4','0']} src={img1} />
                    <Box textAlign={'center'}> Mohammed Abdul Razzak Qureshi</Box>
                </VStack>
            </Stack>
    </Box>
  )
}

export default Footer;