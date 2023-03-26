import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
// import img1 from '../assest/btc.jfif';
// import img1 from '../assest/btc1.avif';
import img1 from '../assest/coins.webp';
const Home = () => {
  return (
    <Box w={"full"} h={"65vh"} justifyContent={'center'} alignItems={'center'} >
      <motion.div
      //  style={{
      //   height:"70vh",
      // }}
        animate={{
          translateY:"40px",
        }}
        transition={{
          duration:2,
          repeat:Infinity,
          repeatType:"reverse"
        }}
      >

      <Image  p="2rem" w="full" h={'50vh'} objectFit={"contain"} src={img1}  />
      </motion.div>
      <Box fontSize={"5xl"} textAlign={'center'} fontWeight={'bold'}  mt={'10'}>
       Crypto Coins
      </Box>
    </Box>
  );
};

export default Home;
