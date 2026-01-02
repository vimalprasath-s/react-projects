import { Component } from "react";
import AboutUser from "./AboutUser";
import AboutUserClass from "./AboutUserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent component did mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <div>About Us</div>
        <AboutUserClass name="VP - Class" location="TN Classy" />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <div>About Us</div>
//       {/* <AboutUser name="VP - Functional" location="TN Funct" /> */}
//       <AboutUserClass name="VP - Class" location="TN Classy" />
//     </div>
//   );
// };

export default About;
