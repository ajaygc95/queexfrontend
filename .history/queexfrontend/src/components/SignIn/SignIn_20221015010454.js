import React from "react";

function SignIn() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const [message, setMessage] = useState({
    loading: false,
    error: null,
    success: false,
  });

  return (
    <>
      <form action="" className="signin-container">
        <div className="signin-field">
            <label>Username</label>
            input.
        </div>
      </form>
    </>
  );
}

export default SignIn;
