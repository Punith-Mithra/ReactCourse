import React from 'react'

export default (props) => {
    return (
        <div>
            <span> {props.description}</span>
            <span> {props.amount}</span>
            <span> {props.createdAt.toLocaleDateString()}</span>
        </div>
    )
}