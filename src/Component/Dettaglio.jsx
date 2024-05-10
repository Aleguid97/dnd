import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Dettaglio() {
  const { index } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const response = await fetch(`https://www.dnd5eapi.co/api/races/${index}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching races:", error);
      }
    }

    fetchDetail();
  }, [index]);

  return (
    <>
      <Container>
        <h1 className="mb-5 mt-3">Race's Detail</h1>
        {data ? (
          <div className="race-details">
            <p>
              {" "}
              <b>Name:</b> {data.name}
            </p>
            <p>
              {" "}
              <b>Speed: </b> {data.speed} ft.
            </p>
            <p>
              {" "}
              <b>Ability Bonuses</b>:
            </p>
            <ul>
              {data.ability_bonuses.map((bonus, index) => (
                <li key={index}>
                  {bonus.ability_score.name}: {bonus.bonus}
                </li>
              ))}
            </ul>
            <p>
              {" "}
              <b>Age: </b> {data.age}
            </p>
            <p>
              {" "}
              <b>Alignment: </b> {data.alignment}
            </p>
            <p>
              {" "}
              <b>Size: </b> {data.size}. <br />
              {data.size_description}{" "}
            </p>

            <h3>Known Languages </h3>

            <ul>
              {data.languages.map((language, index) => (
                <li key={index}>{language.name}</li>
              ))}
            </ul>
            {data && data.name === "Human" && (
              <div className="human-details mb-3">
                <h3 className="mt-4"> Human choose: </h3>
                <div>
                  <p className="fs-4">Choose: {data.language_options.choose} language from this list:</p>
                  {/* <p>Type: {data.language_options.type}</p> */}
                  <ul>
                    {data.language_options.from.options.map((option, index) => (
                      <li key={index}>{option.item.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            <p> {data.language_desc}</p>

            {data && data.name !== "Human" && (
              <div className="traits-details">
                <h3>Traits and Characteristics: </h3>
                <ul>
                  {data.traits.map((trait, index) => (
                    <li key={index}>{trait.index}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          " "
        )}
      </Container>
    </>
  );
}

export default Dettaglio;
