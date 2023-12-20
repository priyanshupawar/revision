import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
let initialValue = {
  fullname: "",
  password: "",
  confirmPassword: "",
  number: "",
};

const AssignmentFives = () => {
  const [registrationData, setRegistrationData] = useState(initialValue);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [num, setNum] = useState("");
  function handleChange(e) {
    // console.log(e.target.name);
    // console.log(e.target.value);

    if (fullname.length < 8) {
      setName("Enter the full name");
    } else {
      setName("");
    }
    if (password < 5) {
      setPass("Password must contain 5 letter");
    } else {
      setPass("");
    }

    if (confirmPassword === password) {
      setCpass("");
    } else {
      setCpass("Password and Confirm Password must equal");
    }

    if (number[0] !== "9") {
      setNum("Mobile number should start with 9");
    } else if (number.length === 10) {
      setNum("Enter valid number");
    } else {
      setNum("");
    }
    //
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(registrationData);
    setData((pre) => {
      return [...pre, registrationData];
    });
  }
  // console.log(data);
  const { fullname, password, confirmPassword, number } = registrationData;
  // const registrationArray = Object.entries(registrationData);
  const styles = { color: "red", fontWeight: "bolder" };
  return (
    <>
      {/* {console.log("data array is ", data)} */}
      <form className="container mt-5 w-25 " onSubmit={handleSubmit}>
        <label className="form-label">Full name</label>
        <input
          type="text"
          placeholder="Enter password"
          className="form-control"
          name="fullname"
          value={fullname}
          onChange={handleChange}
        />
        <p style={styles}>{name}</p>
        <label className="form-label">Password</label>

        <input
          type="text"
          placeholder="Enter password"
          className="form-control"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <p style={styles}>{pass}</p>
        <label className="form-label">Confirm Password</label>
        <input
          type="text"
          placeholder="Enter confirm password"
          className="form-control"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <p style={styles}>{cpass}</p>
        <label className="form-label">Phone Number</label>
        <input
          type="text"
          placeholder="Enter phone number"
          className="form-control"
          name="number"
          value={number}
          onChange={handleChange}
        />
        <p style={styles}>{num}</p>
        <button type="submit" class="btn btn-success mt-5 ">
          Submit
        </button>
      </form>

      <div className="container mt-5 w-75 border">
        <h1>Details</h1>
        <div className="box">
          {/* {data.length === 0 && <h1>wait while</h1>} */}
          {data.length > 0 &&
            data.map((ele, i) => {
              return (
                <div className="box" key={i}>
                  <p style={{ padding: "15px" }}>
                    <p>Name :{ele.fullname}</p>
                    <p>Password :{ele.password}</p>
                    <p>Confirm Password :{ele.confirmPassword}</p>
                    <p>Number:{ele.number}</p>
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default AssignmentFives;



// import React, { useState } from 'react'

// function Form() {
    // let [name,setName]=useState('')
    // let [pass,setPass]=useState('')
    // let [cpass,setCpass]=useState('')
    // let [email,setEmail]=useState('')
    // let [course,setCourse]=useState('')
    // let [feedback,setFeedback]=useState('')
    
    
//     let [form,setForm]=useState({name:'',email:"",pass:"",cpass:"",course:"",feedback:""})
    
//    function commonHandler(e)
//    {
//        let {name,value}=e.target
//         setForm((pre)=>{
//             return {...pre,[name]:value}
//         })
//    }






//     // function unameHandler(e)
//     // {
//     //     setForm({...form,   name:e.target.value})
//     //     //setName(e.target.value)
//     // }
//     // function emailHandler(e)
//     // {
//     //      setForm({...form,email:e.target.value})
//     //     //setEmail(e.target.value)
//     // }
//     // function passHandler(e)
//     // {
//     //     setForm({...form,pass:e.target.value})
//     //     //setPass(e.target.value)
//     // }
//     // function cPassHandler(e)
//     // {
//     //     setForm({...form,cpass:e.target.value})
//     //    // setCpass(e.target.value)
//     // }
//     // function feedbackHandler(e)
//     // {
//     //     setForm({...form,feedback:e.target.value})
//     //    //setFeedback(e.target.value)
//     // }
//     // function courseHandler(e)
//     // {
//     //     setForm({...form,course:e.target.value})
//     //    //setCourse(e.target.value)
//     // }
//     function submitHandler()
//     {
     
//         console.log(form)
//         setForm({name:'',email:"",pass:"",cpass:"",course:"",feedback:""})
//         //console.log(name,pass,cpass,email,course,feedback)
       
//     }
//   return (
//     <>
//     userName: <input  type='text' placeholder='etner your username' onChange={commonHandler} name='name' value={form.name}/>
//     <br/>
//     email: <input  type='email' placeholder='enter your email'
//     onChange={commonHandler} name='email' value={form.email}/>
//     <br/>
//     pass: <input  type='password' placeholder='etner your password' onChange={commonHandler} name='pass' value={form.pass}/>
//     <br/>
//     confirm_pass: <input  type='password' placeholder='etner your confirm password' onChange={commonHandler} name='cpass' value={form.cpass}/>
//     <br/>
//     course:
//     <select onChange={commonHandler} name='course'>
//         <option>Html</option>
//         <option>css</option>
//         <option>react</option>
//         <option>nodejs</option>
//     </select>
//     <br/>
//     feedback:
//     <textarea rows="10" cols="10" placeholder='enter your feedback' onChange={commonHandler} name='feedback' value={form.feedback}/>
//     <br/>
//     <button  onClick={submitHandler}>submit</button>

//     </>
//   )
// }