import Film from "./Film";

const UpcomingFilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return(
            <Film name={film.name} url={film.url} key={film.id}/>
        );
    })

    return (
        <>
            {filmNodes}
        </>
    );
}

export default UpcomingFilmList;