import "./Home.css";
import marjaysThumb from "../assets/images/MarJays_D0419u_thumb.jpeg";

function Home() {
  return (
    <>
      <div className="bord">
        <h1>The MarJays</h1>
        <img src={marjaysThumb} />
        <h2 className="subh">RJ Kattke - Mark Sramek</h2>
        <p></p>
        <p className="verb">
          Veteran players RJ Kattke on keys and Mark Sramek on guitar blend
          their voices, musicianship, creativity and tradition to bring
          audiences the very best in live entertainment. We are currently
          seeking bookings as a duo, however, we can add a percussionist to make
          it a trio, or bring a full band lineup to your stage... whatever fits
          your needs!
        </p>
        <br />
        <p className="vmore">
          The MarJays love playing classic roots, rock, country, blues and
          reggae! Clubs, festivals, breweries, wineries, parties and events all
          over Chicagoland - The MarJays get the house grooving! Give us a shout
          and get your good times rolling today!
        </p>
        <br />
        <h2 className="subh">Shows</h2>
        <br />
        <div>
          <iframe
            width="100%"
            height="597"
            src="https://www.youtube.com/embed/KFgCs-73Tbo"
            title="The MarJays Sampler Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          ></iframe>
        </div>
        <br />
        <h2 className="subh">Contact</h2>
        <br />
        <div>
          <div className="contactContainer">
            <div className="contactBlock">
              <span style={{ fontWeight: "600" }} className="contactInfo">
                RJ Kattke
              </span>
              , Piano : Organ : Keyboards : Vocals
              <br />
              <div className="cdata">
                <span>phone: (312) 909-9332</span>
                <br />
                <span>email: sw4inet@hotmail.com</span>
                <br />
                <span>facebook: RJ Kattke</span>
              </div>
              <br />
              <br />
            </div>
            <div className="contactBlock">
              <span style={{ fontWeight: "600" }}>Mark Sramek</span>, Guitar,
              Harp, Vocals
              <br />
              <div className="cdata">
                <span>phone: (708) 203-7258</span>
                <br />
                <span>email: musikunites@gmail.com</span>
                <br />
                <span>facebook: Mark Sramek</span>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
