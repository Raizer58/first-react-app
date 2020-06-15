import React, { useState } from "react";

function SearchBlock (data) {
  console.log(arguments)
  console.log(data)
  const { submit } = data;
  return (
    <form onSubmit={(event)=> {
      event.preventDefault();
      submit(event.currentTarget[0].value)
      }
    }>
      <input type="text" placeholder="Input town" required autoFocus autoComplete="off"></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default SearchBlock;
