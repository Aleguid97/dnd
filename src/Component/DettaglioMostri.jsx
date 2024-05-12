import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function DettaglioMostri() {
  const { index } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${index}`);
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (error) {
        console.error("Error fetching races:", error);
      }
    }

    fetchDetail();
  }, [index]);

  return (
    <Container>
      <h1>Dettaglio Mostro</h1>
      {error && <p>{error}</p>}
      {data && (
        <>
          <h2>{data.name}</h2>
          <p>Size: {data.size}</p>
          <p>Type: {data.type}</p>
          <p>Alignment: {data.alignment}</p>
          <p>Hit Points: {data.hit_points}</p>
          {data.armor_class && data.armor_class.length > 0 && <p>Classe Armatura: {data.armor_class[0].value}</p>}
          {data.speed && (
            <p>
              Speed: {data.speed.walk}, {data.speed.fly && `Volare: ${data.speed.fly}`},{" "}
              {data.speed.swim && `Nuotare: ${data.speed.swim}`}
            </p>
          )}
          <p>Str: {data.strength}</p>
          <p>Dex: {data.dexterity}</p>
          <p>Cos: {data.constitution}</p>
          <p>Int: {data.intelligence}</p>
          <p>Wid: {data.wisdom}</p>
          <p>Cha: {data.charisma}</p>
          <p>Languages: {data.languages}</p>
          <p>Cahallenge Rate: {data.challenge_rating}</p>
          {data.special_abilities && data.special_abilities.length > 0 && (
            <>
              <h3>Special Abilities</h3>
              <ul>
                {data.special_abilities.map((ability, index) => (
                  <li key={index}>
                    <strong>{ability.name}:</strong> {ability.desc}
                  </li>
                ))}
              </ul>
            </>
          )}
          {data.actions && data.actions.length > 0 && (
            <>
              <h3>Actions</h3>
              <ul>
                {data.actions.map((action, index) => (
                  <li key={index}>
                    <strong>{action.name}:</strong> {action.desc}
                  </li>
                ))}
              </ul>
            </>
          )}
          {data.legendary_actions && data.legendary_actions.length > 0 && (
            <>
              <h3>Legandary Actions</h3>
              <ul>
                {data.legendary_actions.map((action, index) => (
                  <li key={index}>
                    <strong>{action.name}:</strong> {action.desc}
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </Container>
  );
}

export default DettaglioMostri;
