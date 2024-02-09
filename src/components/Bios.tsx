
const contactContainer = {
  display: 'flex',
  justifyContent: 'space-evenly',
  textAlign: "left" as const
};

const bioContainer = {
  width: '800px',
  textAlign: 'left' as const,
  marginLeft: 'auto',
  marginRight: 'auto',
};

function Bios() {
  return (
    <>
      <div >
        <div style={contactContainer}>
          <div style={{display: "inline-block"}}>
            <span style={{fontWeight: '600'}}>RJ Kattke</span>, Piano : Organ : Keyboards : Vocals<br/>
            Cell: (312) 909-9332<br/>
            email: sw4inet@hotmail.com
          </div>
          <div style={{display: "inline-block"}}>
            <span style={{fontWeight: '600'}}>Mark Sramek</span>, Guitar, Harp, Vocals<br/>
            Cell: (708) 203-7258<br/>
            email: musikunites@gmail.com
          </div>
        </div>
        <div>
          <br/>
          <br/>
          <div style={{fontSize: "42px"}} >~ Band Bio ~</div>
          <div style={bioContainer}>
            <p>
              Veteran players RJ Kattke on keys and Mark Sramek on guitar blend their voices, musicianship, creativity and tradition to bring audiences the very best in live music entertainment.
            </p>
            <div>
              playing americana, folk, blues, rock, country, eclectic, reggae and originals<br/>
                ...mix em all up, and that’s how the Marjays get the house grooving!
            </div>
            <br/>
            <div>
              We’ve performed at Chicagoland clubs, breweries, wineries, events, parties, festivals<br/>
              - give us a shout today, and let’s get some good times rolling for you!
            </div>
        
          </div>
        </div>
      </div>
    </>
  )
}

export default Bios