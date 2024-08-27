import s from './SearchBar.module.css';
import { IoIosSearch } from 'react-icons/io';
import toast, { Toaster } from 'react-hot-toast';
import { FC, FormEvent } from 'react';
import SearchBarProps from './SearchBar.types';

export const SearchBar: FC<SearchBarProps> = ({ onSubmit, search }) => {
	const onSubmitText = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.target as HTMLFormElement;
		const queryText =
			(form.elements.namedItem('userSearch') as HTMLInputElement)?.value || '';

		if (!queryText) {
			toast.error('Please fill in the search field...');
			return;
		}

		form.reset();

		if (queryText === search) {
			toast.error('This request is already displayed on the page');
			return;
		}
		onSubmit(queryText);
	};

	return (
		<>
			<Toaster position="top-right" reverseOrder={false} />
			<header className={s.wrapper}>
				<form className={s.form} onSubmit={onSubmitText}>
					<input
						className={s.input}
						type="text"
						name="userSearch"
						placeholder="Search images and photos"
					/>

					<button className={s.btn} type="submit">
						<IoIosSearch size="18" color="blue" />
					</button>
				</form>
			</header>
		</>
	);
};

export default SearchBar;
