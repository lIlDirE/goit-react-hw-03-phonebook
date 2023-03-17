import PropTypes from 'prop-types';
import { DeleteButtton,ContactLi } from './ContactList.styled';
const ContactList = ({remove, contacts}) => { 
	return(
		<ul>
		{contacts.map(contact => (
			<ContactLi key={contact.id}>{contact.name}:  {contact.number}
			<DeleteButtton onClick={() => remove(contact.id)}>Delete</DeleteButtton>
			</ContactLi>
			
		))}
	  </ul>
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
