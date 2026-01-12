import { useState } from 'react';

const Skills = () => {
  const [skills,setSkills] = useState(["Python","javascript"]);
  const handleSkills = () => {
    // Add 
    // setSkills([...skills,"React"]);

    // remove
    // setSkills(skills.filter((item) => item != "Python"));

    // Update
    setSkills(skills.map((item)=>(item=="javascript"?(item = "React"):item)))
  };
  return (
    <div>
      <ul className='m-5 list-disc'>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <button onClick={handleSkills}>Update Skill</button>
    </div>
  );
};

export default Skills;