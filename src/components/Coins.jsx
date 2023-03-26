import React,{useCallback, useEffect, useState} from 'react';
import { Container,HStack,Button,Input, RadioGroup,Radio, VStack,Box,Select, Badge,Stack} from '@chakra-ui/react';
import axios from 'axios';
import { server } from '../index';
import Loader from './Loader.jsx';
import CoinCard from './CoinCard.jsx';
import ErrorModel from './ErrorModel.jsx';
import '../styles/Coins.css';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft ,FaArrowCircleRight} from 'react-icons/fa';
const Coins = () => {
    const [coins,setCoins]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(false);
    const [page,setPage]=useState(1);
    const [currency,setCurrency]=useState("inr");
    const [curr,setCurr]=useState("inr");
    const [pag,setPag]=useState(1);
    const [id,setId]=useState("");
    const currencySymbol=currency==="inr"?"₹ ":currency==="eur"?"€ ":"$ ";
    let params="";
    // const curr="";
    const arr=[];
    const getCurrency=(events)=>{
        // curr=curr+events.target.value;
       setCurr(events.target.value);
    }
    const updateCurrency=()=>{
        setCurrency(curr);
    }
    const getPage=(event)=>{
        setPag(event.target.value);
    }
    const updatePage=(event)=>{
        setPage(pag);
    }
    const getId=(events)=>{
        setId(events.target.value);
    }
    const searchId=()=>{
        console.log("id of the Coin ",id);
    }
    useEffect(() => {
        const fetchExchanges=async()=>{
            try{
                const {data}=await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
                params=data[0].id;
                console.log("coin : ",params);
                const {data:coinData}=await axios.get(`${server}/coins/${params}`);
                // console.log("coin object : ",coinData.market_data.current_price);
                // getCurrency(coinData.market_data.current_price);
                // console.log("array : ",arr);
                console.log("coin list :",data);
                setCoins(data);
                setIsLoading(false);
            }catch(err)
            {
                setIsLoading(false);
                setError(true);
            }
        }
        fetchExchanges();
    },[currency,page])
    if(error)
    {
        return <ErrorModel message="Error Occur While Fetching coins"/>;
    }
    const onLeftPages=()=>{
        if(page!=1){
            setPage(prevState=>prevState-1);
        }
        return ;
    }
    const onRightPages=()=>{
        if(page!=132){
            setPage(prevState=>prevState+1);
        }
        return ;
    }
    const pagination=(events)=>{
        setPage(prevState=>prevState+events.target.value);
        return;
    }
    if(error)
    {
        return "Error while Fetching Coins";
    }
    
  return (
    <div>
        <Container maxW={'container.xl'} my={'3rem'}>
            {/* {error ? "not fetched":} */}
            <Stack direction={['column','column','row']} w={'full'} justifyContent="space-between">
                <HStack>
                    <Badge>Enter Currency</Badge>
                    <Input type="text" onChange={getCurrency} placeholder='ex: inr,usd,eur ... ' />
                    <Button type="submit"  onClick={updateCurrency} >Set</Button>
                </HStack>
                <HStack>
                    <Box fontFamily={'bold'}>Enter Id to Check Coin Details</Box>
                    <Input type="text" placeholder='Ex : bitcoin ,ethereum,...' onChange={getId} />
                    <Button onClick={searchId}><Link to={`/coins/${id}`}>Check</Link></Button>
                </HStack>
                <HStack>
                    <Box fontFamily={'bold'}>Enter Page No. To Visit</Box>
                    <Input  type={'text'} onChange={getPage} w="70px" /><span>/132</span>
                    <Button type="submit"  onClick={updatePage} >Set</Button>
                </HStack>
            </Stack>
            <RadioGroup value={currency} onChange={setCurrency} p={'4'}>
                <HStack spacing={'4'}>
                    <Radio value="inr">₹ (INR)</Radio>
                    <Radio value="usd">$ (USD)</Radio>
                    <Radio value="eur">€ (EUR)</Radio>
                </HStack>
            </RadioGroup>
            {isLoading ? <Loader />:<>
            <HStack wrap={'wrap'}>
                {coins.map((item)=>
                <CoinCard id={item.id}
                        key={item.id}
                        name={item.name}
                        img={item.image}
                        symbol={item.symbol}
                        currencySymbol={currencySymbol}
                        price={item.current_price}
                />
            )}
            </HStack>
            </>}
            <HStack justifyContent={'center'}>
                <Button onClick={onLeftPages} variant={'ghost'}><Link to="/coins"><FaArrowCircleLeft size={'30'}/></Link></Button>
                <input type="number" value={page} className='input' onChange={pagination}/><span className='length'>/132</span>
                <Button  onClick={onRightPages} variant={'ghost'}><Link to="/coins"><FaArrowCircleRight size={'30'} /></Link></Button>
            </HStack>
        </Container>
    </div>
  );
}
const Option=({item})=>(
    {item}
)

export default Coins;