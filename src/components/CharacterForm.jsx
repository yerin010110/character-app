// src/components/CharacterForm.jsx
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
            <h3 className="ac-form-title">
                {isEdit ? "캐릭터 수정" : "새 캐릭터 추가"}
            </h3>

            {/* 위쪽 2 x 2 입력 영역 */}
            <div className="ac-form-grid">
                <div className="ac-form-field">
                    <label className="ac-form-label">이름</label>
                    <input
                        className="ac-form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="예: 레이니"
                    />
                </div>

                <div className="ac-form-field">
                    <label className="ac-form-label">종(동물 종류)</label>
                    <input
                        className="ac-form-input"
                        value={species}
                        onChange={(e) => setSpecies(e.target.value)}
                        placeholder="예: 개구리, 늑대"
                    />
                </div>

                <div className="ac-form-field">
                    <label className="ac-form-label">성격</label>
                    <input
                        className="ac-form-input"
                        value={personality}
                        onChange={(e) => setPersonality(e.target.value)}
                        placeholder="예: 청순, 우아, 무뚝뚝"
                    />
                </div>

                <div className="ac-form-field">
                    <label className="ac-form-label">생일</label>
                    <input
                        className="ac-form-input"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        placeholder="예: 2월 17일"
                    />
                </div>
            </div>

            {/* 말버릇 */}
            <div className="ac-form-row">
                <label className="ac-form-label">말버릇</label>
                <input
                    className="ac-form-input"
                    value={catchPhrase}
                    onChange={(e) => setCatchPhrase(e.target.value)}
                    placeholder="예: 개굴개굴"
                />
            </div>

            {/* 이미지 파일명 / URL */}
            <div className="ac-form-row">
                <label className="ac-form-label">
                    이미지 파일명 (public/images 기준)
                </label>
                <input
                    className="ac-form-input"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="예: Lily.jpg 또는 https://example.com/image.png"
                />
            </div>

            <div className="ac-form-buttons">
                <button type="submit" className="ac-form-submit">
                    {isEdit ? "수정 완료" : "캐릭터 추가"}
                </button>

                {isEdit && (
                    <button
                        type="button"
                        onClick={onCancelEdit}
                        className="ac-form-cancel"
                    >
                        수정 취소
                    </button>
                )}
            </div>
        </form>
    );
}

export default CharacterForm;
