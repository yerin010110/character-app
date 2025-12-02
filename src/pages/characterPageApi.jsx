import { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";

function CharacterPageApi() {
    const [characters, setCharacters] = useState([]);
    const [speciesFilter, setSpeciesFilter] = useState("전체");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ACNH API에서 주민 정보 불러오기
    useEffect(() => {
        async function loadVillagers() {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch("https://acnhapi.com/v1a/villagers");
                if (!res.ok) {
                    throw new Error("ACNH API 요청 실패");
                }

                const data = await res.json();

                const mapped = data.map((v) => ({
                    id: v.id,
                    name: v.name["name-KRko"] ?? v.name["name-USen"],
                    species: v.species,
                    personality: v.personality,
                    birthday: v["birthday-string"],
                    catchPhrase: v["catch-phrase"],
                    image: v.image_uri,
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
                    동물의 숲 주민 정보를 불러오는 중입니다...
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
        <section className="ac-section ac-font">
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

            {/* 캐릭터 리스트 – API 버전은 조회 전용이라 onEdit/onDelete는 안 씀 */}
            <CharacterList
                characters={filtered}
                onEditCharacter={() => {}}
                onDeleteCharacter={() => {}}
            />
        </section>
    );
}

export default CharacterPageApi;
