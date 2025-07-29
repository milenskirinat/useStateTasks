import { useState } from "react";

export default function EmailForm() {
  const [valid, setValid] = useState("");
  const [email, setEmail] = useState("");

  const handleValidation = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setValid(newEmail.includes("@"));
  };

  return (
    <div>
      <input value={email} onChange={handleValidation} />
      <button disabled={!valid}>Submit</button>
    </div>
  );
}
