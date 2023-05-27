import React from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilterValue } from 'redux/selectors';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';

function ContactsList(props) {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const filteredContacts = useMemo(() => {
    return contacts.filter((elem) => (elem.name.toLowerCase().includes(filter.toLowerCase())));
  }, [contacts, filter]);
      return (
        <ul>
          {filteredContacts.map((i) => (
            <ContactItem
              key={i.id}
              id={i.id}
              name={i.name}
              number={i.number}
            />
          ))}
        </ul>);
       }

export default ContactsList;

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired
};