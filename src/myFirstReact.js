const cardSubTitle = React.createElement(
  "h6",
  {
    className: "card-subtitle mb-2 text-muted"
  },
  "How to calculate net salary from gross?"
);

const cardTitle = React.createElement(
  "h5",
  {
    className: "card-title"
  },
  "My Salary" // simple child, just a string. :D :D
);

// <input
// class="form-control"
// placeholder="Gross Salary"
// onchange="function()"
// style="margin-top:20px;margin-bottom:20px"
// />
// State full.
class GrossToNetComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grossValue: ""
    };
  }

  render() {
    const grossInput = React.createElement(
      "input",
      {
        className: this.props.className,
        placeholder: "Gross Salary",
        style: {
          marginTop: 20,
          marginBottom: 20
        },
        onChange: event => {
          // if you don't use arrow function, this = undefined.
          // with Arrow function: this = GrossToNetComponent

          const value = event.target.value;
          if (value.match(/^\d*$/)) {
            // We tell React: I see input value is number, now update in it Web UI. Go go.
            // Remember: This will not happen immediately. This setState is Asynchronous.
            this.setState({grossValue: value});
          }
        },
        value: this.state.grossValue // React will check, if grossValue updated, UI will update.
      }
    );

    const netInput = React.createElement(
      "input",
      {
        className: "form-control",
        placeholder: "Net Salary",
        disabled: true,
        style: {
          marginBottom: 20
        },
        value: this.state.grossValue * (1 - 0.08 - 0.01 - 0.015) // Every time gross changed, net auto change.
      }
    );


    const grossToNetBtn = React.createElement(
      "button",
      {
        className: "btn btn-success"
      },
      "GROSS → NET"
    );

    return React.createElement(
      "div",
      null,
      grossInput,
      netInput,
      grossToNetBtn
    );
  }
}


const grossToNetComponent = React.createElement(
  GrossToNetComponent,
  {
    className: "form-control" // className of gross input
  },
  null // no children
);

// cardBody has three children: cardTitle, cardSubTitle, grossToNetComponent
const cardBody = React.createElement(
  "div",
  {
    className: "card-body"
  },
  cardTitle,
  cardSubTitle,
  grossToNetComponent
);

// <div className="card">[cardBody]</div>
const myCard = React.createElement(
  "div",
  {
    className: "card"
  },
  cardBody // The child of myCard
);


// Remember the div id in index.html? here we use js to get the div element
const root = document.getElementById("root");

// Cool, ReactDOM manipulates the HTML DOM, append our components to DOM.
ReactDOM.render(myCard, root);
