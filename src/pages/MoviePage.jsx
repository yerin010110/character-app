// src/pages/MoviePage.jsx
import { useState } from "react";
import MovieList from "../components/MovieList";
import MovieForm from "../components/MovieForm";
import ActorSelect from "../components/ActorSelect";

const initialActors = [
    { id: 1, name: "Matthew McConaughey" },
    { id: 2, name: "Anne Hathaway" },
    { id: 3, name: "Jessica Chastain" },
    { id: 4, name: "Leonardo DiCaprio" },
    { id: 5, name: "Joseph Gordon-Levitt" },
    { id: 6, name: "Elliot Page" },
    { id: 7, name: "주디 홉스 - 지니퍼 굿윈 / 전해리" },
    { id: 8, name: "닉 와일드 - 제이슨 베이트먼 / 정재헌" },
    { id: 9, name: "게리 더 스네이크 - 키호이콴 / 전태열" },
];

const initialMovies = [
    {
        id: 1,
        title: "Interstellar",
        genre: "SF",
        year: 2014,
        description:
            "웜홀을 통해 인류의 새로운 보금자리를 찾는 우주 탐사 이야기",
        actorIds: [1, 2, 3],
    },
    {
        id: 2,
        title: "Inception",
        genre: "SF",
        year: 2010,
        description: "타인의 꿈속에 들어가 생각을 심는 특수 작전 팀의 이야기",
        actorIds: [4, 5, 6],
    },
    {
        id: 3,
        title: "Zootopia 2",
        genre: "Animation",
        year: 2010,
        description:
            "더 화려해진 세계, 더 넓어진 주토피아에서 주디와 닉이 다시 한 번 도시의 위기를 막기 위해 나서는 이야기",
        actorIds: [7, 8, 9],
    },
];

function MoviePage() {
    const [movies, setMovies] = useState(initialMovies);
    const [actors] = useState(initialActors);
    const [selectedMovieId, setSelectedMovieId] = useState(1);

    const selectedMovie = movies.find((m) => m.id === selectedMovieId);

    const selectedMovieActors =
        selectedMovie?.actorIds
            .map((id) => actors.find((a) => a.id === id))
            .filter(Boolean) ?? [];

    // 영화 추가
    const handleAddMovie = (newMovie) => {
        const nextId =
            movies.length > 0 ? Math.max(...movies.map((m) => m.id)) + 1 : 1;

        const movieToAdd = {
            id: nextId,
            actorIds: [],
            ...newMovie,
        };

        setMovies((prev) => [...prev, movieToAdd]);
    };

    // 선택된 영화에 배우 추가
    const handleAddActorToMovie = (actorId) => {
        setMovies((prev) =>
            prev.map((movie) =>
                movie.id === selectedMovieId
                    ? { ...movie, actorIds: [...movie.actorIds, actorId] }
                    : movie
            )
        );
    };

    // 선택된 영화에서 배우 제거
    const handleRemoveActorFromMovie = (actorId) => {
        setMovies((prev) =>
            prev.map((movie) =>
                movie.id === selectedMovieId
                    ? {
                          ...movie,
                          actorIds: movie.actorIds.filter(
                              (id) => id !== actorId
                          ),
                      }
                    : movie
            )
        );
    };

    return (
        <section>
            <h2 style={{ marginBottom: "8px" }}>영화 도감</h2>
            <p
                style={{
                    marginBottom: "16px",
                    color: "#555",
                    fontSize: "14px",
                }}
            >
                왼쪽에서 영화를 선택하면 오른쪽에 상세 정보와 출연 배우가
                표시됩니다.
            </p>

            {/* 영화 추가 폼 */}
            <MovieForm onAdd={handleAddMovie} />

            <div style={{ display: "flex", gap: "16px" }}>
                {/* 영화 리스트 영역 */}
                <div style={{ flex: 1 }}>
                    <MovieList
                        movies={movies}
                        selectedMovieId={selectedMovieId}
                        onSelect={setSelectedMovieId}
                    />
                </div>

                {/* 영화 상세 영역 */}
                <div
                    style={{
                        flex: 1,
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        padding: "16px",
                    }}
                >
                    {selectedMovie ? (
                        <>
                            <h3 style={{ marginBottom: "4px" }}>
                                {selectedMovie.title} ({selectedMovie.year})
                            </h3>
                            <p
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "8px",
                                    color: "#666",
                                }}
                            >
                                장르: {selectedMovie.genre}
                            </p>
                            <p
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "12px",
                                    lineHeight: 1.4,
                                }}
                            >
                                {selectedMovie.description}
                            </p>

                            <h4
                                style={{
                                    fontSize: "14px",
                                    marginBottom: "4px",
                                }}
                            >
                                출연 배우
                            </h4>

                            {selectedMovieActors.length > 0 ? (
                                <ul
                                    style={{
                                        fontSize: "14px",
                                        paddingLeft: "18px",
                                    }}
                                >
                                    {selectedMovieActors.map((actor) => (
                                        <li
                                            key={actor.id}
                                            style={{
                                                display: "flex",
                                                gap: "6px",
                                                alignItems: "center",
                                            }}
                                        >
                                            {actor.name}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleRemoveActorFromMovie(
                                                        actor.id
                                                    )
                                                }
                                                style={{
                                                    background: "none",
                                                    border: "none",
                                                    color: "red",
                                                    cursor: "pointer",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                X
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p style={{ fontSize: "13px", color: "#999" }}>
                                    등록된 출연 배우가 없습니다.
                                </p>
                            )}

                            {/* 배우 추가 선택 컴포넌트 */}
                            <ActorSelect
                                actors={actors}
                                currentActorIds={selectedMovie.actorIds}
                                onAdd={handleAddActorToMovie}
                            />
                        </>
                    ) : (
                        <p>선택된 영화가 없습니다.</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default MoviePage;
