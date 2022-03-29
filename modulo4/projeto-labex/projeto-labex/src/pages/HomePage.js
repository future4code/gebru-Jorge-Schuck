import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import LoginPage from "./LoginPage"
import ListTripPage from "./ListTripsPage"
import TripDetailsPage from "./TripDetailsPage"
import AdminHomePage from "./AdminHomePage"
import ApplicationFormPage from "./ApplicationFormPage"
import CreateTripPage from "./CreateTripPage"

const HomePage = () =>{

    return (
      <div>
        <h1>Labex</h1>
            <div>
                <button>Ver Viagens</button>
                <button>Área de Admin</button>
            </div>
      </div>
    )
  }
  export default HomePage;