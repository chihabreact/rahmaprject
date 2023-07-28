import "./textarea.styles.css"

const TextArea = ({ label, name, type, value, placeHolder, required, onChange, className="" }) => {
  return (
    <>
        <label htmlFor={label}>{label}</label>
        <textarea name={name} required={required} type={type} value={value} placeholder={placeHolder} onChange={onChange}></textarea>
    </>
  )
}

export default TextArea