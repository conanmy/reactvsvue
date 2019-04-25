import React from 'react'
import PropTypes from 'prop-types'
import { MyRouterContext } from './Provider'

export default class Route extends React.Component {
    static propTypes = {
        path: PropTypes.string.isRequired,
        exact: PropTypes.bool,
        component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }

    render() {
        let RouteComponent = this.props.component
        console.log(RouteComponent)
        return (
            <MyRouterContext.Consumer>
            {
                (location) => {
                    console.log(location)
                    return <RouteComponent match={{params: {}}} />
                }
            }
            </MyRouterContext.Consumer>
        )
    }
}