import { useEffect, useState } from "react";

function CharacterForm({ onSubmit, editingCharacter, onCancelEdit }) {
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [personality, setPersonality] = useState("");
    const [birthday, setBirthday] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");
    const [image, setImage] = useState("");

    // 수정 모드일 때 값 채워 넣기
    useEffect(() => {
        if (editingCharacter) {
            setName(editingCharacter.name);
            setSpecies(editingCharacter.species);
            setPersonality(editingCharacter.personality);
            setBirthday(editingCharacter.birthday);
            setCatchPhrase(editingCharacter.catchPhrase);
            setImage(editingCharacter.image);
        } else {
            setName("");
            setSpecies("");
            setPersonality("");
            setBirthday("");
            setCatchPhrase("");
            setImage("");
        }
    }, [editingCharacter]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !species.trim()) {
            alert("이름과 종은 필수입니다.");
            return;
        }

        const payload = {
            name: name.trim(),
            species: species.trim(),
            personality: personality.trim(),
            birthday: birthday.trim(),
            catchPhrase: catchPhrase.trim(),
            image: image.trim() || "default.jpg",
        };

        onSubmit(payload);
    };

    const isEdit = Boolean(editingCharacter);

    return (
        <form className="ac-form-box" onSubmit={handleSubmit}>
            <h3 style={{ fontSize: "15px", marginBottom: "8px" }}>
                {isEdit ? "캐릭터 수정" : "새 캐릭터 추가"}
            </h3>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px",
                }}
            >
                <div>
                    <label
                        style={{
                            fontSize: "12px",
                            display: "block",
                            marginBottom: "2px",
                        }}
                    >
                        이름
                    </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "6px",
                            fontSize: "13px",
                        }}
                        placeholder="예: 레이니"
                    />
                </div>

                <div>
                    <label
                        style={{
                            fontSize: "12px",
                            display: "block",
                            marginBottom: "2px",
                        }}
                    >
                        종(동물 종류)
                    </label>
                    <input
                        value={species}
                        onChange={(e) => setSpecies(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "6px",
                            fontSize: "13px",
                        }}
                        placeholder="예: 개구리, 늑대"
                    />
                </div>

                <div>
                    <label
                        style={{
                            fontSize: "12px",
                            display: "block",
                            marginBottom: "2px",
                        }}
                    >
                        성격
                    </label>
                    <input
                        value={personality}
                        onChange={(e) => setPersonality(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "6px",
                            fontSize: "13px",
                        }}
                        placeholder="예: 청순, 우아, 무뚝뚝"
                    />
                </div>

                <div>
                    <label
                        style={{
                            fontSize: "12px",
                            display: "block",
                            marginBottom: "2px",
                        }}
                    >
                        생일
                    </label>
                    <input
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "6px",
                            fontSize: "13px",
                        }}
                        placeholder="예: 2월 17일"
                    />
                </div>
            </div>

            <div style={{ marginTop: "8px" }}>
                <label
                    style={{
                        fontSize: "12px",
                        display: "block",
                        marginBottom: "2px",
                    }}
                >
                    말버릇
                </label>
                <input
                    value={catchPhrase}
                    onChange={(e) => setCatchPhrase(e.target.value)}
                    style={{ width: "100%", padding: "6px", fontSize: "13px" }}
                    placeholder="예: 개굴개굴"
                />
            </div>

            <div style={{ marginTop: "8px" }}>
                <label
                    style={{
                        fontSize: "12px",
                        display: "block",
                        marginBottom: "2px",
                    }}
                >
                    이미지 파일명 (public/images 기준)
                </label>
                <input
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    style={{ width: "100%", padding: "6px", fontSize: "13px" }}
                    placeholder="예: Lily.jpg 또는 https://example.com/image.png"
                />
            </div>

            <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
                <button
                    type="submit"
                    style={{
                        padding: "6px 12px",
                        borderRadius: "999px",
                        border: "1px solid #16a34a",
                        background: "#22c55e",
                        color: "#fff",
                        fontSize: "13px",
                        cursor: "pointer",
                    }}
                >
                    {isEdit ? "수정 완료" : "캐릭터 추가"}
                </button>

                {isEdit && (
                    <button
                        type="button"
                        onClick={onCancelEdit}
                        style={{
                            padding: "6px 12px",
                            borderRadius: "999px",
                            border: "1px solid #9ca3af",
                            background: "#e5e7eb",
                            fontSize: "13px",
                            cursor: "pointer",
                        }}
                    >
                        수정 취소
                    </button>
                )}
            </div>
        </form>
    );
}

export default CharacterForm;
