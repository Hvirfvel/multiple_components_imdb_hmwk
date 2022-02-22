import '../Film.css';

const Film = ({name, url}) => {
    return (
        <h4>
            <a href={url} className="film">{name}</a>
        </h4>
        
    );
}

export default Film;