/* eslint-disable */ 
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import tarotJson from "../../Assets/tarot.json"
import reading from "../../Assets/readings.json"
import { 
Image,
Flex,
Heading,
Box,
Text,
Button
} from "@chakra-ui/react";
import { goHomePage } from "../../routes/Coordinator";



export default function ResultPage (){
    const navigate = useNavigate()
    const { name } = useParams()

    const [card] = useState (newDeck);
    const [cardResult] = useState(renderReadings);


    function newDeck() {
        const result = tarotJson.cards.find((item) => item.name === `${name}`);
        return result;
    }
    
    function renderReadings() {
        const result = reading.cards.find((item) => item.name === `${name}`);
        return result;
    }

    return (
      <Box>
        <Flex
          w="100%"
          alignItems={"center"}
          flexDirection={"row"}
          alignContent={"space-between"}
          justifyContent={"space-around"}
          bg={"#ff0000"}
          p={"10px"}
          zIndex={2}
        >
          <Box h="80px" p={4}>
            <Heading fontSize="20px" noOfLines={1}>
               {card.name}
              <Button marginLeft={"5"} bgColor="CaptionText" onClick={() => goHomePage(navigate)}> Voltar</Button>
            </Heading>
           
          </Box>
        </Flex>
        <Box>
          <Flex
            alignItems={"center"}
            flexDirection={"row"}
            alignContent={"space-between"}
            justifyContent={"space-around"}
            paddingTop={"18"}
          >
            <Image
              key={card.name}
              src={tarotJson.imagesUrl + card.image}
              alt={card.name}
              w={"15%"}
              h={"15%"}
              shadow={"dark-lg"}
            />
          </Flex>
        </Box>
        <Box
          background={"#efd510"}
          maxW={"100%"}
          maxH={"100%"}
          color="#141010"
          borderRadius={"16px"}
          boxShadow={"dark-lg"}
          p={6}
          m="50px"
        >
            <Heading align = {"left"} as = "h3" size={"medium"} >
                 O que diz a sua carta : 
            </Heading>
            <Text textAlign={"left"}>{cardResult.reading}</Text>
        </Box>

      </Box>
    );
}