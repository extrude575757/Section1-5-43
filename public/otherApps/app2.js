console.log("App.js is running");
var Tony = {
    firstname: 'Tony',
    lastname: 'range',
    address: {
        street: '2333 main st.',
        city: 'denver',
        state: 'CA'
    }
};
console.log(Tony.firstname+" "+Tony.lastname+"'s "+Tony.address.city+Tony.address[0]);
var yourName = Tony.firstname+" "+Tony.lastname+"'s "+Tony.address.city;
var template = <div> <h1> Whats wrong ? </h1> this page
<p><b>Seems Strange!</b></p>
<ol>
    <li>Sqwigly Line</li>
    <li>Not Wrong fuck you bitch</li>
</ol>
 </div> ;
    // After babeljs.io 's jsx conversion
    //var template = React.createElement( "h1",null, "something new");
var appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);