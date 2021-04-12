import React, { Component, useEffect, useState } from "react";
// import API from "../utils/API";
import Container from "../components/Container";

// class Employees extends Component {
//   constructor() {
//     super();
//     this.state = {
//       results: [],
//     }
//   }

const Employees = () => {
  // const [results, setResults] = useState('');

  // useEffect(() => {
  //   fetch("https://randomuser.me/api/")
  //     .then(response => response.json())
  //     .then(json => setResults(json.results))
  // }, [])

  var results = {
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
  }

  return (
    <div>
      <Container 
        results={results}
      />
    </div>
  );
};

  // componentDidMount() {
  //   API.getEmployees()
  //     .then(res => res.json())
  //     .then(json => this.setState(json.results))
  //     .catch(err => console.log(err));
  // }




export default Employees;
