import {useState} from "react";

function List({ contacts }) {
  const [filterText, setFilterText]= useState("")
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key)=> 
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  })
  return (
    <div>

      <input placeholder="Filter" value ={filterText} onChange={(e)=> setFilterText(e.target.value)}/> 
      <ul className="list">
        {filtered.map((contact, index) => (
          <li key={index}>

            <span>{contact.fullname}</span>
            <span>{contact.phoneNumber}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default List;
