import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTranslationListEvent } from '../../store/translation/actions'
import { Redirect } from 'react-router-dom'
class Translation extends Component {
    componentDidMount () {
        this.props.getTransitionList()
    }
    render () {
        const login = this.props.login
        if (login) {
            return (
                <div>
                    <h2>This is translation</h2>
                    {this.getList()}
                </div>
            )
        } else {
            return <Redirect to='/'></Redirect>
        }

    }
    getList () {
        const { list } = this.props
        return list.map(v => {
            return (
                <div key={v.id}>{v.title}</div>
            )
        })
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.translation.translationList,
        login: state.header.login

    }
}
Translation.loadData = (store) => {
    return store.dispatch(getTranslationListEvent())
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTransitionList () {
            dispatch(getTranslationListEvent())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Translation)
