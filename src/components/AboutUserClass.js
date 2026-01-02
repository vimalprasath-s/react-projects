import React from "react";

class AboutUserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child constructor");
    this.state = {
      count1: 0,
      count2: 1,
      userInfo: {
        name: "VP",
        location: "Bengaluru",
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Inside did update");
    if (prevState.count1 !== this.state.count1) {
      // This if for handling count1 value changes
      console.log("count1 = ", this.state.count1);
    }
    if (prevState.count2 !== this.state.count2) {
      // This if for handling count2 value changes
    }
  }

  async componentDidMount() {
    const res = await fetch(`https://api.github.com/users/vimalprasath-s`);
    const data = await res.json();
    this.setState({ userInfo: data });
    console.log("Child componentdidmount", data);
    this.timerId = setInterval(() => {
      console.log("Learning the use of cleanup");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWill unmount called");
    clearInterval(this.timerId);
  }

  render() {
    console.log("Child Render");
    // const { name, location } = this.props;

    const { name, location } = this.state.userInfo;
    const { count1, count2 } = this.state;
    return (
      <div className="about-user">
        <h3>{name}</h3>
        <h4>Software Engineer</h4>
        <h4>Location - {location}</h4>
        <h4>Count1: {count1}</h4>
        <h4>Count2: {count2}</h4>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default AboutUserClass;
