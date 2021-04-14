import React, {useState, useEffect} from "react";
import API from "../../utils/API";

const Container = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    loadResults()
  }, [])

  function loadResults () {
    API.getEmployees()
    .then(res => {
      console.log(res)
      setResults(res.data.results)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="container">
     <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
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
            <td>{props.location.timezone.offset}</td>
            <td>{props.location.timezone.description}</td>
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
