import s from './ContactItem.module.css'

export default function ContactItem({ contact, deleteContact }) {
  const { id, name, number } = contact
  const handleClick = (e) => deleteContact(e.target.name)

  return (
    <li key={id}>
      {name}: {number}
      <button
        className={s.btnDel}
        type="button"
        name={name}
        onClick={handleClick}
      >
        Delete
      </button>
    </li>
  )
}
