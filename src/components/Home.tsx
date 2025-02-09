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
            height="555"
            src="ttps://youtu.be/KFgCs-73Tbo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="false"
          ></iframe>
        </div>
        <br />
        <h2 className="subh">Contact</h2>
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
