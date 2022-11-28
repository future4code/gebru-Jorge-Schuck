import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from '../../routes/Coordinator'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {StyledLogo} from "../Header/styled"
import {Img} from "../Header/styled"





export default function Header(props) {
  const navigate = useNavigate()

  return (
    
      <AppBar onClick={() => navigate(goToHome)} position="static">
        <Toolbar variant="dense" color="primaryColor" >
          <Typography variant="h4" component="div">
            <StyledLogo>
            <Img src= "https://img.freepik.com/vetores-gratis/banner-de-cinema-online-com-claquete-aberta-e-tira-de-filme_1419-2242.jpg?w=1380&t=st=1669160913~exp=1669161513~hmac=4264ceaae02a88dc182565d4a2a4827b448edb551427e0fd81042062a0c8d4b6"/>
            </StyledLogo>
          </Typography>
        </Toolbar>
      </AppBar>

  )
}