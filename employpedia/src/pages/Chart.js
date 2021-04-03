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
            {/* <tr>
              {results.map(results => (
                <td>
                  {results.name.first} 
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
                </td>
              ))}
            </tr> */}
            <tr>
              <th>Works?</th>
              <th>Sad?</th>
            </tr>
            <tr>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>No</td>
              <td>Very</td>
            </tr>
          </table>
        </Container>
      </div>
    );
  };
}


export default Employees;
