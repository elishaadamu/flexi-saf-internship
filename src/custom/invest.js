import React, { useState, useEffect, useRef } from "react";
import "./custom.css";

const Investment = () => {
  const [age, setAge] = useState(null);
  const hasPrompted = useRef(false);

  useEffect(() => {
    if (!hasPrompted.current) {
      const userAge = prompt("Enter Age");
      setAge(userAge);
      hasPrompted.current = true;
    }
  }, []);

  return (
    <div>
      <h1 className="age">{age >= 18 ? "Over Age" : "You can Enter"}</h1>
    </div>
  );
};

export default Investment;
