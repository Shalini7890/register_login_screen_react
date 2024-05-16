import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form isUserRegistered={userIsRegistered} />
    </div>
  );
}

// function App() {
//   return (
//     <div className="container">
//       {userIsRegistered ? <Form text="Login" /> : <Form text="Register" />}
//     </div>
//   );
// }

export default App;
