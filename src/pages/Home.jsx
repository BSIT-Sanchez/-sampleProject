import { useState } from "react"
import { GoEyeClosed } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [button, setbutton] = useState(0)
  const [eye, setEye] = useState(false)

  const addOne = () => {
    setbutton(button + 1);
  }
  const minusOne = () => {
    setbutton(button - 1);
  }
  const [modal, setModal] = useState(false);
  const handlerModal = () => {
    setModal(!modal)
  }
  const passwordHide = () => {
    setEye(!eye)

  }

  
  return (
    <div className=" flex flex-col justify-center items-center w-full h-full  mt-20">
       <div>
       <button onClick={addOne} className="p-2 border bg-amber-500">add one</button>
        {button}
        <button onClick={minusOne} className="p-2 border bg-amber-500">minus o ne</button>

       </div>
        

        <button className="mt-20 p-2 bg-red-700 rounded-lg" onClick={handlerModal}>Click me</button>

        {
          modal && <div className="bg-yellow-400 p-10">Open modal</div>
        }
        <form className="mt-10 relative">
          <input type={eye ? "text" : "password"} placeholder="enter your password" className="outline p-2 rounded-sm"/>
          <div className="absolute top-3  right-1 cursor-pointer" onClick={passwordHide}>
            { eye ?  <FaEye/> : <GoEyeClosed/> }
          
          </div>
        </form>
        
        <Link to="/About">Click to about page</Link>
    </div>
    
  )
}
export default Home