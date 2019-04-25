import React, { useState, useEffect } from 'react'
import { createBrowserHistory } from 'history'
export const MyRouterContext = React.createContext()

export const history = createBrowserHistory()
export default function(props) {
    let [ location, setLocation ] = useState()

    useEffect(() => {
        return history.listen((location, action) => {
            setLocation(location)
        })
    })

    return (
        <MyRouterContext.Provider value={location}>
            {props.children}
        </MyRouterContext.Provider>
    )
}