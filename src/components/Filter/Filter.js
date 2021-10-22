import { v4 as uuid } from 'uuid'
import s from './Filter.module.css'

export default function Filter({ newFilter }) {
  const findNameId = uuid()
  const handleFilter = (e) => newFilter(e.target.value.toLowerCase())

  return (
    <div className={s.contacts}>
      <label htmlFor={findNameId}>Find contact by name</label>
      <input
        type="text"
        name="findName"
        id={findNameId}
        onChange={handleFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </div>
  )
}
