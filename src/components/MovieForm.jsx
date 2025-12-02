// src/components/MovieForm.jsx
import { useState } from "react";

function MovieForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !genre.trim() || !year.trim()) {
            alert("제목, 장르, 연도는 필수입니다.");
            return;
        }

        const parsedYear = Number(year);
        if (Number.isNaN(parsedYear)) {
            alert("연도는 숫자로 입력해주세요.");
            return;
        }

        onAdd({
            title: title.trim(),
            genre: genre.trim(),
            year: parsedYear,
            description: description.trim() || "줄거리 미등록",
        });

        // 입력값 초기화
        setTitle("");
        setGenre("");
        setYear("");
        setDescription("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "12px",
                marginBottom: "16px",
                backgroundColor: "#fafafa",
            }}
        >
            <h3 style={{ fontSize: "14px", marginBottom: "8px" }}>영화 추가</h3>

            <div style={{ marginBottom: "6px" }}>
                <label
                    style={{
                        display: "block",
                        fontSize: "12px",
                        marginBottom: "2px",
                    }}
                >
                    제목
                </label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: "100%", padding: "6px", fontSize: "13px" }}
                    placeholder="예: Interstellar"
                />
            </div>

            <div style={{ marginBottom: "6px" }}>
                <label
                    style={{
                        display: "block",
                        fontSize: "12px",
                        marginBottom: "2px",
                    }}
                >
                    장르
                </label>
                <input
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    style={{ width: "100%", padding: "6px", fontSize: "13px" }}
                    placeholder="예: SF, Animation 등"
                />
            </div>

            <div style={{ marginBottom: "6px" }}>
                <label
                    style={{
                        display: "block",
                        fontSize: "12px",
                        marginBottom: "2px",
                    }}
                >
                    연도
                </label>
                <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    style={{ width: "100%", padding: "6px", fontSize: "13px" }}
                    placeholder="예: 2014"
                />
            </div>

            <div style={{ marginBottom: "8px" }}>
                <label
                    style={{
                        display: "block",
                        fontSize: "12px",
                        marginBottom: "2px",
                    }}
                >
                    줄거리
                </label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    style={{
                        width: "100%",
                        padding: "6px",
                        fontSize: "13px",
                        resize: "vertical",
                    }}
                    placeholder="간단한 줄거리를 적어주세요. (선택)"
                />
            </div>

            <button
                type="submit"
                style={{
                    padding: "6px 12px",
                    fontSize: "13px",
                    borderRadius: "4px",
                    border: "1px solid #333",
                    backgroundColor: "#333",
                    color: "#fff",
                    cursor: "pointer",
                }}
            >
                영화 추가
            </button>
        </form>
    );
}

export default MovieForm;
