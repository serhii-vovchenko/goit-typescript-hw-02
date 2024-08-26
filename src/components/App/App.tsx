import { useEffect, useState } from 'react'

import './App.css'

import SearchBar from '../SearchBar/SearchBar'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ImageGallery from '../ImageGallery/ImageGallery'
import ImageModal from '../ImageModal/ImageModal'
import Loader from '../Loader/Loader'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import searchInDatabase from '../../services/api-query'

function App() {
	const [search, setSearch] = useState('')
	const [collections, setCollections] = useState([])
	const [page, setPage] = useState(1)
	const [errorMessage, setErrorMessage] = useState(false)
	const [loader, setLoader] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [modalIsOpen, setIsOpen] = useState(false)
	const [modalImg, setModalImg] = useState([])

	useEffect(() => {
		if (!search) return

		const getData = async () => {
			try {
				setLoader(true)
				const response = await searchInDatabase(search, page)
				setCollections(prev => [...prev, ...response.results])
				setTotalPages(response.total_pages)
				setErrorMessage(false)
			} catch (err) {
				setErrorMessage(true)
			} finally {
				setLoader(false)
			}
		}

		getData()
	}, [search, page])

	const onSubmit = queryText => {
		setCollections([])
		setPage(1)
		setSearch(queryText)
	}

	const onLoadMore = () => {
		setPage(prev => prev + 1)
	}

	const openModal = imgLink => {
		setModalImg(imgLink)
		setIsOpen(true)
	}

	function closeModal() {
		setIsOpen(false)
	}

	return (
		<>
			<SearchBar onSubmit={onSubmit} />
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
				setIsOpen={setIsOpen}
				closeModal={closeModal}
				modalImg={modalImg}
			/>
		</>
	)
}

export default App
