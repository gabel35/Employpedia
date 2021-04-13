import React, {useState, useEffect} from "react";

const Container = props => {
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
          <th>Phone</th>
          <th>Cell</th>
        </tr>
      </thead>
      <tbody>
      {/* <tr>
          <td>{props.results.name.first}</td>
          <td>{props.results.name.last}</td>
          <td>{props.results.gender}</td>
          <td>{props.results.timezone.offset}</td>
          <td>{props.results.timezone.description}</td>
          <td>{props.results.location.city} </td>
          <td>{props.results.location.state}</td>
          <td>{props.results.location.country} </td>
          <td>{props.results.email} </td>
          <td>{props.results.phone} </td>
          <td>{props.results.cell}</td>
        </tr> */}
        <tr>
          <td>{props.res1.name.first}</td>
          <td>{props.res1.name.last}</td>
          <td>{props.res1.gender}</td>
          <td>{props.res1.timezone.offset}</td>
          <td>{props.res1.timezone.description}</td>
          <td>{props.res1.location.city} </td>
          <td>{props.res1.location.state}</td>
          <td>{props.res1.location.country} </td>
          <td>{props.res1.email} </td>
          <td>{props.res1.phone} </td>
          <td>{props.res1.cell}</td>
        </tr>
        <tr>
          <td>{props.res2.name.first}</td>
          <td>{props.res2.name.last}</td>
          <td>{props.res2.gender}</td>
          <td>{props.res2.timezone.offset}</td>
          <td>{props.res2.timezone.description}</td>
          <td>{props.res2.location.city} </td>
          <td>{props.res2.location.state}</td>
          <td>{props.res2.location.country} </td>
          <td>{props.res2.email} </td>
          <td>{props.res2.phone} </td>
          <td>{props.res2.cell}</td>
        </tr>
        <tr>
          <td>{props.res3.name.first}</td>
          <td>{props.res3.name.last}</td>
          <td>{props.res3.gender}</td>
          <td>{props.res3.timezone.offset}</td>
          <td>{props.res3.timezone.description}</td>
          <td>{props.res3.location.city} </td>
          <td>{props.res3.location.state}</td>
          <td>{props.res3.location.country} </td>
          <td>{props.res3.email} </td>
          <td>{props.res3.phone} </td>
          <td>{props.res3.cell}</td>
        </tr>
      </tbody>
     </table>
    </div>
  )
}

export default Container;
