import {useState, useEffect} from "react";

const Container = props => {
  return (
    <div className="container">
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
        <td>{props.results}</td>
        <td>{props.firstName}</td>
        <td>{props.firstName}</td>
        <td>{props.firstName}</td>
        <td>{props.firstName}</td>
        <td>{props.firstName}</td>
        <td>{props.firstName}</td>
        <td>{props.firstName}</td>
        <td>{props.firstName}</td>
        <td>{props.firstName}</td>
        <td>{props.firstName}</td>
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
    </div>
  )
}

export default Container;
