console.log('App is running.....')

const app = {
    title: "Indecision App",
    subtitle: "Hello World",
    options: ['one', 'two']
}
///////////////////
const numbers = [55, 65, 45]

const renderNumbers = () => {
    return numbers.map((number) => {
        return <p>{number}</p>
    })
}
/////////////////
const onFormSubmit = (e) => {
    e.preventDefault()
    const item = e.target.elements.option.value
    app.options.push(item)
    // console.log(app.options)
    renderTemplate()
    e.target.elements.option.value = ''
}
//////////////
const onRemoveAll = () => {
    app.options = []
    console.log(app.options)
    renderTemplate()
}

const appRoot = document.getElementById('app')

//////////////////////
const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle && `Subtitle: ${app.subtitle}`}</p>
            {app.options.length > 0 ? "Here are your options." : "No Options."}
            <p>{app.options.length}</p>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option} >{option}</li>
                    })
                }
            </ol>
            <button onClick={onRemoveAll}>Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name='option' />
                <button name="OptBut">Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot)
}
renderTemplate()