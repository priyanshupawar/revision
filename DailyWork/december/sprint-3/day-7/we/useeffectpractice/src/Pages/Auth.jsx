import { useState } from "react";

function Auth({ children }) {
  const [auth] = useState(false);
  if (auth) {
    return children;
  } else {
    return (
      <div>
        <h1>Login First </h1>
      </div>
    );
  }
}

export default Auth;
