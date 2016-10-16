import React from 'react';

// the UI component for filtering the subway entrances by subway line
export default (props) => {
  const { lines, filterLines } = props;

  // this is the JSX that will become the Filter UI in the DOM, notice it looks pretty similar to HTML
  // notice in the select element onChange is set to the updateFilter method
  // thus when a user selects a new subway line to view, the component passes the new filter value
  // to the parent component, Map, which reloads the GeoJSON data with the current filter value
  return (
    <div className="filterSubwayLines">
      <hr/>
      <h3>beFIT Berlin Healht Index</h3>
      <p>What are your favorite spots?</p>
      <p>Filter by kind of location</p>
      <select defaultValue="*"
        type="select"
        name="filterlines"
        onChange={(e) => filterLines(e)}>
          { /* We render the select's option elements by maping each of the values of subwayLines array to option elements */ }
          {
            lines.map((line, i) => {
              return (
                  <option value={line} key={i}>{line}</option>
                );
            }, this)
          }
      </select>
    </div>
  );
};