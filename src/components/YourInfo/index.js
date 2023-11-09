import {useState,useEffect} from "react"



import "./index.css"

const YourInfo = () => {
  const [data,setData] = useState({
    name:"",
    email:"",
    phoneno:""
  })
  const [errors,setErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const {name,email,phoneno} = data;

  const changeHandler = (e) => {
    setData({...data,[e.target.name]: e.target.value})
  }
  const submitHandler =(e) => {
    e.preventDefault()
   
    setErrors(Validate(data))
    setIsSubmit(true)
  }
  useEffect(()=>{
    if (Object.keys(errors).length === 0 && isSubmit){
       console.log(errors)
    }

  },[errors,isSubmit])
  const Validate = (value) => {
    const error = {}
    // const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(!value.name){
    error.name = "username is required!"
  }
   if (!value.email){
    error.email = "email is required"
   }
   if (!value.phoneno){
    error.phoneno = "phoneno is required"
   }
   return error
  }
    return (

        <div className="container">
            <div className="image">
                <div class="card">
                <div className="one">1</div>
                <div className="info">YOUR INFO</div>
                </div>
                <div class="card">
                <div className="one">2</div>
                <div className="info">SELECT PLAN</div>
                </div>
                <div class="card">
                <div className="one">3</div>
                <div className="info">ADD-ONS</div>
                </div>
                <div class="card">
                <div className="one">4</div>
                <div className="info">SUMMARY</div>
                </div>

                
            </div>
           <div className="personalcard">
            <h1 className="main-h">Personal info</h1>
            <p className="main-p">Please Provide your name, email address, and phone number.</p>
            <form onSubmit={submitHandler}>
           
                <h1 className="name">Name</h1>
                <input type="text" name="name" className="input" placeholder="name" value={name} onChange={changeHandler}/>
                <p style={{color:"red"}}>{errors.name}</p>
             
                <h1 className="name">Email Address</h1>
                <input type="email" name="email" className="input" placeholder="email" value={email} onChange={changeHandler}/>
                <p style={{color:"red"}}>{errors.email}</p>
                <h1 className="name">Phone Number</h1>
                <input type="phone" name="phoneno" className="input" placeholder="e.g. +1 234 567 890" value={phoneno} onChange={changeHandler}/>
                <p style={{color:"red"}}>{errors.phoneno}</p>
                <div className="button-card">
                <button className="button">Next Step</button>
                </div>
            </form>
           </div>
        </div>
    )
}

export default YourInfo;