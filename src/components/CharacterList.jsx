// src/components/CharacterList.jsx
import CharacterCard from "./CharacterCard";

function CharacterList({ characters, onEditCharacter, onDeleteCharacter }) {
    if (characters.length === 0) {
        return (
            <div className="ac-grid-wrapper ac-font">
                <p style={{ fontSize: "13px", color: "#6b7280" }}>
                    조건에 맞는 주민이 없습니다.
                </p>
            </div>
        );
    }

    return (
        <div className="ac-grid-wrapper">
            <div className="ac-grid">
                {characters.map((character) => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                        onEdit={() => onEditCharacter(character)}
                        onDelete={() => onDeleteCharacter(character.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CharacterList;
