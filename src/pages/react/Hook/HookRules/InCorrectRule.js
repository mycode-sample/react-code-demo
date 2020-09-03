import React, { useEffect, useState } from 'react';

export default function InCorrectRule(props) {
  // 1. Use the name state variable
  const [name, setName] = useState('Mary');

  // 2. Use an effect for persisting the form
  // if (name.length < 5) {
  //   useEffect(function persistForm() {
  //     localStorage.setItem('formData', name);
  //   });
  // }

  // 3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins');

  // 4. Use an effect for updating the title
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  });

  return(
    <div>
      <p>incorrect</p>
      <p>name: {name}</p>
      <p>surname: {surname}</p>
      <div>
        <span>name</span>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <div>
        <span>surname</span>
        <input value={surname} onChange={(e) => setSurname(e.target.value)}/>
      </div>
    </div>
  );
}