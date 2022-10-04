import React from "react";
import "./app-info.css";
import PropTypes from "prop-types";

const AppInfo = ({ allEmployees, increaseEmployees }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {allEmployees}</h2>
      <h2>Премию получат: {increaseEmployees}</h2>
    </div>
  );
};
AppInfo.propTypes = {
  allEmployees: PropTypes.number.isRequired,
  increaseEmployees: PropTypes.number.isRequired,
};

export default AppInfo;
