import s from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ collections, openModal }) => {
    if (collections.length === 0) {
        return;
    }

    return (
        <ul className={s.wrapper}>
            {collections.map(dataImg => {
                const { id, urls, description } = dataImg;
                return (
                    <li key={id}>
                        <ImageCard
                            links={urls}
                            title={description}
                            openModal={openModal}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default ImageGallery;
