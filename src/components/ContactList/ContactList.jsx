import PropTypes from 'prop-types';
import ContactListElement from '../ContactListElement/ContactListElement'

const ContactList = ({remove, contacts}) => { 
	return(
		<li>
		{contacts.map(({ id, name, number }) => (
		  <ContactListElement
			id={id}
			name={name}
			number={number}
			onDeleteContact={remove}
			key={id}
		  />
		))}
	  </li>
	)
}

ContactList.propTypes = {
	remove:PropTypes.func.isRequired,
   contacts: PropTypes.arrayOf(
	PropTypes.shape({
	 name: PropTypes.string.isRequired,
	 id:PropTypes.string.isRequired,
	 number:PropTypes.string.isRequired,
	})
   )
}

export default ContactList


// {/* <ul>
// {contacts.map(contact => (
// 	<ContactLi key={contact.id}>{contact.name}:  {contact.number}
// 	<DeleteButtton onClick={() => remove(contact.id)}>Delete</DeleteButtton>
// 	</ContactLi>
// ))}
// </ul> */}