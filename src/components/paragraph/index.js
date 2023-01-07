const ColoredParagraph = ({children, textColor}) => <p style={{color: textColor}}>{children.toUpperCase()}</p>

export { ColoredParagraph }