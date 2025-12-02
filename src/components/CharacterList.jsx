import CharacterCard from "./CharacterCard";

function CharacterList({ characters, onEditCharacter, onDeleteCharacter }) {
    if (characters.length === 0) {
        return (
            <p style={{ textAlign: "center", color: "#6b7280" }}>
                조건에 맞는 주민이 없습니다.
            </p>
        );
    }

    return (
        <div className="ac-grid-wrapper">
            <div className="ac-grid">
                {characters.map((c) => (
                    <CharacterCard
                        key={c.id}
                        character={c}
                        onEdit={() => onEditCharacter(c.id)}
                        onDelete={() => onDeleteCharacter(c.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CharacterList;
