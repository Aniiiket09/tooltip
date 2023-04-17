import React from "react";

//  TWO FUNCTIONS FOR HANDLING THE POSITION FOR HOVERING
class Tooltip extends React.Component {
  classn = () => {
    return `${this.props.position}`;
  };

  render() {
    return (
      <div className={`${this.classn()}`} id="classn">
        thanks for hovering "{this.props.position}" position!
      </div>
    );
  }
}

export default Tooltip;
