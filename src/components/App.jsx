import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Division } from './App.styled';



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


  formSubmitHandler = (contact, newName) => {
    // console.log(contact, newName)

    if (this.state.contacts.some(contact => contact.name.toLowerCase() === newName.toLowerCase())) {
      return alert(`${newName} is already in the contact list`)
    } else {
      this.setState(prevState => ({ contacts: [contact, ...prevState.contacts] }))
    }
    
  }

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  };
  
  deleteContact = contactId => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== contactId) }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalazedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalazedFilter));
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    // console.log(parsedContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {

    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts))
    }
  }
  
  render() {
    const {  filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
        <Division>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
      </Division>
    )
  }
};