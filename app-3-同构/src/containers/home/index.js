import React, { Component } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeListAction } from '../../store/home/actions'
class Home extends Component {
    componentDidMount () {
        this.props.getHomeList()
    }
    getList () {
        const { newsList } = this.props
        return newsList.map(v => {
            return (
                <p key={v.id}>{v.title}</p>
            )
        })
    }
    render () {
        return (<div>
            <Header />
            <h2>This is {this.props.name}</h2>
            {
                this.getList()
            }
            <button onClick={() => { alert('aaa') }}>按钮</button>
        </div>)
    }
}
Home.loadData = (store) => {
    return store.dispatch(getHomeListAction())
    //负责在服务器渲染之前，把这个路由需要的数据提前加载
}
const mapStateToProps = (state) => {
    return {
        name: state.home.name,
        newsList: state.home.newsList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getHomeList () {
            dispatch(getHomeListAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
