import React,{useEffect, useState} from 'react';
import { Container ,Box, Image, Heading,VStack,HStack} from '@chakra-ui/react';
import axios from 'axios';
import { server } from '../index';
import Loader from './Loader';
import ErrorModel from './ErrorModel';
const Exchanges = () => {
    const [exchanges,setExchanges]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(false);
    useEffect(() => {
        try{
            const fetchExchanges=async()=>{
                const {data}=await axios.get(`${server}/exchanges?per_page=250`);
                console.log("coin list :",data);
                setExchanges(data);
                setIsLoading(false);
            }
            fetchExchanges();
        }catch(err){
            setIsLoading(false);
            setError(true);
        }
    },[])
    if(error)
    {
        return <ErrorModel message="Error Occur While Fetching Exchanges"/>;
    }
  return (
    <div>
        <Container maxW={'container.xl'} my={'3rem'}>
            {/* {error ? "not fetched":} */}
            {isLoading ? <Loader />:<>
            <HStack wrap={'wrap'}>
                {exchanges.map((item)=>
                <ExchangeCard id={item.id}
                        name={item.name}
                        url={item.url}
                        img={item.image}
                        rank={item.trust_score_rank}
                        country={item.country}   
                />
            )}
            </HStack>
            </>}
        </Container>
    </div>
  );
}
const ExchangeCard=({id,name,url,img,rank,country})=>{
    // console.log("CoinCard is callled");
    return(
        <a href={url} target='blank'>
            <VStack w={'52'} shadow={'xl'} p="8" borderRadius={'lg'} m={'4'} transition={'all .3s'}
            css={{
                "&:hover":{
                    transform:"scale(1.1)",
                }
            }}
            >
                <Heading size="md" noOfLines={'1'}>{rank}</Heading>
                <Image src={img} w="10" h='10' objectFit={'contain'}  alt="exchanges"/>
                <Box size="md" noOfLines={'1'}>{id}</Box>
                <Box size="md" noOfLines={'1'}>Name :{name}</Box>
                <Box size="md" noOfLines={'1'}>country :{country}</Box>
            </VStack>
        </a>
    );
}
export {ExchangeCard};
export default Exchanges;