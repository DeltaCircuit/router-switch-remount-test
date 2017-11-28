import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import ParentOneChildOne from "./ParentOneChildOne";

class ParentOneClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("P1 constructor");
  }

  componentDidMount = () => console.log("P1 did mount");
  componentDidUpdate = () => console.log("P1 did update");
  componentWillMount = () => console.log("P1 will mount");
  componentWillReceiveProps = () => console.log("P1 will receive props");
  componentWillUnmount = () => console.log("P1 will unmount");
  componentWillUpdate = () => console.log("P1 will update");

  render = () => {
    console.log("P1 render");
    return (
      <Switch>
        <Route exact path={this.props.baseUrl} render={() => <h1>P1</h1>} />
        <Route
          path={`${this.props.baseUrl}/c1`}
          render={() => <ParentOneChildOne />}
        />
      </Switch>
    );
  };
}

const ParentOne = withRouter(({ match: { url } }) => (
  <ParentOneClass baseUrl={url} />
));

export default ParentOne;
