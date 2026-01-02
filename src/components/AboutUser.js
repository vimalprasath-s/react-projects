import { useState } from "react";

const AboutUser = ({ name, location }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <div className="about-user">
      <h3>{name}</h3>
      <h4>Software Engineer</h4>
      <h4>Location - {location}</h4>
      <h4>Count1: {count1}</h4>
      <h4>Count2: {count2}</h4>
    </div>
  );
};

export default AboutUser;
