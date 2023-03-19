import { Component } from "react";
import PropTypes from 'prop-types';

import { FormContact, LabelContact, FormDiv, FormInput, Label } from './ContactForm.styled';

export default class ContactForm extends Component {
	state = {
		name: '',
		number: ''
	}

	resetForm = () => {
		this.setState({
		  name: '',
		  number: ''
		})
	}

	  addedContact = (newContact) => {
		console.log(`New contact added: ${newContact}`);
		// ваша логика добавления контакта в дочернем компоненте

	  }

	handleSubmitForm = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state);
		const temp = this.props.onResetArr.filter( contact => 
			contact.name.toLowerCase().includes(this.state.name.toLowerCase()))

		if(temp.length === 0){
			this.resetForm()
		}		
	}

	handleChange = evt => {
		const {value, name} = evt.currentTarget
		this.setState({ [name]: value})
	}

render() {
	return (
		<Label><h1>Phonebook</h1>
		<FormContact onSubmit={this.handleSubmitForm}>
		
		<FormDiv>
		<LabelContact>
			Name
			<FormInput
			type="text"
			name="name"
			value={this.state.name}
			onInput={this.handleChange}
			pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
			title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
			required
			/>
		</LabelContact>

		<LabelContact>
			Phone
			<FormInput
			type="tel"
			name="number"
			value={this.state.number}
			onInput={this.handleChange}
			pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
			title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
			required
			/>
		</LabelContact>
		
		<button name="submit" type="submit">
		Add contact
		</button>
		</FormDiv>
		</FormContact>
		</Label>
	)}
}

ContactForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
  }