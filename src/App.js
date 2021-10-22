import './App.css'
import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter'

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? []
  })
  const [filter, setFilter] = useState('')

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const findContact = (name) => {
    const normName = name.toLowerCase()
    return contacts.find((contact) => contact.name.toLowerCase() === normName)
  }

  const addNewContact = (contact) =>
    !findContact(contact.name)
      ? setContacts([...contacts, contact])
      : alert(`${contact.name} is already in contact`)

  const filteredContactsByName = () =>
    contacts.filter((contact) => contact.name.toLowerCase().includes(filter))

  const deleteContact = (name) => {
    const id = contacts.indexOf(findContact(name))
    setContacts([...contacts.slice(0, id), ...contacts.slice(id + 1)])
  }

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />

      <h2>Contacts</h2>
      <Filter newFilter={setFilter} />
      <ContactList
        contacts={filteredContactsByName()}
        deleteContact={deleteContact}
      />
    </div>
  )
}
