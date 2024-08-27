import { useEffect, useState } from 'react';

import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import searchInDatabase from '../../services/api-query';
import { Collections, ModalImgProps } from './App.types';

function App() {
	const [search, setSearch] = useState<string>('');
	const [collections, setCollections] = useState<Collections[]>([]);
	const [page, setPage] = useState<number>(1);
	const [errorMessage, setErrorMessage] = useState<boolean>(false);
	const [loader, setLoader] = useState<boolean>(false);
	const [totalPages, setTotalPages] = useState<number>(0);
	const [modalIsOpen, setIsOpen] = useState<boolean>(false);
	const [modalImg, setModalImg] = useState<ModalImgProps>({
		link: '',
		title: '',
	});

	useEffect(() => {
		if (!search) return;

		const getData = async (): Promise<void> => {
			try {
				setLoader(true);
				const response = await searchInDatabase(search, page);
				setCollections(prev => [...prev, ...response.results]);
				setTotalPages(response.total_pages);
				setErrorMessage(false);
			} catch (err) {
				setErrorMessage(true);
				console.log(err);
			} finally {
				setLoader(false);
			}
		};

		getData();
	}, [search, page]);

	const onSubmit = (queryText: string): void => {
		setCollections([]);
		setPage(1);
		setSearch(queryText);
	};

	const onLoadMore = (): void => {
		setPage(prev => prev + 1);
	};

	const openModal = (imgLink: ModalImgProps): void => {
		setModalImg(imgLink);
		setIsOpen(true);
	};

	function closeModal(): void {
		setIsOpen(false);
	}

	return (
		<>
			<SearchBar onSubmit={onSubmit} search={search} />
			{errorMessage ? (
				<ErrorMessage />
			) : (
				<ImageGallery collections={collections} openModal={openModal} />
			)}
			{loader && <Loader />}
			{totalPages > page && !errorMessage && !loader && (
				<LoadMoreBtn onLoadMore={onLoadMore} />
			)}
			<ImageModal
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				modalImg={modalImg}
			/>
		</>
	);
}

export default App;
