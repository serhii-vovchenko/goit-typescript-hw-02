import { ModalImgProps } from '../App/App.types';

export interface ImageModalProps {
	modalIsOpen: boolean;
	closeModal: () => void;
	modalImg: ModalImgProps;
}
