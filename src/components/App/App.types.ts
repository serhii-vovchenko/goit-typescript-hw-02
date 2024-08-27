export interface Collections {
	id: string;
	description: string;
	urls: {
		regular: string;
		small: string;
	};
}

export interface ModalImgProps {
	link: string;
	title: string;
}
