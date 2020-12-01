
import React from 'react';

function InsultItem(props) {
    console.log(props);

    return (
        <li>{props.insult} - {props.play}</li>
    )
}

export default InsultItem;