import React from 'react'
import Features from "./Features";


function Home(props) {
    const {title, subtitle, content} = props.data.banner;
    return (
        <div>
            <section className="banner-area relative" id="home" style={{background: "/img/header-bg.jpg"}}>
                <div className="container">
                    <div className="row fullscreen d-flex align-items-center justify-content-end"
                         style={{'height': window.innerHeight}}>
                        <div className="banner-content col-lg-7 col-md-12">
                            <h4 className="text-uppercase">{subtitle}</h4>
                            <h1>
                                {title}
                            </h1>
                            <p>
                                {content}
                            </p>
                            <a href="#" className="primary-btn header-btn text-uppercase">Discover Now</a>
                        </div>
                    </div>
                </div>
            </section>
            <Features features={props.data.features} portfolio={props.data.portfolio}/>
        </div>
    )
}


export default Home