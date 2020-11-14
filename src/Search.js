import React from "react";

function Search(props) {
  //   constructor(props) {
  //     super(props);
  //   }

  return (
    <div>
      <input type="text" onChange={props.handleChange} />
    </div>
  );
}
export default Search;
