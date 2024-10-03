import { useState } from "react";

function MyForm() {
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");
  //   const [email, setEmail] = useState("");
  const [inputs, setInputs] = useState({
    phone: "+91",
    email: "@gmail.com",
    about: "i am a student",
  });

  function submit(e) {
    e.preventDefault();
    console.log("form submitted", inputs);
    // console.log(
    //   "form submiited with the name:",
    //   name,
    //   "age",
    //   age,
    //   "email",
    //   email
    // );
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((previousState) => {
      return { ...previousState, [name]: value };
    });
  }

  return (
    <form onSubmit={submit}>
      <label>enter your name </label>
      <input type="text" name="name" onChange={handleChange} />
      <br />
      <label>enter your Age </label>
      <input type="number" name="age" onChange={handleChange} />
      <br />
      <label>enter your email </label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={inputs.email}
      />
      <br />
      <label>enter your phone number </label>
      <input
        type="text"
        name="phone"
        onChange={handleChange}
        value={inputs.phone}
      />
      <br />
      <label>enter your country </label>
      <select name="country" onChange={handleChange} value={inputs.country}>
        <option value="select "> Select</option>

        <option value="Australia"> Australia</option>
        <option value="India"> India</option>
        <option value="Rusia"> Rusia</option>
        <option value="Brazil"> Brazil</option>
      </select>
      <br />
      <label> enter about you</label>
      <textarea
        name="about"
        onChange={handleChange}
        value={inputs.about}
      ></textarea>
      <br />
      <input type="submit" value="submit" />
    </form>
  );
}

export default MyForm;
