import ColoredParagraph from './components/paragraph/colored-paragraph.js';
import Button from './components/button/button.js';

function App(){
	return (
		<>
			<ColoredParagraph upperText={'uppercase'} textColor={'green'} title={'wellcome to the my code'}>
			</ColoredParagraph>

			<Button label={'GO INTZ'}/>
		</>
	)
}

export default App;