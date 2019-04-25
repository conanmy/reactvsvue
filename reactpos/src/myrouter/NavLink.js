import React from 'react'
import { history } from './Provider'

export default function(props) {
    return (
        <a onClick={() => history.push(props.to)}>{props.children}</a>
    )
}