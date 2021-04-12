import React, { Component, useEffect, useState } from "react";
import Employees from "./pages/Chart";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Container from "./components/Container";

function App() {
  
  // const [results, setResults] = useState('');

  // useEffect(() => {
  //   fetch("https://randomuser.me/api/?results=50&nat=us")
  //     .then(response => response.json())
  //     .then(json => setResults(json.results))
  // }, [])

  var results = [{
    name : {
      first: "Gabriel",
      last: "Sanchez"
    },
    gender: "fluid",
    timezone: {
      offset: "-05:00",
      description: "EST"
    },
    location: {
      city: "Newark",
      state: "NJ",
      country: "United States"
    },
    email: "GabrielJose3135@gmail.com",
    phone: "973-000-000",
    cell: "973-000-000"
  },
  {
    name : {
      first: "Alison",
      last: "Trainor"
    },
    gender: "woman",
    timezone: {
      offset: "-07:00",
      description: "MST"
    },
    location: {
      city: "Phoenix",
      state: "AZ",
      country: "United States"
    },
    email: "fake@gmail.com",
    phone: "123-000-000",
    cell: "123-000-000"
  },
  {
    name : {
      first: "Bo-gum",
      last: "Park"
    },
    gender: "man",
    timezone: {
      offset: "+09:00",
      description: "KST"
    },
    location: {
      city: "Seoul",
      state: "",
      country: "South Korea"
    },
    email: "park.bogum@gmail.com",
    phone: "973-000-000",
    cell: "973-000-000"
  }];

  var res1 = results[0];
  var res2 = results[1];
  var res3 = results[2];

  return (
      <div>
        <Hero />
        <Container res1={res1} res2={res2} res3={res3}/>
        <Footer />
      </div>
  );
}

export default App;
