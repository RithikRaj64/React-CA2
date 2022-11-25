import React from "react";
import InputComponent from "./Components/InputComponent";

export default function App() {

  const inputList = [{ type: "text", label: "Enter your username", placeholder: "your Username", datatestid: 'username' },
  { type: "email", label: "Enter your email", placeholder: "Your Email", datatestid: 'email' },
  { type: "password", label: "Enter your password", placeholder: "your Password", datatestid: 'password' }]

  return (
    <>
      <h1>RITHIK RAJ K S    😎</h1>
      <InputComponent prop={inputList} />
    </>
  );
}
