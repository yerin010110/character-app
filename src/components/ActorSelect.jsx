import { useState } from "react";

function ActorSelect({ actors, currentActorIds, onAdd }) {
    const [isOpen, setIsOpen] = useState(false);

    const availableActors = actors.filter(
        (actor) => !currentActorIds.includes(actor.id)
    );

    return (
        <div style={{ marginTop: "12px" }}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    padding: "6px 12px",
                    backgroundColor: "#333",
                    color: "#fff",
                    borderRadius: "4px",
                    cursor: "pointer",
                    border: "1px solid #333",
                    fontSize: "13px",
                }}
            >
                ✨ 배우 추가
            </button>

            {isOpen && (
                <div
                    style={{
                        marginTop: "10px",
                        padding: "12px",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        backgroundColor: "#fafafa",
                    }}
                >
                    <h4 style={{ marginBottom: "8px", fontSize: "13px" }}>
                        ✅ 배우 선택
                    </h4>
                    {availableActors.length === 0 ? (
                        <p style={{ fontSize: "12px", color: "#999" }}>
                            😥 추가 가능한 배우가 없습니다.
                        </p>
                    ) : (
                        <ul style={{ paddingLeft: "16px", fontSize: "13px" }}>
                            {availableActors.map((actor) => (
                                <li
                                    key={actor.id}
                                    style={{ marginBottom: "4px" }}
                                >
                                    <button
                                        type="button"
                                        onClick={() => onAdd(actor.id)}
                                        style={{
                                            background: "none",
                                            border: "none",
                                            padding: 0,
                                            color: "#0077cc",
                                            cursor: "pointer",
                                            fontSize: "13px",
                                        }}
                                    >
                                        {actor.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}

export default ActorSelect;
