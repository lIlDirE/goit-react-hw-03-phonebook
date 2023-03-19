import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';

import { nanoid } from 'nanoid';
import SearchFilter from './SearchFilter/SearchFilter.jsx';

// import {resetState} from './ContactForm/ContactForm'

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleClick () {
	console.log('Button clicked in parent component');
  }

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
		
    if(this.state.contacts.find(contact => newContact.name.toLowerCase() === contact.name.toLowerCase())){
		alert(`${name} is already in contacts`)
	} else{
		this.setState(prevState => ({contacts: [newContact, ...prevState.contacts]}))
	}};

  hendeleClickDelete = evt => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== evt),
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: ''
    })
  };

  componentDidMount(){
	const contact = localStorage.getItem('contacts');
    const parseContacs = JSON.parse(contact);
	if(parseContacs){
		this.setState({contacts: parseContacs})
	} 
  }

  componentDidUpdate(_, prevState) {
	if(prevState !== this.state.contacts){
		localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
	}
  }

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <div>

        <ContactForm onSubmit={this.addContact} onResetArr={this.state.contacts}/>

        <SearchFilter
          OnChangeFilter={this.changeFilter}
          valueFilter={this.state.filter}
        />
        <ContactList
          contacts={this.filterContacts()}
          remove={this.hendeleClickDelete}
        />
      </div>
    );
  }
}
