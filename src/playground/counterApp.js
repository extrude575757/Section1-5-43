class Counter extends React.Component {
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.resetAll = this.resetAll.bind(this);
        this.state = {
            count: 0
        };
    }
    addOne(){
        this.setState((prevState) =>{
            return {
                count: prevState.count + 1
            };
        });
    }
    minusOne(){
        this.setState((prevState) =>{
            return {
                count: prevState.count - 1
            };
        });
    }
    resetAll(){
        this.setState(() =>{
            return{
                count: 0
            };
        });
    }
    render(){
        return (
            <div>
            <h1>Count:{this.state.count}</h1>
            <button onClick={this.minusOne}>minus</button>
            <button onClick={this.addOne}>add</button>
            <button onClick={this.resetAll}>reset</button>
            </div>
        );
    }
}
 // The default prop to set the this.state prop value in constructor
// Counter.defaultProps = {
//     count: 0
// };
ReactDOM.render(<Counter />,document.getElementById('app'));
































/*
let c = 0;
const addOne = () => {
    c++;
    renderTheApp();
    console.log("add1"+c);
};
const minusCount = () => {
    c--;
    renderTheApp();
    console.log("minusing");
};
const reset = () => {
    c = 0;
    renderTheApp();
    console.log("reseting");
};
const appRoot = document.getElementById('app');
function renderApp() {

    const  appTemplate = (
    <div>
        <h1>Count: {c}</h1>
       
        <button onClick={addOne}>+1</button> 
        <button onClick={minusCount}>-1</button>
        <button onClick={reset}>Reset</button>
        </div>
        );
    ReactDOM.render(appTemplate, appRoot);
};
const renderTheApp = () => {
    const  appTemp = (
        <div>
            <h1>Count: {c}</h1>
           
            <button onClick={addOne}>+1</button> 
            <button onClick={minusCount}>-1</button>
            <button onClick={reset}>Reset</button>
            </div>
            );
        ReactDOM.render(appTemp, appRoot);

};
function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, appRoot);
  };
  
  //setInterval(tick, 1000);
  
  
renderTheApp();
// can call whole html template to console with : console.log(appTemplate2);
*/

