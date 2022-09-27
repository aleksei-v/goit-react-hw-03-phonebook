import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Box } from 'components/Box';
import { Input, AddButton } from './ContactForm.styled';

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {

    state = { ...INITIAL_STATE };

    handleInputChange = evt => {
        this.setState({
            [evt.currentTarget.name]: evt.currentTarget.value,
        });
        
    };
    onClickSubmit = (evt) => {
        evt.preventDefault();
        
      this.props.onSubmit(this.state);
      this.resetForm();
    }
  resetForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

    render() {
  
        return (
            <>
                <form onSubmit={this.onClickSubmit}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        p={4}
                        alignItems="center"
                    >
                    <label>Name
                        <Input
                            type="text"
                            name="name"
                            value={this.state.name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces.
                        For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>Number
                        <Input
                            type="tel"
                            name="number"
                            value={this.state.number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            onChange={this.handleInputChange}
                            required
                        />
                        </label>
                    </Box>
                    <AddButton
                        type="submit">
                        Add contact
                    </AddButton>
                </form>
            </>
        );
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};


export default ContactForm;