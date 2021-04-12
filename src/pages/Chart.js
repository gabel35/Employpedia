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
  const [results, setResults] = useState('');

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(json => setResults(json.results))
  }, [])


  return (
    <div>
      <Container 
        results={results.name}
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
