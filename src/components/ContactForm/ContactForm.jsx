import { Component } from "react";
import PropTypes from 'prop-types';

import { FormContact, LabelContact, FormDiv, FormInput, Label } from './ContactForm.styled';

export default class ContactForm extends Component {
	state = {
		name: '',
		number: ''
	}

	handleSubmitForm = (e) => {
		e.preventDefault()
		const form = e.currentTarget
		const {name, number} = this.state
		this.props.onSubmit({ name, number });
		form.reset()
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
		<LabelContact>Name</LabelContact>
		<FormInput
		type="text"
		name="name"
		onInput={this.handleChange}
		pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
		title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
		required
		/>
		<LabelContact>Phone</LabelContact>
		<FormInput
		type="tel"
		name="number"
		onInput={this.handleChange}
		pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
		title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
		required
		/>
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
  };