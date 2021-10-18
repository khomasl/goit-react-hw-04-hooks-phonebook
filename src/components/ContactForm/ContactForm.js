import { Component } from 'react'
import { v4 as uuid } from 'uuid'
import s from './ContactForm.module.css'

const INITIAL_STATE = {
  name: '',
  number: '',
}
export class ContactForm extends Component {
  nameId = uuid()
  numberId = uuid()

  state = { ...INITIAL_STATE }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, number } = this.state
    const id = uuid()
    this.props.addNewContact({ id, name, number })
    this.resetForm()
  }

  resetForm = () => this.setState({ ...INITIAL_STATE })

  render() {
    const { name, number } = this.state
    const { handleChange, handleSubmit, nameId, numberId } = this

    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor={nameId}>Name</label>
        <input
          type="text"
          name="name"
          id={nameId}
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />

        <label htmlFor={numberId}>Number</label>
        <input
          type="tel"
          name="number"
          id={numberId}
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />

        <button className={s.btnForm} type="submit">
          Add contact
        </button>
      </form>
    )
  }
}
