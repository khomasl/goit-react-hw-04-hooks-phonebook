import './App.css'
import { Component } from 'react'
import { ContactForm } from './components/ContactForm/ContactForm'
import { ContactList } from './components/ContactList/ContactList'
import { Filter } from './components/Filter/Filter'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts')
    const parseContacts = JSON.parse(localContacts)
    if (parseContacts) {
      this.setState({ contacts: parseContacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  isContact = (name) =>
    this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    )

  addNewContact = (contact) =>
    !this.isContact(contact.name)
      ? this.setState((prevState) => ({
          contacts: [...prevState.contacts, contact],
        }))
      : alert(`${contact.name} is already in contact`)

  newFilter = (filter) => this.setState({ filter })

  filteredContactsByName = () => {
    const { contacts, filter } = this.state
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    )
  }
  idContact = (name) => this.state.contacts.indexOf(this.isContact(name))

  deleteContact = (name) => {
    const id = this.idContact(name)
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts.slice(0, id),
        ...prevState.contacts.slice(id + 1),
      ],
    }))
  }

  render() {
    const {
      addNewContact,
      newFilter,
      filteredContactsByName,
      deleteContact,
    } = this

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm addNewContact={addNewContact} />

        <h2>Contacts</h2>
        <Filter newFilter={newFilter} />
        <ContactList
          contacts={filteredContactsByName()}
          deleteContact={deleteContact}
        />
      </div>
    )
  }
}

export default App
