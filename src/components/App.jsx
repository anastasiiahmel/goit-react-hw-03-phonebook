
import { Component } from 'react';

import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {Section} from './section/Section';
import {Form} from './contactsForm/ContactsForm';
import { Filter } from './filter/Filter';
import {Contacts} from './contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  componentDidMount() {
    const saveData = localStorage.getItem('contacts')
    const saveDataParse = JSON.parse(saveData);
    if (saveDataParse) {
      this.setState({contacts: saveDataParse})
    };
  };

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    };
  };

  onFormSubmitData = ({ name, number }) => {
    if (
      this.state.contacts.some(
        contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number.toLowerCase() === number.toLowerCase()
        )
        ) {
          alert(`${name} is already in contacts.`);
          return;
        }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };
  
  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };
  
  
  filterByString(field, filterValue) {
    return field.toLowerCase().trim().includes(filterValue.toLowerCase().trim()
    );
  };
  
  
  filteredContacts = () => {
    return this.state.contacts.filter(contact =>
      this.filterByString(contact.name, this.state.filter) ||
      this.filterByString(contact.name, this.state.filter)
    );
  };
    
    
  onFilterChange = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };
  

  

  onLengthCheck = () =>{
    return this.state.contacts.length
  };


  render(){
    return (
      <>
      <Section title={"Phonebook"}>
          <Form onChange={this.onFormSubmitData}/>     
        </Section>
        <Section >
          <Filter
            filter={this.state.filter}
            onFilterChange={this.onFilterChange}
            />
      </Section>
        {this.onLengthCheck() === 0 ? 
          Notify.warning('There are no contatcs in your list !') : (
              <Section title={"Contacts"}>
              {this.filteredContacts().length > 0 ? (
                <Contacts
                  contacts={this.filteredContacts()}
                  deleteContact={this.deleteContact}
                />) :Notify.warning('No contacts found that match the filter !') 
              }
        
              </Section>
          )}
 </>
    );
  }
};