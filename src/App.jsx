import Header from "./Hearder.jsx"
import Footer from "./Footer.jsx"
import Food from "./assets/Food.jsx";
import Card from "./assets/Card.jsx";
import Button from "./assets/Button.jsx";
import Student from "./assets/student.jsx";
function App() {


  return (
    <>
    <Student name ='Spongebob' age ={10} isStudent ={true}/>
    <Student name ='Christopher' age ={22} isStudent ={true}/>

    <Student name ='Spongebob' age ={50} isStudent ={false}/>
    </>
  );
}
Student.prototype = {
  
}

export default App
