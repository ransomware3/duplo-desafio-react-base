import { ColoredParagraph } from './components/paragraph';
import { Button } from './components/button';

function App(){
	return (
		<>
			<ColoredParagraph textColor={'green'}>wellcome to the my code</ColoredParagraph>

			<Button label={'GO INTZ'}/>
		</>
	)
}

export default App;