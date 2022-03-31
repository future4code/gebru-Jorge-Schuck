import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import AdminHomePage from "./pages/AdminHomePage"
import ApplicationFormPage from "./pages/ApplicationFormPage"
import CreateTripPage from "./pages/CreateTripPage"
import HomePage from "./pages/HomePage"
import ListTripsPage from "./pages/ListTripsPage"
import LoginPage from "./pages/LoginPage"
import TripDetailsPage from "./pages/TripDetailsPage"
import { Router } from "../src/routes/Router";


const App = () =>{

  return (
    <div>
      <Router/>
    </div>
  )
}


export default App;

