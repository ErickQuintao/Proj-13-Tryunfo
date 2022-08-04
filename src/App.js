import React from 'react'
import Form from './Form'
import Card from './Card'

class App extends React.Component {
	constructor(props){
		super(props);
			this.onInputChange = this.onInputChange.bind(this);
			this.onSaveButtonClick = this.onSaveButtonClick.bind(this);


			this.state = {
				cardName: '',
				cardDescription: '',
				cardAttr1: 0,
				cardAttr2: 0,
				cardAttr3: 0,
				cardImage: '',
				cardRare: 'normal',
				cardTrunfo: false,
				hasTrunfo: false,
				isSaveButtonDisabled: true,
				Save: []
				
			  };
			
		};
		onInputChange({ target}){
			const {name} = target;
			const value = target.type === 'checkbox' ? target.checked : target.value;
			this.setState({
				[name]: value,
			},()=> this.valid());
		}
		onSaveButtonClick(e){
			e.preventDefault();
			const {
			cardName,
			cardAttr1,
			cardAttr2,
			cardAttr3,
			cardImage,
			cardRare,
			cardTrunfo,
			cardDescription,
			hasTrunfo	
			} = this.state;
			const card = {
				cardName,
				cardAttr1,
				cardAttr2,
				cardAttr3,
				cardImage,
				cardRare,
				cardTrunfo,
				cardDescription,
				hasTrunfo	
				} ;
				this.setState((state) => ({saveCard: [...state.saveCard, card] })),
				() => {this.resetStates()};
		}
				resetStates(){
					const verefica = this.superTrunfo();
					this.setState ({
						cardName: '',
						cardDescription: '',
						cardAttr1: 0,
						cardAttr2: 0,
						cardAttr3: 0,
						cardImage: '',
						cardRare: 'normal',
						cardTrunfo: false,
						hasTrunfo: false,
						isSaveButtonDisabled: true
					});
				}


		valid = ()=> {
			const {
				cardAttr1,
				cardAttr2,
				cardAttr3,
				cardName,
				cardDescription,
				cardImage
			} = this.props;
			const att1= cardAttr1;
			const att2 = cardAttr2;
			 const att3 = cardAttr3;
			const attmax= 90;
			const maxattplus = 210;
			const limit = (att1 <= attmax && att2 <= attmax &&att3 <= attmax);
			const minAtt = (att1 >= 0 && att2 >= 0 &&att3 >= 0);
			const slotVazio = (cardName && cardDescription && cardImage);
			const plusAtts = (att1 + att2 + att3 <= maxattplus);
			if (slotVazio && limit && minAtt && plusAtts){
				this.setState({isSaveButtonDisabled: false});
			} else {
				this.setState({isSaveButtonDisabled: true});
			}
		}
		
	render(){
		return(
			<div>
					<Form 
			cardName={ cardName }
            onInputChange={ this.onInputChange }
            cardDescription={ cardDescription }
			cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ this.superTrunfo() }
			/>

			<Card 
					cardName={ cardName }
					onInputChange={ this.onInputChange }
					cardDescription={ cardDescription }
					cardAttr1={ cardAttr1 }
					cardAttr2={ cardAttr2 }
					cardAttr3={ cardAttr3 }
					cardImage={ cardImage }
					cardRare={ cardRare }
					cardTrunfo={ cardTrunfo }
					hasTrunfo={ this.superTrunfo() }
			/>
			</div>
		);
		}

	
}
    