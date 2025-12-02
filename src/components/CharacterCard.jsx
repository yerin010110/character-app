function CharacterCard({ character, onEdit, onDelete }) {
    const imgSrc = character.image.startsWith("http")
        ? character.image
        : `/images/${character.image}`;

    return (
        <div className="ac-character-card ac-font">
            <img
                src={imgSrc}
                alt={character.name}
                className="ac-character-img"
            />

            <div className="ac-character-name">{character.name}</div>
            <div className="ac-character-sub">
                {character.species} · {character.personality}
            </div>

            <div className="ac-character-meta">생일: {character.birthday}</div>
            <div className="ac-tag">말버릇: {character.catchPhrase}</div>

            <div style={{ marginTop: "8px", display: "flex", gap: "6px" }}>
                <button className="ac-btn-edit" onClick={onEdit}>
                    수정
                </button>
                <button className="ac-btn-del" onClick={onDelete}>
                    삭제
                </button>
            </div>
        </div>
    );
}

export default CharacterCard;
