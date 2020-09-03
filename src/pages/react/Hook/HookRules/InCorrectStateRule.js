import React, { useState } from 'react';

function Input(props) {
  const { onChange, value, name } = props;
  return(
    <div>
      <hr/>
      <span>{name}:</span>
      <input value={value} onChange={onChange}/>
      <p>value of {name}: {value}</p>
    </div>
  );
}

export default function InCorrectStateRule(props) {
  const [name, setName] = useState("name");
  if(name.length < 5) {
    const [gender, setGender] = useState("boy");
  }
  const [age, setAge] = useState("18");
  const [high, setHigh] = useState("180");

  return(
    <div>
      <p>InCorrectStateRule.</p>
      <Input name="name" value={name} onChange={(e) => setName(e.target.value)}/>
      <Input name="gender" value={gender} onChange={(e) => setGender(e.target.value)}/>
      <Input name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
      <Input name="high" value={high} onChange={(e) => setHigh(e.target.value)}/>
    </div>
  );
}