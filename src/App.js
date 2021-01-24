import Contact from './components/Contact'
import propTypes from 'prop-types';
import ContactList from './components/ContactList'

function App() {
  return (
    <div className="App">
   <ContactList /> 
  
    </div>
  );
}

Contact.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  // online: propTypes.bool.isRequired but not necessary in my code
  
}

export default App;
