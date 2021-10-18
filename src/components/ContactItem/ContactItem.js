import { Component } from 'react'
import s from './ContactItem.module.css'

export class ContactItem extends Component {
  handleClick = (e) => this.props.deleteContact(e.target.name)

  render() {
    const { id, name, number } = this.props.contact
    return (
      <li key={id}>
        {name}: {number}
        <button
          className={s.btnDel}
          type="button"
          name={name}
          onClick={this.handleClick}
        >
          Delete
        </button>
      </li>
    )
  }
}
