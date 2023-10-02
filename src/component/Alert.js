// Jay Bhagvan 

import React from 'react'

export default function Alert(props) {
    let capitalized = (word) => {
        let text = word.toLowerCase();
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    return (
        props.alert && <div className={`alert container alert-${props.alert.type} alert-dismissible fade show my-3`} role="alert">
            <strong>{capitalized(props.alert.type)} : </strong>{props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}
