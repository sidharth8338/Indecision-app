import React from 'react'
import ReactDOM from 'react-dom'

const data = [
    { checked: false, value: 'document 1' },
    { checked: true, value: 'document 2' },
    { checked: true, value: 'document 3' },
    { checked: false, value: 'document 4' },
    { checked: false, value: 'document 5' },
];

const Item = props => (
    <div>
        <input type="checkbox" checked={props.checked} onChange={props.onCheckChange} />
        {props.value}
    </div>
)
class Hello extends React.Component {

    state = {
        items: this.props.items.concat(),
        values: ''
    };


    onCheckChange = (idx) => {
        return () => {
            const items = this.state.items.concat();
            items[idx].checked = !items[idx].checked;
            this.setState({ items });
        }
    }

    totalChecked = () => {
        return this.state.items.filter(props => props.checked).length;
    }

    checkedValue = () => {
        const arr = this.state.items.filter(props => props.checked)
        let result = ''
        for (var i = 0; i < arr.length; i++) {
            result += arr[i].value
        }
        return result
    }

    render() {
        return (
            <div>
                {this.state.items.map((props, idx) => (
                    <Item {...props} key={idx} onCheckChange={this.onCheckChange(idx)} />
                ))}
                Total checked: {this.totalChecked()}
                <p>
                    Total Value: {this.checkedValue()}</p>
            </div>
        );
    }
};

ReactDOM.render(
    <Hello items={data} />,
    document.getElementById('app')
);