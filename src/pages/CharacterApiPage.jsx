import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

function CharacterApiPage() {
    const [characters, setCharacters] = useState([]);
    const [speciesFilter, setSpeciesFilter] = useState("전체");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadVillagers() {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch("https://acnhapi.com/v1/villagers/");
                if (!res.ok) {
                    throw new Error("ACNH API 요청 실패");
                }

                const data = await res.json(); // 객체 형태 { "1": {...}, "2": {...}, ... }

                // 값만 뽑아서 배열로 변환
                const list = Object.values(data);

                const mapped = list.map((v) => ({
                    id: v.id,
                    name: v.name["name-KRko"] ?? v.name["name-USen"],
                    species: v.species, // 예: "Frog"
                    personality: v.personality, // 예: "Normal"
                    birthday: v["birthday-string"], // 예: "February 17th"
                    catchPhrase: v["catch-phrase"], // 예: "개굴개굴"
                    image: v.image_uri, // 이미지 전체 URL
                }));

                setCharacters(mapped);
            } catch (err) {
                console.error(err);
                setError("주민 데이터를 불러오는 중 오류가 발생했습니다.");
            } finally {
                setLoading(false);
            }
        }

        loadVillagers();
    }, []);

    const speciesList = ["전체", ...new Set(characters.map((c) => c.species))];

    const filtered = characters.filter((c) =>
        speciesFilter === "전체" ? true : c.species === speciesFilter
    );

    if (loading) {
        return (
            <section className="ac-section ac-font">
                <p style={{ fontSize: "14px" }}>
                    동물의 숲 주민 정보를 불러오는 중입니다…
                </p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="ac-section ac-font">
                <p style={{ fontSize: "14px", color: "#b91c1c" }}>{error}</p>
            </section>
        );
    }

    return (
        <section className="ac-section ac-font" style={{ padding: "20px 0" }}>
            <div className="ac-hero">
                <div className="ac-hero-left">
                    <div className="ac-hero-title">
                        동물의 숲 주민 도감 (ACNH API)
                    </div>
                    <div className="ac-hero-sub">
                        ACNH 공개 API에서 실시간으로 주민 정보를 가져옵니다.
                    </div>
                    <span className="ac-hero-badge">
                        현재 주민 수 {filtered.length}명 / 전체{" "}
                        {characters.length}명
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

            {/* 종 필터 */}
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
            <div className="ac-grid-wrapper">
                <div className="ac-grid">
                    {filtered.map((ch) => (
                        <CharacterCard key={ch.id} character={ch} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CharacterApiPage;
