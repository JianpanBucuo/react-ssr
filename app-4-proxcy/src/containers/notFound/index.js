import React, { Component, Fragment } from 'react'

class NotFound extends Component {
    UNSAFE_componentWillMount () {
        const { staticContext } = this.props
        console.log(this.props)
        staticContext && (staticContext.notFound = true)
    }
    render () {
        return (
            <Fragment>
                <p>404,Page Not Found</p>
            </Fragment>
        )
    }
}
export default NotFound