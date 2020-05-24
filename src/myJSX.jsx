// Stateful. We have one state variable, grossValue
class GrossToNetComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grossValue: ""
    };
  }

  handleGrossValueChange = event => { // This is arrow function. Research more about it.
    const value = event.target.value;
    // if value is number, then change the state.
    if (value.match(/^\d*$/)) {

      // if you don't use arrow function, this = undefined.
      // with Arrow function: this = GrossToNetComponent
      this.setState({grossValue: value});
    }
  }

  render() {
    return ( // Remember, these tags are JSX, not HTML. Everything here is javascript magic.
      <div>
        <input
          className={this.props.className}
          placeholder="Gross Salary"
          style={{marginTop: 20, marginBottom: 20}}
          onChange={this.handleGrossValueChange}
          value={this.state.grossValue}
        />
        <input
          className="form-control"
          placeholder="Net Salary"
          disabled={true}
          style={{marginBottom: 20}}
          value={this.state.grossValue * (1 - 0.08 - 0.01 - 0.015)}
        />
        <button className="btn btn-success">GROSS → NET</button>
      </div>
    );
  }

}

// Stateless component. There is no state inside
class MyCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card" style={{backgroundColor: this.state.bgColor}}>
        <div className="card-body">
          <h5 className="card-title">My Salary</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            How to calculate net salary from gross?
          </h6>
          <GrossToNetComponent
            className="form-control"/>
        </div>
      </div>
    );
  }
}

// Equall: class MyCard extends React.Component
/*const MyCard = () => ( // State less
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">My Salary</h5>
      <h6 className="card-subtitle mb-2 text-muted">
        How to calculate net salary from gross?
        {1 > 3 ? "OH OH" : "Right"}
      </h6>
      <GrossToNetComponent
        className="form-control"/>
    </div>
  </div>
);*/

// First look at React Hook.
const MyCardHook = () => {
  const [bgColor, setBgColor] = React.useState("initial");
  const handleBgChange = () => {
    let color = "red";
    if (bgColor === "red") {
      color = "initial";
    }

    setBgColor(color);
  }

  return (
    <div className="card" style={{backgroundColor: bgColor}}>
      <div className="card-body">
        <h5 className="card-title">My Salary</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          How to calculate net salary from gross?
        </h6>
        <GrossToNetComponent
          className="form-control"/>

        <button
          className="btn btn-danger"
          style={{marginTop: 20}}
          onClick={handleBgChange}
        >
          Danger
        </button>
      </div>
    </div>
  );
}

// Remember the div id in index.html? here we use js to get the div element
const root = document.getElementById("root");

// Cool, ReactDOM manipulates the HTML DOM, append our components to DOM.
ReactDOM.render(<MyCardHook/>, root);
