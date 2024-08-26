import s from './ImageModal.module.css';
import Modal from 'react-modal';

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
const ImageModal = ({ modalIsOpen, closeModal, modalImg }) => {
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <img src={modalImg[0]} alt={modalImg[1]} />
            </Modal>
        </div>
    );
};

export default ImageModal;
