import React, { Component } from 'react';

import './todo-list-item.css';

// компонент класс
export default class TodoListItem extends Component {

    constructor() {
        super();
        this.onLabelCkick = () => {
            console.log(`Done ${this.props.label}`)
        };
    }

    render () {
        const { label, important = false} = this.props; // передача свойств - свойства хранятся в this.props
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className="todo-list-item">
      <span
          className="todo-list-item-label"
          style={style}
          onClick={this.onLabelCkick}  >
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
        );
    }
}
