const idTag = document.getElementById('app');
const choice = true;
const details = {
    on: 'This is a paragraph with Text & the details',
    off:''

};
const hideDetails = () =>{
    console.log("hiding details");
    const temple = (
        <div>
        <h1>Visibility Toggle</h1>
        <p><button onClick={showDetails}>Show Details</button></p>
        </div>
    );
    
    ReactDOM.render(temple,idTag);
    
    
};
const showDetails = () =>{

    
        const temple = (
            <div>
            <h1>Visibility Toggle</h1>
            <p><button onClick={hideDetails}>Hide Details</button></p>
            <p>{details.on}</p>
            </div>
        );
        ReactDOM.render(temple,idTag);

    
   
    
    

};

const renderApp  = () =>{

    const temple = (
        <div>
        <h1>Visibility Toggle</h1>
        <p><button onClick={showDetails}>Show Details</button></p>
        </div>
    );
    
    ReactDOM.render(temple,idTag);
};
renderApp();


