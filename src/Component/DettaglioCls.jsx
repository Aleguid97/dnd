import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function DettaglioCls() {
  const { index } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const response = await fetch(`https://www.dnd5eapi.co/api/classes/${index}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching races:", error);
      }
    }

    fetchDetail();
  }, [index]);

  return (
    <Container>
      <div>
        {data ? (
          <>
            <div className="d-flex justify-content-center align-items-center">
              <img src={`/ImmaginiDnD/Classi/${data.name}.png`} alt="Immagine Classe" />
            </div>
            <h1>{data.name}</h1>
            <p>Hit Die: {data.hit_die}</p>

            <p>Saving Throws:</p>
            <ul>
              {data.saving_throws.map((savingThrow, index) => (
                <li key={index}>{savingThrow.name}</li>
              ))}
            </ul>
            <p>Starting Equipment:</p>
            <ul>
              {data.starting_equipment.map((equipment, index) => (
                <li key={index}>{equipment.equipment.name}</li>
              ))}
            </ul>
            <p>Proficiencies:</p>
            <ul>
              {data.proficiencies.map((proficiency, index) => (
                <li key={index}>{proficiency.name}</li>
              ))}
            </ul>
            {data.proficiency_choices.map((choice, index) => (
              <li key={index}>
                {choice.desc}
                <ul>
                  {choice.from.options.map((option, idx) => (
                    <li key={idx}>{option.item && option.item.name ? option.item.name : "N/A"}</li>
                  ))}
                </ul>
              </li>
            ))}
            <p>Subclasses:</p>
            <ul>
              {data.subclasses.map((subclass, index) => (
                <li key={index}>{subclass.name}</li>
              ))}
            </ul>
            <p>Starting Equipment Options:</p>
            <ul>
              {data.starting_equipment_options.map((option, index) => (
                <li key={index}>{option.desc}</li>
              ))}
            </ul>
            {data &&
              (data.name === "Bard" ||
                data.name === "Wizard" ||
                data.name === "Sorcerer" ||
                data.name === "Warlock" ||
                data.name === "Cleric" ||
                data.name === "Druid" ||
                data.name === "Paladin" ||
                data.name === "Ranger") && (
                <>
                  <p>Spellcasting:</p>
                  <ul>
                    <li>Level: {data.spellcasting.level}</li>
                    <li>Spellcasting Ability: {data.spellcasting.spellcasting_ability.name}</li>
                    <li>
                      <p>Spellcasting Info:</p>
                      <ul>
                        {data.spellcasting.info.map((info, index) => (
                          <li key={index}>
                            <strong>{info.name}</strong>
                            <ul>
                              {info.desc.map((desc, idx) => (
                                <li key={idx}>{desc}</li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                  {/* Aggiungi altre informazioni qui, come le abilità di incantesimo e le opzioni di equipaggiamento iniziali */}
                </>
              )}

            {/* Aggiungi altre informazioni qui, come le abilità di incantesimo e le opzioni di equipaggiamento iniziali */}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Container>
  );
}

export default DettaglioCls;
