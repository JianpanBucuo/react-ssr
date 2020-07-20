import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginEvent, logOutEvent } from '../store/header/actions'
class Header extends Component {

    render () {
        const { handleLogin, handleLogOut } = this.props
        return (
            <Fragment>
                <Link to='/'>首页</Link>
                <br />
                {

                    this.props.login ?
                        <Fragment>
                            <Link to='/translation'>翻译列表</Link>
                            <div onClick={handleLogOut}>退出</div>
                        </Fragment>
                        : <div onClick={handleLogin}>登录</div>
                }
            </Fragment >
        )
    }

}
const mapStateToProps = (state) => {
    return {
        login: state.header.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin () {
            dispatch(loginEvent())
        },
        handleLogOut () {
            dispatch(logOutEvent())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)