import { server } from '..';
import ErrorModel from './ErrorModel';
import Loader from './Loader';
import { Badge, Box, Button, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React ,{ useEffect, useState}from 'react'
import { useParams } from 'react-router-dom';
import Chart from './Chart';
const CoinDetails = () => {
  const params=useParams();
  console.log("coin details id",params);
  const [coin,setCoins]=useState({});
  const [isLoading,setIsLoading]=useState(true);
  const [error,setError]=useState(false);
  const [currency,setCurrency]=useState("inr");
  const [days,setDays]=useState("24h");
  const [chartArray,setChartArray]=useState("24h");
  const currencySymbol=currency==="inr"?"₹ ":currency==="eur"?"€ ":"$ ";
  const btns=["24h","7d","14d","30d","60d","200d","1y","max"];
  const switchChartState=(key)=>{
    switch (key) {
      case "24h":
        setDays("24h");
        setIsLoading(true);
        break;
    
      case "7d":
        setDays("7d");
        setIsLoading(true);
        break;
    
      case "14d":
        setDays("14d");
        setIsLoading(true);
        break;
    
      case "30d":
        setDays("30d");
        setIsLoading(true);
        break;
    
      case "60d":
        setDays("60d");
        setIsLoading(true);
        break;
    
      case "200d":
        setDays("200d");
        setIsLoading(true);
        break;
    
      case "1y":
        setDays("365d");
        setIsLoading(true);
        break;
    
      case "max":
        setDays("max");
        setIsLoading(true);
        break;
    
      default:
        setDays("24h");
        setIsLoading(true);
        break;
    }
  }
  useEffect(() => {
    const fetchExchanges=async()=>{
        try{
            const {data}=await axios.get(`${server}/coins/${params.id}`);
            const {data:chartData}=await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
            console.log("coinDetails through id :",data);
            setCoins(data);
            setChartArray(chartData.prices);
            setIsLoading(false);
          }catch(error){
            setIsLoading(false);
            setError(true);
          }
        }
      fetchExchanges();
},[params.id,currency,days])
if(error)
{
    return <ErrorModel message="Error Occur While Fetching Exchanges"/>;
}
  return (
    <Container maxW={'container.xl'}>
      {isLoading ? (<Loader />):(
      <>
        <Box my={'3rem'} width="full" borderWidth={1}>
           <Chart arr={chartArray} currency={currencySymbol} days={days} />
        </Box>

        <HStack p="4" wrap={'wrap'}>
        {
          btns.map((i)=>(
            <Button key={i} onClick={()=>switchChartState(i)}>{i}</Button>
          ))
        }
        </HStack>
        <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
                <HStack spacing={'4'}>
                    <Radio value="inr">₹ (INR)</Radio>
                    <Radio value="usd">$ (USD)</Radio>
                    <Radio value="eur">€ (EUR)</Radio>
                </HStack>
        </RadioGroup>
        <VStack spacing={'4'} p={'8'} alignItems="flex-start">
          <Text  opacity={'0.7'}  fontWeight={"bold"} alignSelf={'center'}>
            Last Updated On {Date(coin.market_data.last_updated).split('G')[0]}</Text>

          <Image src={coin.image.large}  w="16" h="16" objectFit={'contain'} />
          <Stat>
            <StatLabel>{coin.name}</StatLabel>
            <StatNumber>
              {currencySymbol}{coin.market_data.current_price[currency]}
            </StatNumber>
            <StatHelpText>
              <StatArrow type={coin.market_data.price_change_percentage_24h > 0 ?'increase':'decrease'} />
              {currencySymbol} {coin.market_data.price_change_percentage_24h} %
            </StatHelpText>
          </Stat>
          <Badge fontSize={'2xl'} bgColor={'blackAlpha.600'} color={'white'}>
            {`#${coin.market_cap_rank}`}
          </Badge>
          <CustomerBar
           high={`${currencySymbol} ${coin.market_data.high_24h[currency]}`} 
           low={`${currencySymbol} ${coin.market_data.low_24h[currency]}`}  />

           <Box w={'full'} p={'4'}>
            <Item title={"Max Supply"} value={coin.market_data.max_supply} />
            <Item title={"Circulating Supply"} value={coin.market_data.circulating_supply} />
            <Item title={"Market Capital"} value={coin.market_data.market_cap[currency]} />
            <Item title={"All Time Low"} value={`${currencySymbol} ${coin.market_data.atl[currency]}`} />
            <Item title={"All Time High"} value={`${currencySymbol} ${coin.market_data.ath[currency]}`} />
           </Box>
        </VStack>
      </>)}
    </Container>
  );
}
const Item=({title,value})=>(
  <HStack justifyContent={"space-between"} w={'full'} my={'4'}>
    <Box fontFamily={'Bebas Neue'} letterSpacing={'widest'}>{title}</Box>
    <Box fontFamily={'Bebas Neue'} letterSpacing={'widest'}>{value}</Box>
  </HStack>
)
const CustomerBar=({high,low})=>(
  <VStack w={'full'}>
    <Progress value={50} colorScheme={'teal'} w={'full'} />
    <HStack justifyContent={'space-between'} w={'full'}>
      <Badge children={low} colorScheme={'red'} />
      <Box>24H Range</Box>
      <Badge children={high} colorScheme={'green'} />
    </HStack>
  </VStack>
)


export default CoinDetails;