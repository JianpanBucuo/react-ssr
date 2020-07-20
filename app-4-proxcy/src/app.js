import React from 'react'
import Header from './components/Header'
import { renderRoutes } from 'react-router-config'
import { actions } from './store/header'
import { connect } from 'react-redux'
const App = (props) => {
    return (<div>
        <Header />
        {renderRoutes(props.route.routes)}
    </div>)
}
App.loadData = (store) => {
    return store.dispatch(actions.getHeaderInfo())
}
const mapStateToProps = (state) => {
    return {
        login: state.header.login
    }
}
const mapDispatchToProps = () => {

}
export default connect(mapStateToProps)(App)
