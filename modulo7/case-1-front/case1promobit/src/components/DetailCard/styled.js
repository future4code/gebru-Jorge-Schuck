import { Card } from "@mui/material";
import styled from "styled-components";

export const DetailCardStyled = styled.div`
    display: flex;
    flex-direction: row;
    width: 300vh;
    @media screen and (min-device-width : 300px) and (max-device-width : 800px){
  /* border: 2px green solid; */
  width:180%;
 
}
    /* border:1px solid; */

    
`

export const CardStyled = styled(Card)`
    display: flex;
    flex-direction: row;
    margin: 0.2%;
    /* border: 2px solid; */
    width: 40%!important;
    height: 70%!important;
    :hover{
    -webkit-transform: scale(0.2);
-ms-transform: scale(1.2);
transform: scale(1.1);
transition: 0.3s ease;
  }
  
`
export const DetailMovieStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 25px;
    /* border: 2px green solid; */
    background-color:green ;
    background-image:url(https://www.significadofacil.com/wp-content/uploads/2019/07/background.jpg);
    @media screen and (min-device-width : 300px) and (max-device-width : 800px){
  /* border: 2px green solid; */
  display: flex;
  flex-direction:column;
  align-items: center;
    
 
}
    
`
export const Img = styled.img`
@media screen and (min-device-width : 300px) and (max-device-width : 800px){
  /* border: 2px green solid; */
  width:40%;
 
}
`
export const StyleTypograph = styled.div`
color: white;
@media screen and (min-device-width : 300px) and (max-device-width : 800px){
  /* border: 5px green solid; */
  width:70%;
margin:auto;
  
 
 
}
/* border:2px solid; */
display: flex;
flex-direction:column;
margin-right:30vh ;


`