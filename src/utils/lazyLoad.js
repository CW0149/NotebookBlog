import React from 'react'

class Bundle extends React.PureComponent {
    componentWillMount() {
        this.load(this.props)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }
    load = (props) => {
        this.setState({
            mod: null
        })
        props.load().then((mod) => {
            this.setState({
                mod: mod.default || mod
            })
        })
    }
    render() {
        return this.props.children(this.state.mod)
    }
}

const lazyLoad = loadComponent => props => (
    <Bundle load={loadComponent}>
        { Comp => (Comp ? <Comp {...props} /> : <div>LOADING</div>) }
    </Bundle>
)

export default lazyLoad