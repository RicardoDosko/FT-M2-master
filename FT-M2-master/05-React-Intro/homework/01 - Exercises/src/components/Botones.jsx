import React, { Component } from "react";

class Botones extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="buttons" onClick={() => alert(this.props.alerts.m1)}>Módulo 1</button>
        <button className="buttons" onClick={() => alert(this.props.alerts.m2)}>Módulo 2</button>
      </div>
    );
  }
}

export default Botones;