import React from 'react'

function About(props) {

    const {summary, teams, skills} = props.data;
    return (
        <div>
            <section className="info-area" id="about">
                <div className="container-fluid">
                    <div className="row fullscreen d-flex justify-content-end align-items-center"
                         style={{'height': window.innerHeight * 0.7}}>
                        <div className="col-lg-6 col-md-12 info-left no-padding">
                            <img className="img-fluid" src="/img/info-img.jpg" alt=""/>
                        </div>
                        <div className="col-lg-6 col-md-12 info-right no-padding">
                            <h1>{summary.title}</h1>
                            <p>
                                {summary.content}
                            </p>
                            <button className="primary-btn mt-20 text-uppercase">Learn More<span
                                className="lnr lnr-arrow-right"/></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="brand-area">
                <div className="container">
                    <div className="title text-center pt-3">
                        <h1 className="text-capitalize">Meet Our Team at AI Troopers</h1>
                    </div>
                    <div className="row d-flex justify-content-center">
                        {teams.map(t => (
                            <div className="single-feature m-5">
                                <img className="img-fluid img-thumbnail" style={{width: "20rem"}} src={t.icon} alt=""/>
                                <h4>{t.name}</h4>
                                <p>{t.role}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className="facts-area section-gap">
                <div className="container">
                    <div className="row">
                        {skills.map(d => (
                            <div className="col single-fact">
                                <h1 className="text-sm-center">{d}</h1>
                            </div>
                        ))}


                    </div>
                </div>
            </section>


        </div>
    )
}

export default About