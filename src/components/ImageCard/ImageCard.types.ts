import { ModalImgProps } from '../App/App.types';

interface ImageCardProps {
	links: {
		small: string;
		regular: string;
	};
	title: string;
	openModal: ({ link, title }: ModalImgProps) => void;
}
export default ImageCardProps;
