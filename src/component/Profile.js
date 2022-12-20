import React from "react";
import Photo from "./Photo.jpg"
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      timer: 0,
    };
  }
  Person = {
    fullName: "Nahed ElFekih",
    bio: "Full Stack JS",
    photo: Photo,
    profession: "Student",
  };

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }

  componentWillUnmount() {
      clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <img src={this.Person.photo} alt="" />
        <h3>{this.Person.fullName}</h3>
        <h3>{this.Person.bio}</h3>
        <h3>{this.Person.profession}</h3>
        <h3>{this.state.timer} second(s)</h3>
      </div>
    );
  }
}
export default Profile;