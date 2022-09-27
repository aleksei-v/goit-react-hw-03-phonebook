import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
 import { Button } from '../ContactForm/ContactForm.styled';

class ContactList extends Component {

filterContactByName = () => {
    const { filter, contacts } = this.props;

    const adjustedFilter = filter.toLocaleLowerCase();

    return contacts.filter(({ name }) =>
        name.toLocaleLowerCase().includes(adjustedFilter));
};
    
    render() {
        const filteredContacts = this.filterContactByName();

        return (
            <Box
                as="ul"
                display="flex"
                flexDirection="column"
                p={4}
                alignItems="center"
            >
            {filteredContacts.map((({ id, name, number }) => {
                return (
                    <li key={id}>
                        {name}: {number}
                        <Button onClick={() =>
                            this.props.OnDeleteContact(id)
                        }>Удалить</Button>
                    </li>
                
                )
            }))}
        </Box>)
    }
};

    
ContactList.propTypes = {
    filter: PropTypes.string.isRequired,
    OnDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
};

export default ContactList;