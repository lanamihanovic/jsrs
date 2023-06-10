import mega from "./Peace_sells...But_Who's_Buying.jpg";
import pant from './PanteraVulgarDisplayofPower.jpg';
function CD() {
  return (
    <div className="CD">
        <div className="mega">
            <img src={mega}></img>
            <h2>Megadeth</h2>
            <p>Megadeth is an influential American thrash metal band that has left an indelible mark on the heavy metal genre. One of their standout albums is "Rust in Peace," released in 1990. With its intricate guitar work, technical precision, and thought-provoking lyrics, "Rust in Peace" is considered a thrash metal masterpiece. The album showcases the virtuosity of the band's members, particularly the exceptional guitar playing of Dave Mustaine and Marty Friedman. Tracks like "Holy Wars... The Punishment Due" and "Hangar 18" demonstrate Megadeth's signature aggressive sound, relentless energy, and politically charged themes. "Rust in Peace" not only solidified Megadeth's place among the "Big Four" of thrash metal but also helped define the genre itself. Its impact continues to be felt in the metal community, and it remains a cornerstone of Megadeth's discography, earning its rightful place as one of the greatest thrash metal albums of all time.</p>
            <button className='btn'>Više</button>

        </div>
        <div className="pantera">
        <img src={pant}></img>
        <h2>Pantera</h2>
        <p>Pantera was an American heavy metal band that gained immense recognition for their powerful music and fierce attitude. One of their most influential albums is "Vulgar Display of Power," released in 1992. This record showcased Pantera's signature blend of aggressive guitar riffs, thunderous drums, and raw vocals by frontman Phil Anselmo. Songs like "Walk," "Mouth for War," and "This Love" became iconic anthems within the metal community. "Vulgar Display of Power" is revered for its intense energy, precise musicianship, and unapologetic lyrics. It marked a pivotal moment for Pantera, propelling them to new heights and solidifying their status as one of the leading metal bands of the 1990s. The album's impact continues to resonate, inspiring generations of metalheads with its relentless power and unbridled passion.</p>
        <button className='btn'>Više</button>

        </div>
    
    </div>
  );
}

export default CD;
