import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Dettaglio() {
  const { index } = useParams();
  const [data, setData] = useState(null); // Aggiungi uno stato per i dati

  useEffect(() => {
    async function fetchDetail() {
      try {
        const response = await fetch(`https://www.dnd5eapi.co/api/races/${index}`);
        const jsonData = await response.json();
        setData(jsonData); // Imposta i dati ricevuti nello stato
      } catch (error) {
        console.error("Error fetching races:", error);
      }
    }

    fetchDetail();
  }, [index]); // Aggiungi index come dipendenza per richiamare useEffect ogni volta che index cambia

  return (
    <Container>
      <h1 className="mb-5 mt-3">Dettagli</h1>
      {data ? (
        <>
          <p> Name: {data.name}</p>
          <p>Speed: {data.speed} ft.</p>
          <p>Ability Bonuses:</p>
          <ul>
            {data.ability_bonuses.map((bonus, index) => (
              <li key={index}>
                {bonus.ability_score.name}: {bonus.bonus}
              </li>
            ))}
          </ul>
          <p> Age: {data.age}</p>
          <p> Alignment: {data.alignment}</p>
          <p>
            {" "}
            Size: {data.size}. <br />
            {data.size_description}{" "}
          </p>

          <h2>Languages</h2>

          {data.languages.map((language, index) => (
            <li key={index}>{language.name}</li>
          ))}
          <div>
            {data && data.name === "Human" && <p className="mt-4"> Human choose :</p>}

            {data && data.name === "Human" && (
              <div>
                <p>Choose: {data.language_options.choose}</p>
                <p>Type: {data.language_options.type}</p>
                <ul>
                  {data.language_options.from.options.map((option, index) => (
                    <li key={index}>{option.item.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <p> {data.language_desc}</p>
          <h3>Traits and Characteristics: </h3>
          <ul>
            <li>
              {data.traits.map((trait, index) => (
                <li key={index}>{trait.name}</li>
              ))}
            </li>
          </ul>
        </>
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        // Altrimenti, mostra un messaggio di caricamento
      )}
    </Container>
  );
}

export default Dettaglio;
