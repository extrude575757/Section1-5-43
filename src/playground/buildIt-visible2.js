const idTag = document.getElementById('app');
let  choice = false;
const details = {
    on: 'This is a paragraph with Text & the details',
    off:''

};

const showDetails = () =>{

    choice = !choice;
    renderApp();
};

const renderApp  = () =>{

    const temple = (
        <div>
        <h1>Visibility Toggle</h1>
        <p><button onClick={showDetails}>{choice ? 'Hide details' : 'Show details'}</button></p>
        <p>{choice ? details.on : details.off}</p>
        {
            choice && (
                <p>Hey This is some details Done the instructors way Yodals.</p>
            )
        }
        </div>
    );
    
    ReactDOM.render(temple,idTag);
};
renderApp();


