
class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            choice: false
        };
        this.showDetails = this.showDetails.bind(this);
    }
    showDetails(){
        console.log("showdetails!!");
    
this.setState((prevState) => {
    return{
            choice: !prevState.choice
    }
        });
    }
        render() {
            console.log("insde");
            return ( <div>
                <h1> Title'sTitle </h1>
                <h2>Wtf</h2>
                <p><button onClick={this.showDetails}>{this.state.choice ? 'Hide Choices' : 'Show! Choices'}</button></p>
                {
                    this.state.choice && ( <p>This is text showing up as true for choice</p>)
                }

                </div>);
            }
        
        }

        ReactDOM.render( <Visibility /> , document.getElementById('app'));

        
        