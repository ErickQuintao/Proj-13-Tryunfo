import React from 'react'
import PropTypes from 'prop-types';
class Form extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		const{onInputChange, cardDescription, cardImage, cardName,cardRare,isSaveButtonDisabled, 
		onSaveButtonClick, cardTrunfo, cardAttr1, cardAttr2, cardAttr3}= this.props;
		return(
			<div>
			<label>
				Nome:
				<input 
				type="text" 
				data-testid='name-input'
				 value={cardName}
				  onChange={onInputChange}
				  ></input>
			</label>
			<label>
				Descrição:
				<textarea
				 data-testid='description-input'
				  value={cardDescription}
				   onChange={onInputChange}
				   ></textarea>
			</label>
			<label>
				attr01
				<input 
				type='number' 
				data-testid='attr1-input'
				value={cardAttr1}
				 onChange={onInputChange}
				 ></input>
			</label>
			<label>
				attr02
				<input
				 type='number' 
				 data-testid='attr2-input' 
				 value={cardAttr2}
				  onChange={onInputChange}
				  ></input>
			</label>
			<label>
				attr03
				<input
				 type='number'
				  data-testid='attr3-input' 
				  value={cardAttr3} 
				  onChange={onInputChange}
				  ></input>
			</label>
			<label>
				Imagem:
				<input
				 type="text" 
				 data-testid="image-input"
				  value={cardImage} 
				  onChange={onInputChange}
				  ></input>
			</label>
			<lavel>
				Raridade:
				<select
				 data-testid='rare-input' 
				 value={cardRare} 
				 onChange={onInputChange}
				 >
					<option>normal</option>
					<option>raro</option>
					<option>muito raro</option>
				</select>
			</lavel>
			<label>
				<input
				 type="checkbox"
				  data-testid='trunfo-input' 
				  value={cardTrunfo} 
				  onChange={onInputChange}
				  ></input>
				Super trybe Tryunfo
			</label>
			<button
			 data-testid='sava-button' 
			 value={isSaveButtonDisabled}
			  onClick={onSaveButtonClick}
			  >Salvar</button>
			  </div>
		);
		}
}
Form.propType ={
	cardName: PropTypes.string.isRequired,
	cardDescription:  PropTypes.string.isRequired,
	cardAttr1:  PropTypes.string.isRequired,
	cardAttr2:  PropTypes.string.isRequired,
	cardAttr3:  PropTypes.string.isRequired,
	cardImage: PropTypes.string.isRequired,
	cardRare:   PropTypes.string.isRequired,
	cardTrunfo: PropTypes.bool.isRequired,
	hasTrunfo: PropTypes.bool.isRequired,
	isSavedButtonDisabled: PropTypes.bool.isRequired,
	onInputChange: PropTypes.func.isRequired ,
	onSaveButtonClick: PropTypes.func.isRequired

}
export default Form