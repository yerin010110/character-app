import CharacterCard from "./CharacterCard";

function CharacterList({
    characters,
    onEditCharacter,
    onDeleteCharacter,
    onSelectCharacter,
}) {
    return (
        <div className="ac-grid-wrapper">
            <div className="ac-grid">
                {characters.map((c) => (
                    <CharacterCard
                        key={c.id}
                        character={c}
                        onClick={() => onSelectCharacter(c)}
                        onEdit={() => onEditCharacter(c.id)}
                        onDelete={() => onDeleteCharacter(c.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CharacterList;
