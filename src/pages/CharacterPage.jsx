// src/pages/CharacterPage.jsx
import { useState } from "react";
import CharacterList from "../components/CharacterList";
import CharacterForm from "../components/CharacterForm";

const initialCharacters = [
    {
        id: 1,
        name: "레이니",
        species: "개구리",
        personality: "청순",
        birthday: "2월 17일",
        catchPhrase: "개굴개굴",
        image: "Lily.jpg", // public/images/Lily.jpg
    },
    {
        id: 2,
        name: "비앙카",
        species: "늑대",
        personality: "우아",
        birthday: "9월 17일",
        catchPhrase: "울프",
        image: "Whitney.jpg", // public/images/Whitney.jpg
    },
    {
        id: 3,
        name: "미미",
        species: "고양이",
        personality: "발랄",
        birthday: "5월 25일",
        catchPhrase: "냐옹",
        image: "mimi.jpg", // public/images/mimi.jpg
    },
    {
        id: 4,
        name: "리처드",
        species: "오리",
        personality: "먹보",
        birthday: "1월 3일",
        catchPhrase: "그래유",
        image: "rech.jpg",
    },
    {
        id: 5,
        name: "잭슨",
        species: "고양이",
        personality: "느끼함",
        birthday: "10월 01일",
        catchPhrase: "우쭐",
        image: "Jackson.jpg",
    },
];

function CharacterPage() {
    const [characters, setCharacters] = useState(initialCharacters);
    const [speciesFilter, setSpeciesFilter] = useState("전체");
    const [editingCharacter, setEditingCharacter] = useState(null);

    const speciesList = ["전체", ...new Set(characters.map((c) => c.species))];

    const filtered = characters.filter((c) =>
        speciesFilter === "전체" ? true : c.species === speciesFilter
    );

    // 추가 또는 수정 완료 시 호출
    const handleSubmitCharacter = (data) => {
        if (editingCharacter) {
            // 수정
            setCharacters((prev) =>
                prev.map((item) =>
                    item.id === editingCharacter.id
                        ? { ...item, ...data }
                        : item
                )
            );
            setEditingCharacter(null);
        } else {
            // 추가
            const nextId =
                characters.length > 0
                    ? Math.max(...characters.map((c) => c.id)) + 1
                    : 1;

            setCharacters((prev) => [
                ...prev,
                {
                    id: nextId,
                    ...data,
                },
            ]);
        }
    };

    const handleDeleteCharacter = (id) => {
        if (!window.confirm("정말 이 캐릭터를 삭제하시겠습니까?")) return;
        setCharacters((prev) => prev.filter((c) => c.id !== id));
        if (editingCharacter && editingCharacter.id === id) {
            setEditingCharacter(null);
        }
    };

    const handleCancelEdit = () => {
        setEditingCharacter(null);
    };

    return (
        <section className="ac-section ac-font">
            <div className="ac-hero">
                <div className="ac-hero-left">
                    <div className="ac-hero-title">동물의 숲 주민 도감</div>
                    <div className="ac-hero-sub">
                        좋아하는 주민들의 정보와 생일, 말버릇을 한눈에 확인할 수
                        있습니다.
                    </div>
                    <span className="ac-hero-badge">
                        현재 주민 수 {characters.length}명
                    </span>
                </div>
                <div className="ac-hero-right">
                    <img
                        src="/images/leaf.jpg"
                        alt="동물의 숲 잎 아이콘"
                        style={{
                            width: "56px",
                            height: "56px",
                            borderRadius: "16px",
                        }}
                    />
                </div>
            </div>

            {/* 추가/수정 폼 */}
            <CharacterForm
                onSubmit={handleSubmitCharacter}
                editingCharacter={editingCharacter}
                onCancelEdit={handleCancelEdit}
            />

            {/* 필터 */}
            <div className="ac-filter-bar">
                종(동물 종류)
                <select
                    className="ac-select"
                    value={speciesFilter}
                    onChange={(e) => setSpeciesFilter(e.target.value)}
                >
                    {speciesList.map((sp) => (
                        <option key={sp} value={sp}>
                            {sp}
                        </option>
                    ))}
                </select>
            </div>

            {/* 캐릭터 리스트 */}
            <CharacterList
                characters={filtered}
                onEditCharacter={setEditingCharacter}
                onDeleteCharacter={handleDeleteCharacter}
            />
        </section>
    );
}

export default CharacterPage;
