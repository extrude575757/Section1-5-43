const obj = {
    name: 'Vikeram',
    getName(){
        return this.name;
    }
}
const getName = obj.getName();
const getNameBindFuncName = obj.getName.bind(obj.getName);// Gives the name of the function
const getNameBind = obj.getName.bind(obj);
const changeName = obj.getName.bind({name: 'NickStixs'});
console.log(changeName());
console.log(getNameBind());

class Header extends React.Component {
    render() {
        
        console.log(this.props);
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subTitle}</h2>
            <h3>{this.props.quote}</h3>
            </div>
        );
        
        
    }
}
class IndecisionApp extends React.Component {
    render() {
        const title = '!Indecision App';
        const subTitle = 'Put your life in the hands of a computer';
        const quote = <i> Never Know What to do </i>;
        const options = ['thing 1','thing 2', 'thing 3'];
        return (
            <div>
            <Header title={title} subTitle={subTitle} quote={quote} />
            <Action />
          <Options option1={options[0]} options={options} />
          <Option />
          <AddOptions />
            </div>
        );
    }
}
class Action extends React.Component {
    handlePick(){
        alert("Hello picked this");
    }
    render() {
        return (
        <div>
        <button onClick={this.handlePick}>What should I do?</button>
        </div>
        );
        
    }
}

class Options extends React.Component {
    constructor(props){
// If we override the constructore and bind this to removeAll we won't have to call bind(this) every time we use the function
          super(props); // Important to use props as arg & pass to super
          this.removeAll = this.removeAll.bind(this); 
    }
    removeAll(){
        console.log(this.props.options);
        alert("removed all");
    }
// Bind this with the removeAll function makes sure the render this instance has the 
// exact same this binding as the removeAll function
// onClick={this.removeAll.bind(this)}
    render() {

        return (
            <div>
            <button onClick={this.removeAll}>Remove All</button>
            {
                /*
                this.props.options.map( (option) => {
                    return <p key={option}>{option}</p>
                })
                */
                this.props.options.map( (option) => <Option key={option} optionText={option} />)
                }
            
            </div>
        );
    }
}
class Option extends React.Component {
    render() {
        return (
            <div>
            Option: {this.props.optionText}
            </div>
        );
    }
}

class AddOptions extends React.Component {
    onFormSubmit(e){
        e.preventDefault();
    const option = e.target.elements.option.value.trim(); // trim makes it so any spaces before the first letter is deleted
    const o = e.value;
    if(option){
       // app.options.push(option);
        
        alert(option);
        e.target.elements.option.value = '';
    }
        
    }
    
    render() {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>
            <input type="text" name="option"/>
            <button>Submit</button>
            </form>
            Add Options Component here
            </div>
        );
    }
}

const jsx = (
    <div>
    
    </div>
);
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));