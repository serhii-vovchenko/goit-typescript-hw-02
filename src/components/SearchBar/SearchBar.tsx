import s from './SearchBar.module.css';
import { IoIosSearch } from 'react-icons/io';
import toast, { Toaster } from 'react-hot-toast';

export const SearchBar = ({ onSubmit }) => {
    const onSubmitText = event => {
        event.preventDefault();

        const queryText = event.target.elements.userSearch.value;

        if (!queryText) {
            toast.error('Please fill in the search field...');
            return;
        }

        onSubmit(queryText);
        event.target.reset();
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
