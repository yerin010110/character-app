function Header({ currentTab, onChangeTab }) {
    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
            }}
        >
            <h1 style={{ fontSize: "20px", fontWeight: "700" }}>
                Movie & Character Library
            </h1>

            <nav style={{ display: "flex", gap: "8px" }}>
                <button
                    type="button"
                    onClick={() => onChangeTab("movies")}
                    style={{
                        padding: "6px 12px",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                        backgroundColor:
                            currentTab === "movies" ? "#333" : "#fff",
                        color: currentTab === "movies" ? "#fff" : "#333",
                        cursor: "pointer",
                    }}
                >
                    Movie Encyclopedia_영화 도감
                </button>
                <button
                    type="button"
                    onClick={() => onChangeTab("characters")}
                    style={{
                        padding: "6px 12px",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                        backgroundColor:
                            currentTab === "characters" ? "#333" : "#fff",
                        color: currentTab === "characters" ? "#fff" : "#333",
                        cursor: "pointer",
                    }}
                >
                    Character encyclopedia_캐릭터
                </button>
            </nav>
        </header>
    );
}

export default Header;
