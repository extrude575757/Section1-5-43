class IndecisionApp extends React.Component {
  constructor (props) {
    super(props);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.pickOptions = this.pickOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  componentDidMount(){
    /// Localstorage only works with strings & will convert numbers to strings
    // To fetch objects back from local storage, one can use json to convert objects to strings
    // Then convert them back from strings with stringify back to objects with parse
    // localStorage.setItem('name','Andrew');
    // const json = JSON.stringify({age: 28});
    // console.log(JSON.parse(json));
    // console.log('Parsing a json object age is '+JSON.parse(json).age);
    // console.log("Mountaed"+localStorage.getItem('name'));

try{
  const json = localStorage.getItem('options');
  const options = JSON.parse(json);
  if (options){
    this.setState(() => ({options}));
  }
} catch (e){
  //do nothing

}

  

}
  componentDidUpdate(prevProps,prevState){
    if(prevState.options.length !== this.state.options.length){
      console.log("Updated + Saving Data!");
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
    }
  }
  componentWillUnmount(){
    console.log("unmounted");
  }
  deleteOptions () {
    console.log("deleteoptions");
    this.setState(() => ({  options: []})); 
  }
  handleDeleteOption(optionToRemove) {
    console.log("deleted" + optionToRemove);
    this.setState((prevState) => ({
      options: prevState.options.filter((option) =>  optionToRemove !== option)}));
}
  handleAddOption (option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
    
  }
  pickOptions () {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
    console.log(randomNum);
  }
  render () {

    const subTitle = 'Put your life in the hands of a computer';
    const quote = <i>Never Know What to do</i>;

    return (
      <div>
        <Header    quote={quote} />
        <Action hasOptions={this.state.options.length > 0} pickOptions={this.pickOptions} />
        <Options option1={this.state.options[0]} options={this.state.options} 
        deleteOptions={this.deleteOptions} handleDeleteOption={this.handleDeleteOption} />
        <Option />
        <AddOptions handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
////////// The default prop to set the this.state prop value in constructor
// IndecisionApp.defaultProps = {
//     options: []
// };

const Header = (props) => {
    return (
        <div>
          <h1>{props.title}</h1>
          {props.subTitle && <h2>{props.subTitle}</h2> }
          <h3>{props.quote}</h3>
        </div>
      );
};

Header.defaultProps = {
    title: '!Indecision App'
};



const Action = (props) => {
    return (
        <div>
            <button onClick={props.pickOptions} disabled={!props.hasOptions}>
            What should I do?
            </button>
        </div>
    );
};


const Options = (props) => {
    return (
        <div>
          <button onClick={props.deleteOptions}>
            Remove All
          </button>
          {props.options.length === 0 && <p>Please Add Options, Sir.</p>}
          {
       props.options.map((option) => <Option key={option} 
       optionText={option} handleDeleteOption={props.handleDeleteOption} />
       )}
        </div>
      );
};

const Option = (props) => {
    return (
        <div>
          {props.optionText}
          <button 
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
          >
          Delete</button>
        </div>
      );
};

class AddOptions extends React.Component {
  constructor (props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
   
  handleAddOption (e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    console.log('error' + error);
    this.setState(() => ({error}));
    if (!error){
      e.target.elements.option.value = '';
    }
  }

  render () { 
    return (
      <div>
        {this.state.error && <p>
                               {this.state.error}
                             </p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>
            Add Option
          </button>
        </form>
        Add Options Component here
      </div>
    );
  }
}

/*
**Stateless Functional Component
*/ // A class based component's prop is defined with this.props.name 
///  While stateless functional component is  defined by props.name
/// We cannot use state inside these components WE can indeed use props to pass data
// These are faster than class based react components because there is no over heard from code concerned with state
// It gets the jsx & returns it. There is no overhead. These said to be easier to read, write, & test
// const User = (props) =>{
//     return (
//         <div>
//         <p>Name: {props.name}</p> 
//         <p>Age: {props.age *(4+3)}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp options={[]} />, document.getElementById('app'))
