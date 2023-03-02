import {useState} from 'react';
import './App.css';
import pay from './m-pay.jpg';

function App() {
  const [details,setDetails]=useState({
    phone:'',
    amount:''
  })
  const handleChange=(e)=>{
const {name,value}=e.target
setDetails((prev)=>{
return {...prev,[name]:value}
})
};
const handleSubmit=(e)=>{
e.preventDefault();
stkpush()

}
  return (
    <form onSubmit={handleSubmit} className="pay">
      <img src={pay} alt="m-pay" className='logo'/><br/>
      <input name='phone' className='phone' type="number" placeholder='ENTER PHONE NUMBER' onChange={handleChange}/>
      <input name='amount' className='amount' type="number" placeholder='ENTER AMOUNT'onChange={handleChange}/>
      <button type='submit' className='btn'>SUBMIT</button>
    </form>
  );
}

export default App;
