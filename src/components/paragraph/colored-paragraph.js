const ColoredParagraph = ({title, textColor, upperText}) => {
    return(
        <p style={{color: textColor, textTransform: upperText}}>{title}</p>
    )
}

// Paragraph.defaultProps = {
//     content: 'wellcome to the code'
// }

export default ColoredParagraph