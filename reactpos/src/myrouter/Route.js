import React from 'react'
import PropTypes from 'prop-types'
import { MyRouterContext } from './Provider'
const pathToRegexp = require('path-to-regexp')

export default class Route extends React.Component {
    static propTypes = {
        path: PropTypes.string.isRequired,
        exact: PropTypes.bool,
        component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }

    render() {
        const that = this;
        return (
            <MyRouterContext.Consumer>
            {
                (location) => {
                    const RouteComponent = that.props.component
                    const regexp = pathToRegexp(that.props.path)
                    if (regexp.exec(location.pathname)) {
                        return <RouteComponent match={{params: {}}} />
                    } else {
                        return null;
                    }
                }
            }
            </MyRouterContext.Consumer>
        )
    }
}