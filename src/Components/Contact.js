import { useState } from "react";
import Navbar from "./NavBar/Navbar";
import SocialMedia from "./SocialMedia/SocialMedia";

const Contact = () => {

   const [user, setUser] = useState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",

   })

   let name, value

   const getUserData = (event) => {
      name = event.target.name;
      value = event.target.value;

      setUser({
         ...user,
         [name]: value
      });
   }

   const submitForm = async (e) => {
      e.preventDefault();

      const { firstName, lastName, email, message } = user
      if (firstName && lastName && email && message) {

         const url = "https://rana-portfolio-e7dc5-default-rtdb.europe-west1.firebasedatabase.app/contact-form.json"
         const res = await fetch(url, {
            method: "POST",
            headers: {
               "content-type": "application/json"
            },
            body: JSON.stringify({
               firstName,
               lastName,
               email,
               message,
            }),
         })

         if (res) {
            setUser({
               firstName: "",
               lastName: "",
               email: "",
               message: "",

            })
            alert("Form submitted successfully, Thank you")
         }

      } else {
         alert("please fill all the input field")
      }
   }

   return (
      <>
         <Navbar />
         <div className="container text-center my-5 contact-main-container ">

            <div className="row">
               <div className="col-md-12">
                  <div className="">

                     <form action="" method="POST">
                        <fieldset>
                           <legend className="text-center header mb-5">Contact me</legend>

                           <div className="form-group">
                              <span className="col-md-1 col-md-offset-2 text-center"></span>
                              <div className="col-md-12">
                                 <input
                                    id="fname"
                                    name="firstName"
                                    type="text"
                                    value={user.firstName}
                                    onChange={getUserData}
                                    placeholder="First Name"
                                    className="form-control"
                                    required />
                              </div>
                           </div>

                           <div className="form-group">
                              <span className="col-md-1 col-md-offset-2 text-center"></span>
                              <div className="col-md-12">
                                 <input id="lname" name="lastName" type="text"
                                    value={user.lastName}
                                    onChange={getUserData}
                                    placeholder="Last Name" className="form-control" required />
                              </div>
                           </div>

                           <div className="form-group">
                              <span className="col-md-1 col-md-offset-2 text-center"></span>
                              <div className="col-md-12">
                                 <input id="email" name="email" type="text"
                                    value={user.email}
                                    onChange={getUserData}
                                    placeholder="Email Address" className="form-control" required />
                              </div>
                           </div>

                           <div className="form-group">
                              <span className="col-md-1 col-md-offset-2 text-center"></span>
                              <div className="col-md-12">
                                 <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    value={user.message}
                                    onChange={getUserData}
                                    rows="7"
                                    placeholder="I will get back to you within 2 working days"
                                    required
                                 ></textarea>
                              </div>
                           </div>

                           <div className="form-group">
                              <div className="col-md-12 text-center my-3">
                                 <button
                                    type="submit"
                                    onClick={submitForm}
                                    className="btn btn-primary btn-lg"> Submit
                                 </button>
                              </div>
                           </div>

                           <div className="media ">
                              <label>You can also write me here :</label>
                              <h5 className='text-dark'>ranaAhmed.code@gmail.com</h5>
                           </div>
                        </fieldset>
                     </form>

                  </div>
               </div>
            </div>
         </div>

         <SocialMedia />
      </>
   )
}

export default Contact;




