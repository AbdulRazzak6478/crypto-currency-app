import { Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerCloseButton,
    useDisclosure,
    VStack,HStack,
    DrawerContent,Button,Box ,Heading} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import {BiMenuAltLeft} from "react-icons/bi";
import '../styles/Coins.css';
const Header = () => {
    const {isOpen,onOpen,onClose}=useDisclosure();
   
    // screenWidth();
  return (
    <div className='header'>
        <Box display={['none','none','unset']}   bgColor={'aliceblue'}>
            <HStack  py={'1rem'}  justifyContent={'space-evenly'}>
                <Heading color={'purple'}>Crypto-Currency</Heading>
                <Box>
                <Button fontSize={'20'} mr="4" variant={"link"}  colorScheme={'purple'}   >
                    <Link to="/">Home</Link>
                </Button>
                <Button fontSize={'20'}  mr="4" variant={"link"} colorScheme={'purple'}  >
                    <Link to="/exchanges">Exchanges</Link>
                </Button>
                <Button fontSize={'20'}  mr="4" variant={"link"} colorScheme={'purple'}  >
                    <Link to="/coins">Coins</Link>
                </Button>
                </Box>
                <HStack>
                    <Button colorScheme={"purple"}   ><Link to="/login">Log In</Link></Button>
                    <Button variant={'outline'}  colorScheme={"purple"}><Link to="/signup">Sign Up</Link></Button>
                </HStack>
            </HStack>
        </Box>
        <Button display={['unset','unset','none','none']} colorScheme={"facebook"} onClick={onOpen} zIndex="10" pos={"fixed"} top={"4"} left={"4"} p={'0'} w={"10"} h={"10"} alignItems={'center'} justifyContent={'center'} borderRadius={"full"}>
            <BiMenuAltLeft size={"20"}/>
        </Button>
        <Drawer isOpen={isOpen} placement={'left'} onClose={onClose} >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader bgColor={"purple.600"} color="white">
                   {/* <h1> MARVEL STUDIOS</h1> */}
                   CRYPTO-CURRENCY
                </DrawerHeader>
                <DrawerCloseButton color="white" size={['sm','md','lg'] } />
                <DrawerBody>
                   <VStack alignItems={'flex-start'}>
                        <Button variant={"ghost"} colorScheme={'purple'} onClick={onClose} >
                            <Link to="/">Home</Link>
                        </Button>
                        <Button variant={"ghost"} colorScheme={'purple'} onClick={onClose} >
                            <Link to="/exchanges">Exchanges</Link>
                        </Button>
                        <Button variant={"ghost"} colorScheme={'purple'} onClick={onClose} >
                            <Link to="/coins">Coins</Link>
                        </Button>
                   </VStack>
                   <HStack
                   pos={"absolute"}
                   bottom={"10"}
                   left={"0"}
                   w={"full"}
                   justifyContent={'space-evenly'}
                   >
                        <Button colorScheme={"purple"} onClick={onClose}><Link to="/login">Log In</Link></Button>
                        <Button variant={'outline'} onClick={onClose} colorScheme={"purple"}><Link to="/signup">Sign Up</Link></Button>
                   </HStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </div>
  )
}

export default Header;