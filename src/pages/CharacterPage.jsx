// src/pages/CharacterPage.jsx
import { useState } from "react";
import CharacterList from "../components/CharacterList";
import CharacterForm from "../components/CharacterForm";

function CharacterPage() {
    const initialCharacters = [
        {
            id: 1,
            name: "레이니",
            species: "개구리",
            personality: "청순",
            birthday: "2월 17일",
            catchPhrase: "개굴개굴",
            image: "Lily.jpg",
        },
        {
            id: 2,
            name: "비앙카",
            species: "늑대",
            personality: "우아",
            birthday: "9월 17일",
            catchPhrase: "울프",
            image: "Whitney.jpg",
        },
        {
            id: 3,
            name: "미미",
            species: "고양이",
            personality: "발랄",
            birthday: "5월 25일",
            catchPhrase: "냐옹",
            image: "mimi.jpg",
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

    const [characters, setCharacters] = useState(initialCharacters);
    const [editingCharacter, setEditingCharacter] = useState(null);

    // 추가
    const handleAddCharacter = (newData) => {
        const newCharacter = {
            id: Date.now(),
            ...newData,
        };
        setCharacters((prev) => [...prev, newCharacter]);
    };

    // 수정
    const handleEditCharacter = (updatedData) => {
        setCharacters((prev) =>
            prev.map((c) =>
                c.id === editingCharacter.id ? { ...c, ...updatedData } : c
            )
        );
        setEditingCharacter(null);
    };

    // 삭제
    const handleDeleteCharacter = (id) => {
        setCharacters((prev) => prev.filter((c) => c.id !== id));
    };

    return (
        <section className="ac-section ac-font">
            <h2>동물의 숲 주민 도감</h2>

            {/* 폼 (추가/수정) */}
            <CharacterForm
                onSubmit={
                    editingCharacter ? handleEditCharacter : handleAddCharacter
                }
                editingCharacter={editingCharacter}
                onCancelEdit={() => setEditingCharacter(null)}
            />

            {/* 리스트 */}
            <CharacterList
                characters={characters}
                onEditCharacter={(id) =>
                    setEditingCharacter(characters.find((c) => c.id === id))
                }
                onDeleteCharacter={handleDeleteCharacter}
            />
        </section>
    );
}

export default CharacterPage;
