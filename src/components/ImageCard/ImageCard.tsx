import { FC } from 'react';
import s from './ImageCard.module.css';
import ImageCardProps from './ImageCard.types';

const ImageCard: FC<ImageCardProps> = ({ links, title, openModal }) => {
	const { small, regular } = links;

	return (
		<div className={s.wrapper}>
			<img
				className={s.img}
				src={small}
				alt={title}
				onClick={() => openModal({ link: regular, title: title })}
			/>
		</div>
	);
};

export default ImageCard;
