function MovieCard({ movie, active, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            style={{
                width: "100%",
                textAlign: "left",
                padding: "8px 10px",
                marginBottom: "6px",
                borderRadius: "6px",
                border: active ? "1px solid #333" : "1px solid #eee",
                backgroundColor: active ? "#f0f0f0" : "#fff",
                cursor: "pointer",
            }}
        >
            <div
                style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    marginBottom: "2px",
                }}
            >
                {movie.title}
            </div>
            <div style={{ fontSize: "12px", color: "#777" }}>
                {movie.genre} · {movie.year}
            </div>
        </button>
    );
}

export default MovieCard;
