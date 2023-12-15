import Menu from './pages/Menu';
import './index.css';


function App() {
  // const [name, setName] = useState('');
  // const [age, setAge] = useState(0);
  // const [username, setUsername] = useState('');

  // function createUser() {
  //   axios.post('http://localhost:3001/createUser', {
  //     name,
  //     age,
  //     username
  //   }).then((response) => {
  //     setUsersList([...usersList, response.data]);
  //   });
  // }

  return (
    <div>
      <Menu />

      {/* <div className=''>
        <input type="text" placeholder='Name: ' onChange={(event) => {
          setName(event.target.value);
        }} />
        <input type="number" placeholder='Age: ' onChange={(event) => {
          setAge(event.target.value);
        }} />
        <input type="text" placeholder='Username: ' onChange={
          (event) => {
            setUsername(event.target.value);
          }} />
        <button onClick={createUser} >Send data</button>
      </div> */}
    </div>
  );
}

export default App;
