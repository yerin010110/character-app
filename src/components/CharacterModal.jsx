function CharacterModal({ character, onClose }) {
    if (!character) return null;

    return (
        <div className="ac-modal-backdrop" onClick={onClose}>
            <div className="ac-modal" onClick={(e) => e.stopPropagation()}>
                <button className="ac-modal-close" onClick={onClose}>
                    ×
                </button>

                <img
                    src={
                        character.image.startsWith("http")
                            ? character.image
                            : `/images/${character.image}`
                    }
                    alt={character.name}
                    className="ac-modal-img"
                />

                <div className="ac-modal-name">{character.name}</div>
                <div className="ac-modal-sub">
                    {character.species} · {character.personality}
                </div>

                <div className="ac-modal-meta">생일: {character.birthday}</div>
                <div className="ac-modal-tag">
                    말버릇: {character.catchPhrase}
                </div>
            </div>
        </div>
    );
}

export default CharacterModal;
