class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            count: props.count
        }
    }
    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    reset() {
        this.setState(() => {
            return {
                count: this.props.count
            }
        })
    }
    componentDidMount() {
        const data = localStorage.getItem('count')
        const count = JSON.parse(data)
        this.setState({ count })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState)
        const json = JSON.stringify(this.state.count)
        localStorage.setItem('count', json)
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'))


// let count = 0

// const addOne = () => {
//     // console.log('This will Add one to the count.')
//     count += 1
//     renderCounterApp()
// }

// const minusOne = () => {
//     // console.log('This will minus one to the count.')
//     count--
//     renderCounterApp()
// }

// const reset = () => {
//     // console.log('This will reset to the count.')
//     count = 0
//     renderCounterApp()
// }

// const appRoot = document.getElementById('app')


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()