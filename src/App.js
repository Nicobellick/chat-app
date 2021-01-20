import Contact from './components/Contact'
import propTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <Contact name ="Quentin" avatar="https://randomuser.me/api/portraits/men/21.jpg" online/>
      <Contact name ="Kaiser" avatar="https://randomuser.me/api/portraits/women/86.jpg"  />
      <Contact name='Kaiser de Quentin' avatar="https://randomuser.me/api/portraits/men/56.jpg" online/>
    </div>
  );
}

Contact.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired
  
}

export default App;
