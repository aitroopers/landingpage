import React from 'react'

function Contact() {

    return (
        <div>
            <section className="contact-area section-gap" id="contact">
                <div className="container"  style={{'height': window.innerHeight*0.5}}>
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-30 col-lg-8">
                            <div className="title text-center">
                                <h1 className="mb-10">If you need, Just drop us a line</h1>
                                <p>Who are in extremely love with eco friendly system.</p>
                            </div>
                        </div>
                    </div>
                    <form className="form-area mt-60" id="myForm" action="mail.php" method="post"
                          className="contact-form text-right">
                        <div className="row">
                            <div className="col-lg-6 form-group">
                                <input name="name" placeholder="Enter your name" onFocus="this.placeholder = ''"
                                       onBlur="this.placeholder = 'Enter your name'"
                                       className="common-input mb-20 form-control" required="" type="text"/>

                                    <input name="email" placeholder="Enter email address"
                                           pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                                           onFocus="this.placeholder = ''"
                                           onBlur="this.placeholder = 'Enter email address'"
                                           className="common-input mb-20 form-control" required="" type="email"/>

                                        <input name="subject" placeholder="Enter your subject"
                                               onFocus="this.placeholder = ''"
                                               onBlur="this.placeholder = 'Enter your subject'"
                                               className="common-input mb-20 form-control" required="" type="text"/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <textarea className="common-textarea mt-10 form-control" name="message"
                                          placeholder="Messege" onFocus="this.placeholder = ''"
                                          onBlur="this.placeholder = 'Messege'" required=""></textarea>
                                <button className="primary-btn mt-20">Send Message<span
                                    className="lnr lnr-arrow-right"></span></button>
                                <div className="mt-10 alert-msg">
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </section>
        </div>
    )
}

export default  Contact