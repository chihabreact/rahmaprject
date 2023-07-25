import "./input.styles.css"

const Input = ({ label, name, type, value, placeHolder, required, onChange }) => {
  console.log({ label, name, type, value, placeHolder, required, onChange })
  return (
    <div className="input-container">
        <label htmlFor={label}>{label}</label>
        <input name={name} required={required} type={type} value={value} placeholder={placeHolder} onChange={onChange}></input>
    </div>
  )
}

export default Input