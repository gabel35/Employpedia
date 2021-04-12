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
     </table>
    </div>
  )
}

export default Container;
