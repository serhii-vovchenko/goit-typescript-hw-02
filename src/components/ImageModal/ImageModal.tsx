// import s from './ImageModal.module.css';
import Modal from 'react-modal';
import { ImageModalProps } from './ImageModal.types';
import { FC } from 'react';
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'transparent',
		border: 'transparent',
	},
	overlay: {
		backgroundColor: 'rgba(0,0,0,0.85)',
	},
};

Modal.setAppElement('#root');
const ImageModal: FC<ImageModalProps> = ({
	modalIsOpen,
	closeModal,
	modalImg,
}) => {
	const { link, title } = modalImg;

	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<img src={link} alt={title} />
			</Modal>
		</div>
	);
};

export default ImageModal;
