import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";

class Employees extends Component {
  state = {
    results:[],
    error: ""
  };

  componentDidMount() {
    API.getEmployees()
      .then(res => this.setState({ results: res.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Container>
          <table className="table">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Timezone Time</th>
              <th>Timezone Name</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Cell</th>
            </tr>
            <tr>
              <td>{results.name.first}</td>
              {/* <td> 
                  {results.name.last} 
                  {results.gender}
                  {results.timezone.offset}
                  {results.timezone.description}
                  {results.location.city} 
                  {results.location.state}
                  {results.location.country} 
                  {results.email} 
                  {results.phone} 
                  {results.cell}
                </td> */}
            </tr>
          </table>
        </Container>
      </div>
    );
  };
}


export default Employees;
