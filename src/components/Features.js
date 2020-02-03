import React from 'react'


function Features(props) {
    const {features, portfolio} = props;
    return (
        <div>
            <section className="feature-area section-gap" id="feature" style={{'background': "#ffedbb"}} >
                {/*<div className="overlay overlay-bg"> </div>*/}
                <div className="container">
                    <div className="row">
                        {features.map(d => (

                                <div className="col single-offer">
                                    <h4 className='mb-2'><span className={`img-fluid fa ${d.icon}`}> </span> {d.title}</h4>
                                    <p>{d.content}</p>
                                </div>
                        ))}

                    </div>
                </div>
            </section>
            <section className="testimonial-area relative section-gap"  id='offer'>

                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60 col-lg-8">
                            <div className="title text-center">
                                <h1 className="mb-10 text-black"> {portfolio.title}</h1>
                                <p className="text-black"> {portfolio.summary}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">

                        {portfolio.history.map(p => (
                            <div className="card p-2 m-3" style={{width: "20rem"}}>
                                <img className="card-img-top" src={p.icon} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{p.title}</h5>
                                        <p className="card-text">{p.content}</p>
                                        <a href={p.link} target='_blank' className="genric-btn primary-border">Check it Out</a>
                                    </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features