import React,{useState} from 'react';

function Clock(){
    var date = new Date().toLocaleTimeString();
    var [state,setState] = useState(date);

    setInterval(() => {setState(
        new Date().toLocaleTimeString(),
    );}, 1000);


    



    return(<div>
        <h1>{state}</h1>
        
    </div>);
}

export default Clock;