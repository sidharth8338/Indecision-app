class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleOnClick = this.handleOnClick.bind(this)
        this.state = {
            isClicked: false
        }
    }
    handleOnClick() {
        this.setState((ps) => {
            return {
                isClicked: !ps.isClicked
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleOnClick}>
                    {
                        this.state.isClicked ? "Hide details" : "Show details"
                    }
                </button>
                {this.state.isClicked && <p>Here is your Hidden secret which is fucking nothing...</p>}
            </div>
        )

    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))



// console.log('App is not walking....')

// const text = "Here is your Hidden secret which is fucking nothing..."

// let clicked = false
// const onClickFunc = (e) => {
//     clicked = !clicked
//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onClickFunc}>
//                 {
//                     clicked ? "Hide daetails" : "Show details"
//                 }
//             </button>
//             {clicked && <p>{text}</p>}
//         </div>
//     )

//     ReactDOM.render(template, appRoot)
// }


// const appRoot = document.getElementById('app')

// render()