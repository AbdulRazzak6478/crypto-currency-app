// import { Box } from '@chakra-ui/react'
import { Spinner, VStack ,Box} from '@chakra-ui/react';
import React from 'react'
import '../styles/Loader.css';
const Loader = () => {
  return (
    <VStack h={'90vh'} justifyContent={'center'}>
      <Box transform={'scale(3)'}>
        <Spinner size={'xl'} />
      </Box>
    </VStack>
    // <div className='load'>
    //     <div className='loading'>
    //     </div>
    //         <p>loading</p>
    // </div>
  )
}

export default Loader;