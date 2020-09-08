import React from 'react';

function useAutoTime() {
  var time = Date().toLocaleLowerCase();
  const index = time.search(/\d\d:\d\d:\d\d/);
  const num = time.substring(index, index + 8).replace(/\d\d:\d\d:/, "");
  if(Number(num) % 3 === 0) {
    return "correct time";
  }
  return "incorrect time";
}


export default function SimpleCustomHook(props) {
  const timeStatus = useAutoTime();

  return(
    <div>
      <p>time status.</p>
      <p>{Date().toLocaleLowerCase()}</p>
      <p>{timeStatus}</p>
    </div>
  );
}
