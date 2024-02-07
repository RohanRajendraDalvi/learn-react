function Scientist({name, src, profession, awards, discovery}){
  return(
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={src}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b>
            {awards.join(", ")}
          </li>
          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
      </section>
  );
}


export default function Gallery() {
  return (
    
    <div>
      
      <h1>Notable Scientists</h1>
      <Scientist 
      name = {"Maria Skłodowska-Curie"}
      src = {"https://i.imgur.com/szV5sdGs.jpg"}
      profession= "physicist and chemist"
      awards={["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"]}
      discovery={"polonium (element)"}
      />
      <Scientist 
      name = {"Katsuko Saruhashi"}
      src = {"https://i.imgur.com/YfeOqp2s.jpg"}
      profession= "geochemist"
      awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
      discovery={"a method for measuring carbon dioxide in seawater"}
      />
    </div>
  );
}
