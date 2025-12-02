import MovieCard from "./MovieCard";

function MovieList({ movies, selectedMovieId, onSelect }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "12px",
                maxHeight: "400px",
                overflowY: "auto",
            }}
        >
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    active={movie.id === selectedMovieId}
                    onClick={() => onSelect(movie.id)}
                />
            ))}
        </div>
    );
}

export default MovieList;
