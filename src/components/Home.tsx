import "./Home.css";
import marjaysThumb from "../assets/images/MarJays_D0419u_thumb.jpeg";

const contactContainer = {
  display: "flex",
  justifyContent: "space-evenly",
  textAlign: "left" as const,
};

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
        <p className="verb">
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
            title="Rock Me Baby"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          ></iframe>
        </div>
        <br />
        <h2 className="subh">Contact</h2>
        <br />
        <div>
          <div style={contactContainer}>
            <div style={{ display: "inline-block" }}>
              <span style={{ fontWeight: "600" }}>RJ Kattke</span>, Piano :
              Organ : Keyboards : Vocals
              <br />
              phone: (312) 909-9332
              <br />
              email: sw4inet@hotmail.com
              <br />
              facebook: RJ Kattke
            </div>
            <div style={{ display: "inline-block" }}>
              <span style={{ fontWeight: "600" }}>Mark Sramek</span>, Guitar,
              Harp, Vocals
              <br />
              phone: (708) 203-7258
              <br />
              email: musikunites@gmail.com
              <br />
              facebook: Mark Sramek
            </div>
          </div>
        </div>
        <br />
        <br />
        ok
        <br />
        <br />
        <br />
        ok
        <br />
        ya
        <br />
      </div>
    </>
  );
}

export default Home;
