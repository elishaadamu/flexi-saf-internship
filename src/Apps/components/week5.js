import { useState, useEffect, useRef } from "react";

export default function useHook() {

const [currentName, setCurrentName] = useState("")
const prevName = useRef("")



  useEffect(() => {
    prevName.current = currentName;
  }, [currentName]);

  return (
    <>
      <input
        type="text"
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
      />
     
      <h4>My current name is {currentName} but I used to be {prevName.current}</h4>
    </>
  );
}
