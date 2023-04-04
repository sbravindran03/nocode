import React from 'react';

function Settings() {
    return ( <
        div >
        <
        h2 > Settings < /h2> <
        form >
        <
        label htmlFor = "text-color" > Text Color: < /label> <
        input type = "text"
        id = "text-color"
        name = "text-color" / >

        <
        label htmlFor = "background-color" > Background Color: < /label> <
        input type = "text"
        id = "background-color"
        name = "background-color" / >
        <
        /form> <
        /div>
    );
}

export default Settings;