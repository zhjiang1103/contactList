import { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import ViewContact from './ViewContact'
import CreateContact from './CreateContact'

const Contacts = () => {

    // this is my original state with an array of students 
    const [contacts, setContacts] = useState([]);

    //this is the state needed for the UpdateRequest
    const [editingcontact, setEditingContact] = useState(null)

    const loadContacts = () => {
        // A function to fetch the list of students that will be load anytime that list change
        fetch("http://localhost:8080/api/contactlist")
            .then((response) => response.json())
            .then((contacts) => {
                setContacts(contacts);
            });
    }

    useEffect(() => {
        loadContacts();
    }, [contacts]);

    const onSaveContact = (newContact) => {
                console.log("Inside the post", newContact);
                setContacts((contacts) => [...contacts, newContact]);
    }


    //A function to control the update in the parent (student component)
    const updateContact = (savedContact) => {
       
                console.log("Inside the put", savedContact)
                setContacts([...contacts, savedContact])
                //loadContacts();
    }
    // console.log("Line 29 savedStudent", savedStudent);
    // This function should update the whole list of students - 
    


//A function to handle the Delete funtionality
const onDelete = (contact) => {
    //console.log(student, "delete method")
    fetch(`http://localhost:8080/api/contactlist/${contact.id}`, {
        method: "DELETE"
    }).then((response) => {
        //console.log(response);
        if (response.ok) {
            loadContacts();
        }
    })
}

//A function to handle the Update functionality
const onUpdate = (toUpdateContact) => {
    //console.log(toUpdateStudent);
    setEditingContact(toUpdateContact);

}



return (
    <div className="mybody">
        <div className="list-students">
            <h2>Contacts list </h2>
            <ul>
                {contacts.map((contact) => {
                    return <li key={contact.id}> <ViewContact contact={contact}  toUpdate={onUpdate}  toDelete={onDelete}/></li>
                })}
            </ul>
        </div>
        <CreateContact key={editingcontact ? editingcontact.id : null} onSaveContact={onSaveContact} editingContact={editingcontact} onUpdateContact={updateContact} />
    </div>
);
  }

export default Contacts