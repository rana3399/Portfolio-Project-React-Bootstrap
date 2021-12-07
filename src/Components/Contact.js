import react from "react";
import Navbar from "./NavBar/Navbar";
import SocialMedia from "./SocialMedia/SocialMedia";

const Contact =()=>{

    return (
        <>
        <Navbar />
<div className="container text-center my-5 contact-main-container ">
    <div className="row">
        <div className="col-md-12">
            <div className="">
                <form className="form-horizontal" method="post">
                    <fieldset>
                        <legend className="text-center header mb-5">Contact me</legend>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                            <div className="col-md-12">
                                <input id="fname" name="name" type="text" placeholder="First Name" className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                            <div className="col-md-12">
                                <input id="lname" name="name" type="text" placeholder="Last Name" className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                            <div className="col-md-12">
                                <input id="email" name="email" type="text" placeholder="Email Address" className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                            <div className="col-md-12">
                                <input id="phone" name="phone" type="text" placeholder="Phone" className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                            <div className="col-md-12">
                                <textarea className="form-control" id="message" name="message" placeholder="Enter your massage for us here. We will get back to you within 2 business days." rows="7"></textarea>
                            </div>
                        </div>
                        

                        <div className="form-group">
                            <div className="col-md-12 text-center my-3">
                                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                            </div>
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
