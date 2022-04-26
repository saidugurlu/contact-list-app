import { useState } from "react";

function Form() {
  const [form, setForm] = useState({ fullname: "", phoneNumber: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phoneNumber === "") return false;
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Fullname"
          onChange={onChangeInput}
        ></input>
      </div>
      <div>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={onChangeInput}
        ></input>
      </div>
      <div>
        <button> Add </button>
      </div>
    </form>
  );
}
export default Form;
