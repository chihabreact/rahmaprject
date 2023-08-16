import "./button.styles.css"

const Button = ({ className, type, onClick}) => {
  return (
    <button className={className} type={type} onClick={onClick}>LOGIN</button>
  )
}

export default Button