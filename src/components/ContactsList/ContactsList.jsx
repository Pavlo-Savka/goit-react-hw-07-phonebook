import React from 'react';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { getFilterValue } from 'redux/selectors';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';

function ContactsList(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
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