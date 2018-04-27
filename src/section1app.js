console.log("App.js is running");
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
    <li>Sqwigly Line</li>
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
var app = {
    title: 'The Hitman',
    subtitle: 'Doin it with stompers on',
    options: ['One','Two']
};
var appTemplate = (<div>
<h1>{app.title}</h1>
{app.subtitle && <p>Subtitle: {app.subtitle}</p>}
<p>{app.options.length > 0 ? 'Here is your options:' : 'There are no options here sir'}</p>
</div>);
var template2 = (<div>
<h1>Hi {Tony.firstname ? firstname.toUpperCase() +' ' + Tony.lastname : 'No Name' }  </h1>
 {Tony.age && Tony.age >= 18 && <p>Age: {Tony.age}</p>}
 {getLocation(Tony.address.street)} 
<p><b>{spot}</b></p>
</div>);
 
Tony.address2 = { street: '33 secondst' };
console.log(Tony.address.street + " " + Tony.address2);
ReactDOM.render(appTemplate, appRoot);