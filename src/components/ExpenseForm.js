import React from 'react';

export default class ExpenseForm extends React.Component {

    state = {
        description: '',
        amount: 0,
        createdAt: undefined,
        note:''
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({description})
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        this.setState({amount})
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState({note})
    };

    render() {
        return (
            <div>
                <input type='text' placeholder='Description' autoFocus value={this.state.description}
                       onChange={this.onDescriptionChange.bind(this)}
                />
                <input type='number' placeholder='Amount' value={this.state.amount}
                       onChange={this.onAmountChange.bind(this)}
                />
                <textarea placeholder='Add note for the Expense'value={this.state.note}
                          onChange={this.onNoteChange.bind(this)}/>
                <button>Add Expense</button>
                {this.state.description}
            </div>
        )
    }
}