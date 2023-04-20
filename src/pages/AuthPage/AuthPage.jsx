import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1>AuthPage</h1>
      {showSignUp ? (
        <>
          <SignUpForm setUser={setUser} />
          <button onClick={() => setShowSignUp(!showSignUp)}>
            {showSignUp ? "Log In" : "Sign Up"}
          </button>
        </>
      ) : (
        <>
          <LoginForm setUser={setUser} setShowSignUp={setShowSignUp} />
          <button onClick={() => setShowSignUp(!showSignUp)}>
            {showSignUp ? "Log In" : "Sign Up"}
          </button>
        </>
      )}
    </main>
  );
}
