// src/components/CharacterCard.jsx
function CharacterCard({ character, onEdit, onDelete }) {
    const src = character.image?.startsWith("http")
        ? character.image // 외부 URL (ACNH API)
        : `/images/${character.image}`; // 로컬 파일명

    return (
        <div className="ac-character-card ac-font">
            <div className="ac-character-img-wrap">
                <img
                    src={src}
                    alt={character.name}
                    className="ac-character-img"
                />
            </div>

            <div className="ac-character-name">{character.name}</div>
            <div className="ac-character-sub">
                {character.species} · {character.personality}
            </div>

            <div className="ac-character-meta">생일: {character.birthday}</div>
            <div className="ac-tag">말버릇: {character.catchPhrase}</div>

            {/* API 버전에서는 수정/삭제 안 써도 됨 */}
            {onEdit && onDelete && (
                <div
                    style={{
                        marginTop: "6px",
                        display: "flex",
                        gap: "6px",
                        justifyContent: "center",
                    }}
                >
                    <button
                        type="button"
                        className="ac-btn-fav"
                        onClick={onEdit}
                    >
                        수정
                    </button>
                    <button
                        type="button"
                        style={{
                            padding: "4px 10px",
                            borderRadius: "999px",
                            border: "none",
                            background: "#ef4444",
                            color: "#fff",
                            fontSize: "11px",
                            cursor: "pointer",
                        }}
                        onClick={onDelete}
                    >
                        삭제
                    </button>
                </div>
            )}
        </div>
    );
}

export default CharacterCard;
