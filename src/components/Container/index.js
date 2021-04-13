import React, {useState, useEffect} from "react";
import API from "../../utils/API";

const Container = () => {
  // const [results, setResults] = useState([]);

  // useEffect(() => {
  //   loadResults()
  // }, [])

  // function loadResults () {
  //   API.getEmployees()
  //   .then(res => setResults(res.results))
  //   .catch(err => console.log(err))
  // }


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
    phone: "02-000-000",
    cell: "051-000-000"
  },
  {
    name : {
      first: "Villarampa",
      last: "Hannah"
    },
    gender: "woman",
    timezone: {
      offset: "+08:00",
      description: "PST"
    },
    location: {
      city: "Manila",
      state: "Luzon",
      country: "Philippines"
    },
    email: "hvil@gmail.com",
    phone: "63-000-000",
    cell: "63-000-000"
  },
  {
    name : {
      first: "Zunelly",
      last: "Odhiembo"
    },
    gender: "nonbinary",
    timezone: {
      offset: "+01:00",
      description: "WAT"
    },
    location: {
      city: "Abuja",
      state: "Federal Capital Territory",
      country: "Nigeria"
    },
    email: "zuzu.o@gmail.com",
    phone: "09-000-000",
    cell: "09-000-000"
  }];

  return (
    <div className="container">
     <table className="table">
      <thead>
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
        </tr>
      </thead>
      <tbody  id="getTable">
        {results.map((props, index) => (
          <tr key={index}>
            <td>{props.name.first}</td>
            <td>{props.name.last}</td>
            <td>{props.gender}</td>
            <td>{props.timezone.offset}</td>
            <td>{props.timezone.description}</td>
            <td>{props.location.city} </td>
            <td>{props.location.state}</td>
            <td>{props.location.country} </td>
            <td>{props.email} </td>
          </tr>
        ))}
      </tbody>
     </table>
    </div>
  )
}

export default Container;
