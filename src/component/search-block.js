import React, { useState } from "react";

function SearchBlock (data) {
  const { submit } = data;
  return (
    <form onSubmit={(event)=> {
      event.preventDefault();
      const city = event.currentTarget[0].value;
      submit(city);
      }
    }>
      <input type="text" placeholder="Input town" required autoFocus autoComplete="off"></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default SearchBlock;
