import React from 'react'


function Footer(props) {

    const{about, contact}  = props.data;

    return (
        <footer className="footer-area section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h4 className="text-white">About Us</h4>
                            <p className='text-white'>
                                {about}

                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6  col-md-6 col-sm-6">
                        <div className="single-footer-widget text-white">
                            <h4 className="text-white">Contact Us</h4>
                            <p>
                                {contact.content}
                            </p>
                            <p className="number">
                                {contact.email} <br/>
                                {contact.phone}
                            </p>
                        </div>
                    </div>

                </div>
                <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                    <p className="footer-text m-0">Copyright &copy;
                        <script>document.write(new Date().getFullYear());</script>
                        All rights reserved | AI Troopers LLC</p>
                    <div className="footer-social d-flex align-items-center">
                        <a href="https://github.com/aitroopers" target='_blank'><i className="fa fa-github"></i></a>
                        <a href="#"><i className="fa fa-facebook"></i></a>
                    </div>
                </div>
            </div>
        </footer>
)
}

export default Footer