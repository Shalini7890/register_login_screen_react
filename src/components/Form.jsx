import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isUserRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">
        {props.isUserRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}
// function Form(props) {
//   return (
//     <form className="form">
//       <input type="text" placeholder="Username" />
//       <input type="password" placeholder="Password" />
//       {props.text === "Register" && (
//         <input type="password" placeholder="Confirm Password" />
//       )}
//       <button type="submit">{props.text}</button>
//     </form>
//   );
// }

export default Form;
