import s from './ImageCard.module.css';

const ImageCard = ({ links, title, openModal }) => {
    const { small, regular } = links;

    return (
        <div className={s.wrapper}>
            <img
                className={s.img}
                src={small}
                alt={title}
                onClick={() => openModal([regular, title])}
            />
        </div>
    );
};

export default ImageCard;
