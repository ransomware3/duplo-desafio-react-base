const Button = ({label}) => {
    return(
        <button onClick={() => window.alert(`A label desse botão é ${label}`)}>{label}</button>
    )
}

export default Button