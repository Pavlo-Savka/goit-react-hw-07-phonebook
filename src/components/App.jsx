import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

function App() {

  return (
    <main>
      <section className='phonebook'>
        <h1>Phonebook</h1>
        <Form />
      </section>

      <section className='contacts'>
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </section>
    </main>
  );
};

export default App;