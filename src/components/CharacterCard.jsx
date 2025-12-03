function CharacterCard({ character, onClick, onEdit, onDelete }) {
    return (
        <div className="ac-character-card" onClick={onClick}>
            <div className="ac-character-img-wrap">
                <img
                    src={
                        character.image.startsWith("http")
                            ? character.image
                            : `/images/${character.image}`
                    }
                    alt={character.name}
                    className="ac-character-img"
                />
            </div>

            <div className="ac-character-name">{character.name}</div>
            <div className="ac-character-sub">
                {character.species} · {character.personality}
            </div>

            <div className="ac-card-buttons">
                <button
                    className="ac-btn-edit"
                    onClick={(e) => {
                        e.stopPropagation();
                        onEdit();
                    }}
                >
                    수정
                </button>

                <button
                    className="ac-btn-del"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete();
                    }}
                >
                    삭제
                </button>
            </div>
        </div>
    );
}

export default CharacterCard;
