import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import ParentTwoChildOne from "./ParentTwoChildOne";

class ParentTwoClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("P2 constructor");
  }

  componentDidMount = () => console.log("P2 did mount");
  componentDidUpdate = () => console.log("P2 did update");
  componentWillMount = () => console.log("P2 will mount");
  componentWillReceiveProps = () => console.log("P2 will receive props");
  componentWillUnmount = () => console.log("P2 will unmount");
  componentWillUpdate = () => console.log("P2 will update");

  render = () => {
    console.log("P2 render");
    return (
      <Switch>
        <Route
          exact
          path={this.props.baseUrl}
          render={() => <h1>P2</h1>}
        />
        <Route
          path={`${this.props.baseUrl}/c1`}
          render={() => <ParentTwoChildOne />}
        />
      </Switch>
    );
  };
}

const ParentTwo = withRouter(({ match: { url } }) => (
  <ParentTwoClass baseUrl={url} />
));

export default ParentTwo;
