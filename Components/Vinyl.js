import Pic from './Iron_Maiden_-_Iron_Maiden_FRONT.jpg';
import meta from './Metallica_-_St._Anger_cover.jpg'
function Vinyl() {
  return (
    <div className="Vinyl">

        <div className="Iron">
            <img src={Pic}></img>
            <h2>Iron Maiden Ploća</h2>
            <p>Iron Maiden is a legendary British heavy metal band known for their captivating music and energetic live performances. One of their notable albums is "The Number of the Beast," released in 1982. This iconic album solidified Iron Maiden's status as one of the pioneers of the genre. With its powerful and melodic tracks, such as the title track "The Number of the Beast" and the anthemic "Run to the Hills," the album showcased the band's exceptional musicianship and Bruce Dickinson's distinctive vocals. "The Number of the Beast" remains a fan favorite and a cornerstone of Iron Maiden's discography, representing their trademark sound and lyrical themes of mythology, history, and fantasy. It continues to inspire and resonate with metal fans worldwide, leaving a lasting legacy in the realm of heavy metal music.</p>
            <button className='btn'>Više</button>

        </div>

        <div className='metallica'>
            <img src={meta} ></img>
            <h2>Metallica Ploća</h2>
            <p>Metallica is a renowned American heavy metal band known for their powerful and influential music. One of their most iconic albums is "Master of Puppets," released in 1986. Considered a masterpiece in the metal genre, "Master of Puppets" showcases Metallica's exceptional songwriting and musicianship. The album is filled with intense and intricate guitar riffs, thundering drums, and thought-provoking lyrics. Songs like the title track "Master of Puppets," "Battery," and "Welcome Home (Sanitarium)" have become anthems for metal fans worldwide. The album delves into themes of control, addiction, and personal struggles, displaying Metallica's ability to blend aggression with depth and introspection. "Master of Puppets" continues to be revered as one of the greatest metal albums of all time, solidifying Metallica's legacy and influencing countless bands in the genre.</p>
            <button className='btn'>Više</button>
        </div>

    </div>
  );
}

export default Vinyl;
