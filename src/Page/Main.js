import React from 'react'
import mainImg from './../Images/mainImg.png';
import image1 from './../Images/Image1.png';
import image2 from './../Images/image2.png';
import image3 from './../Images/image3.png';
import imageBG1 from './../Images/imageBG1.png';
import imageBG2 from './../Images/imageBG2.png';
import image4 from './../Images/image4.png';
import image5 from './../Images/image5.png';
import image6 from './../Images/image6.png';

export default function Main() {
  return (
    <main className="main">
      <section className="world-news" id="world-news">
        <img src={mainImg} alt="Image Of Mountain Road" />
        <div className="headline-content">
          <h1>World news</h1>
          <hr />
          <h3>Amazing places in America to visit.</h3>
          <p>
            For some reason — this country, this city, this neighborhood, this
            particular street — is the place you are living a majority of your
            life in.
          </p>
          <button>learn more</button>
        </div>
        <div className="more-news-wrapper">
          <div className="d-flex spans-wrapper">
            <h2>more news</h2>
            <div>
              <span className="left-span"> &lt; </span>
              <span className="right-span"> &gt; </span>
            </div>
          </div>
          <hr />
          <div className="articles-wrapper">
            <article id="right-article">
              <h3>travel</h3>
              <h4>Article title</h4>
              <p>
                Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad
                has appareat…
              </p>
              <i className="far fa-clock"></i><small>2 min ago</small>
            </article>
            <article>
              <h3>technology</h3>
              <h4>Article title</h4>
              <p>
                Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad
                has appareat…
              </p>
              <i className="far fa-clock"></i><small>2 min ago</small>
            </article>
          </div>
        </div>
      </section>
      <section className="container" id="trending">
        <h2>trending</h2>
        <div className="d-flex cards">
          <div className="d-flex card-wrapper" id="card-wrapper-first">
            <img src={image1} alt="valley" className="valley" />
            <div className="cards-content">
              <h4>Dolore magna aliqua</h4>
              <p>
                Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad
                has appareat.
              </p>
              <i className="far fa-clock"></i><small>2m ago</small>
            </div>
          </div>
          <div className="card-wrapper">
            <img src={image2} alt="umbrellas" />
            <div className="cards-content">
              <h4>Morbi eleifend a libero</h4>
              <p>
                Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad
                has appareat.
              </p>
              <i className="far fa-clock"></i><small>1h ago</small>
            </div>
          </div>
          <div className="card-wrapper snowboarding">
            <img src={image3} alt="Snowboarding" />
            <div className="cards-content">
              <h4>Morbi eleifend a libero</h4>
              <p>
                Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad
                has appareat.
              </p>
              <i className="far fa-clock"></i><small>3h ago</small>
            </div>
          </div>
        </div>
      </section>
      <section className="container happening-now">
        <div className="title">
          <h2>happening now</h2>
          <div>
            <span className="left-span"> &lt; </span>
            <span className="right-span"> &gt; </span>
          </div>
        </div>
        <div className="d-flex images-wrapper-div">
          <div className="big-cards">
            <div className="big-card">
              <img src={imageBG1} alt="Bridge" />
              <div className="big-card-content">
                <h2>City</h2>
                <h3>Large article title</h3>
                <p>
                  Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam
                  detracto, vidit vituperatoribus duo id. Affert detraxit
                  voluptatum vis eu, inermis eloquentiam.
                </p>
                <i className="far fa-clock"></i><small>2m ago</small>
              </div>
            </div>
            <div className="big-card">
              <img src={imageBG2} alt="Forest" />
              <div className="big-card-content forest">
                <h2>Travel</h2>
                <h3>Large article title</h3>
                <p>
                  Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam
                  detracto, vidit vituperatoribus duo id. Affert detraxit
                  voluptatum vis eu, inermis eloquentiam.
                </p>
                <i className="far fa-clock"></i><small>2m ago</small>
              </div>
            </div>
          </div>
          <div className="small-cards">
            <div className="elephant">
              <img src={image4} alt="elephant" />
              <h4>small title</h4>
              <small>
                <i className="far fa-clock"></i>3h ago by
                <a href="">Worldnews</a>
              </small>
            </div>
            <div>
              <img src={image5} alt="parrot" />
              <h4>small title</h4>
              <small>
                <i className="far fa-clock"></i>4h ago by
                <a href="">Days</a>
              </small>
            </div>
            <div className="mountRoad">
              <img src={image6} alt="mountain Road" />
              <h4>small title</h4>
              <small>
                <i className="far fa-clock"></i>3h ago by
                <a href="">Monica</a>
              </small>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
