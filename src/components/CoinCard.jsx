import { Heading,Image,Box,VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const CoinCard=({id,name,img,symbol,currencySymbol,price})=>{
    return(
        <Link to={`/coins/${id}`}>
            <VStack w={'52'} shadow={'xl'} p="8" borderRadius={'lg'} m={'4'} transition={'all .3s'}
            css={{
                "&:hover":{
                    transform:"scale(1.1)",
                }
            }}
            >
                {/* <Heading size="md" noOfLines={'1'}>{id}</Heading> */}
                <Image src={img} w="12" h='12' objectFit={'contain'}  alt="exchanges"/>
                <Box size="sm" noOfLines={'1'}>{symbol}</Box>
                <Box size="lg" noOfLines={'1'}>{name}</Box>
                <Box size="md" noOfLines={'1'}>{price}{" "+currencySymbol}</Box>
            </VStack>
        </Link>
    );
}
export default CoinCard;