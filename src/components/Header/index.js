import React from "react";
import SearchForm from "../SearchForm";
import "./style.css";

function Header(props) {
  return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employpedia</h1>
          <h2>Find that employee!</h2>
          <SearchForm search={props.filter} handleInputChange={props.handleInputChange} handleFormSubmit={props.handleFormSubmit} />
        </div>
      </div>
  );
}

export default Header;
