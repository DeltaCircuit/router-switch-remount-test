import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

class ParentTwoChildOneClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("P2C1 constructor");
  }

  componentDidMount = () => console.log("P2C1 did mount");
  componentDidUpdate = () => console.log("P2C1 did update");
  componentWillMount = () => console.log("P2C1 will mount");
  componentWillReceiveProps = () => console.log("P2C1 will receive props");
  componentWillUnmount = () => console.log("P2C1 will unmount");
  componentWillUpdate = () => console.log("P2C1 will update");

  render = () => {
    console.log("P2C1 render");
    return (
      <Switch>
        <Route exact path={this.props.baseUrl} render={() => <h1>P2C1</h1>} />
        <Route
          exact
          path={`${this.props.baseUrl}/gc1`}
          render={() => <ChildOneGrandChildOne />}
        />
        <Route
          exact
          path={`${this.props.baseUrl}/gc2`}
          render={() => <ChildOneGrandChildTwo />}
        />
      </Switch>
    );
  };
}

const ParentOneChildOne = withRouter(({ match: { url } }) => (
  <ParentTwoChildOneClass baseUrl={url} />
));

export default ParentOneChildOne;

class ChildOneGrandChildOne extends React.Component {
  constructor(props) {
    super(props);
    console.log("P2C1GC1 constructor");
  }

  componentDidMount = () => console.log("P2C1GC1 did mount");
  componentDidUpdate = () => console.log("P2C1GC1 did update");
  componentWillMount = () => console.log("P2C1GC1 will mount");
  componentWillReceiveProps = () => console.log("P2C1GC1 will receive props");
  componentWillUnmount = () => console.log("P2C1GC1 will unmount");
  componentWillUpdate = () => console.log("P2C1GC1 will update");

  render = () => {
    console.log("P2C1GC1 render");
    return <h1>P2C1GC1</h1>;
  };
}

class ChildOneGrandChildTwo extends React.Component {
  constructor(props) {
    super(props);
    console.log("P2C1GC2 constructor");
  }

  componentDidMount = () => console.log("P2C1GC2 did mount");
  componentDidUpdate = () => console.log("P2C1GC2 did update");
  componentWillMount = () => console.log("P2C1GC2 will mount");
  componentWillReceiveProps = () => console.log("P2C1GC2 will receive props");
  componentWillUnmount = () => console.log("P2C1GC2 will unmount");
  componentWillUpdate = () => console.log("P2C1GC2 will update");

  render = () => {
    console.log("P2C1GC2 render");
    return <h1>P2C1GC2</h1>;
  };
}
