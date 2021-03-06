import React from 'react';

import ProductListing from '../features/product-listing';

export default function Homepage(props) {
  const {pathname} = props.location;
  return <div className="homepage">
    <main role="main">

      <div id="myCarousel" className={pathname === '/store' ? "hidden" : "carousel slide"} data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"/>
          <li data-target="#myCarousel" data-slide-to="1" className=""/>
          <li data-target="#myCarousel" data-slide-to="2" className=""/>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                 preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
              <rect width="100%" height="100%" fill="#777"/>
            </svg>
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>Your hub for Caribbean lifestyle.</h1>
                <p> The favorite element of Caribbean Lifestyle.  It's Food</p>
                <p><a className="btn btn-lg btn-primary" href="/" role="button">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                 preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
              <rect width="100%" height="100%" fill="#777"/>
            </svg>
            <div className="container">
              <div className="carousel-caption">
                <h1>Direct shipping</h1>
                <p>Your yam and other afro-caribbean foods, straight from yard. Ready for your purchase!</p>
                <p><a className="btn btn-lg btn-primary" href="/" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                 preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
              <rect width="100%" height="100%" fill="#777"/>
            </svg>
            <div className="container">
              <div className="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at
                  eget
                  metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a className="btn btn-lg btn-primary" href="/" role="button">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"/>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"/>
          <span className="sr-only">Next</span>
        </a>

      </div>

      <div id="myProducts" className="container marketing">

        <div className="product-list">
          <ProductListing/>
        </div>

        <div className={pathname === '/store' ? "hidden" : "more-marketing"}>
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span>
              </h2>
              <p className="lead">At Aston Caribbean Foods we provide the essential connection to home. The favorite element of Caribbean Lifestyle.  It's Food.</p>
            </div>
            <div className="col-md-5">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                   height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                   focusable="false"
                   role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee"/>
                <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
              </svg>
            </div>
          </div>

          <hr className="featurette-divider"/>

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">Oh yeah, it’s that good. <span
                className="text-muted">See for yourself.</span></h2>
              <p className="lead">We also offer a convenient shipping service for your barrels, boxes and crates of household goods, personal items and food.  Weekly Air Cargo flights to Jamaica for online purchases and small packages.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                   height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                   focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee"/>
                <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
              </svg>
            </div>
          </div>

          <hr className="featurette-divider"/>

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span>
              </h2>
              <p className="lead">Island-wide Jamaica delivery from ports of Montego Bay and Kingston.  Whatever your needs to connect you to home, we are sure to find a solution for you.</p>
            </div>
            <div className="col-md-5">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                   height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                   focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee"/>
                <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
              </svg>
            </div>
          </div>

          <hr className="featurette-divider"/>

        </div>
      </div>

      <footer className="container">
        <p className="float-right"><a href="/">Back to top</a></p>
        <p>© 2017-2019 Aston Caribbean Foods · <a href="/">Privacy</a> · <a href="/">Terms</a></p>
        <span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=SfrIgHyWEOkP1ZE2PzygzmKWr6FoB2YInwrTHv898yMdpEQBs6ZMu3HnTaH1"></script></span>
      </footer>
    </main>
  </div>
}