import React, {useState, useEffect} from "react";
import API from "../../utils/API";

function Container() {
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



  // const [sorted, setSort] = useState([]);

  // useEffect(() => {
  //   onSortChange()
  // }, [])

  // const sortTypes = {
  //   up: {
  //     class: 'sort-up',
  //     fn: (a, b) => a.name - b.name
  //   },
  //   down: {
  //     class: 'sort-down',
  //     fn: (a, b) => b.name - a.name
  //   },
  //   default: {
  //     class: 'sort',
  //     fn: (a, b) => a
  //   }
  // };

	// // method called every time the sort button is clicked
	// // it will change the currentSort value to the next one
	// function onSortChange() {
	// 	let nextSort;

	// 	if (sorted === 'down') nextSort = 'up';
	// 	else if (sorted === 'up') nextSort = 'default';
	// 	else if (sorted === 'default') nextSort = 'down';
  //   API.getEmployees()
	// 	.then(res => setSort({sorted: nextSort}))
	// };




  return (
    <div className="container">
     <table className="table">
      <thead>
        <tr>
          <th>
            {/* <button 
              type="button" 
              onClick={() => onSortChange('name')}
            > */}
              First Name
            {/* </button> */}
          </th>
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
};

export default Container;
