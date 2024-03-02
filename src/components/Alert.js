import React from 'react'
 
export default function Alert(props) {
    const firstCharCapitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{firstCharCapitalize(props.alert.type)}: </strong> {props.alert.msg}
        </div>
    )
}
 