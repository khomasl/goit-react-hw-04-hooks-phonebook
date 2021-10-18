import { Component } from 'react'
import { ContactItem } from '../ContactItem/ContactItem'

export class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props
    return (
      <ul>
        {contacts.map((contact) => (
          <ContactItem contact={contact} deleteContact={deleteContact} />
        ))}
      </ul>
    )
  }
}
