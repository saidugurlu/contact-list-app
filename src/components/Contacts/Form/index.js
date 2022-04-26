import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phoneNumber: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ initialFormValues });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
useEffect (()=> {

  setForm(initialFormValues );
},[contacts])

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phoneNumber === "") return false;
  

  addContact([...contacts, form]);

};
  return (
    <form className="form" onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Fullname"
          onChange={onChangeInput}
          value={form.fullname}
        ></input>
      </div>
      <div>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={onChangeInput}
          value={form.phoneNumber}
        ></input>
      </div>
      <div className="btn">
        <button > Add </button>
      </div>
    </form>
  );
}
export default Form;
