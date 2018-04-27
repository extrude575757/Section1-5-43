console.log("App.js isrunning");
var Tony = {
    firstname: 'Tony',
    lastname: 'Range',
    age: '22',
    address: {
        street: '233321243213333 Main St.',
        city: 'Denver',
        state: 'CA.'
    }
};

console.log(Tony.firstname+" "+Tony.lastname+"'s "+Tony.address.city+Tony.address[0]);
var yourName = Tony.firstname+" "+Tony.lastname+"'s "+Tony.address.city;
var template = (<div> <h1> Whats wrong ? </h1> this page
<p><b>Seems Strange!</b></p>
<ol>
    <li>Sqwig Line</li>
    <li>Not Wrong fuck you bitch</li>
</ol>
</div>);
//
    // After babeljs.io 's jsx conversion
    //var template = React.createElement( "h1",null, "something new");
var appRoot = document.getElementById('app');
var firstname = Tony.firstname;
var lastname = Tony.lastname;
var spot = Tony.address.city + " " + Tony.address.state;
var street = Tony.address.street;
function getLocation(theLocation){
    if(theLocation){
        return <p>Location: {theLocation}</p>;
    }
    // undefined is implicity returned if you do not explicitly return it
/*
      else{
        return undefined;
    }
*/ // Is the same thing as leaving it blank 
}
/*
    Terranerry operator 
    Syntax BOOL ? : if argument passes use correct condition else use other
    true ? 'Andrew' : 'Annonmous'; 
*/
/*
    undefined booleans & null are ignored automatically by jsx if only true or null or false 
    is placed nothing shows up
*/
const app = {
    title: 'The Hitman',
    subtitle: 'Doin it with stompers on',
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    const o = e.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log("onform submit" + app.options[0]);
        renderTime();
    }
    
};

const removeButton = () => {
    console.log("remove button");
    
    app.options = [];
    renderTime();
};
const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
};

const numbers = [19, 80, 10, 480];
const renderTime = () =>{
    const appTemp = (<div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p><button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button></p>
        <ol>
        {

            /*
            numbers.map((number) => {
                return <p key={number}>Number is: {number} </p>
            })
            */
            app.options.map((number) => {
                return <li key={number}>{number} </li>
            })

        }
        </ol>
        <div>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
        <button disabled={app.options.length === 0} onClick= {removeButton}>Remove All</button>
        </form>
        </div>
        </div>);
    ReactDOM.render(appTemp, appRoot);
};
Tony.address2 = { street: '33 secondst' };
console.log(Tony.address.street + " " + Tony.address2);
renderTime();