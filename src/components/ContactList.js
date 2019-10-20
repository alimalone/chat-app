import React from "react";
import Contact from "./Contact";

const ContactsList = [
  {
    name: "Marjorie Holland",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    status: "true"
  },
  {
    name: "Christina Thompson",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    status: "true"
  },
  {
    name: "Devon Lawson",
    image: "https://randomuser.me/api/portraits/men/74.jpg",
    status: "true"
  },
  {
    name: "Kent Fernandez",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    status: "false"
  },
  {
    name: "Brandy Neal",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    status: "false"
  }
];

const ListContact = () => (
  <div>
    {ContactsList.map(contact => (
      <Contact
        key={contact.name}
        userName={contact.name}
        image={contact.image}
        status={contact.status}
      />
    ))}
  </div>
);

export default ListContact;
