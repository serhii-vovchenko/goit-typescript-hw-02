import { Collections, ModalImgProps } from '../App/App.types';

interface ImageGalleryProps {
	collections: Collections[];
	openModal: ({ link, title }: ModalImgProps) => void;
}

export default ImageGalleryProps;
