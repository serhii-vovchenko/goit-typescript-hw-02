import { FC } from 'react';
import s from './LoadMoreBtn.module.css';
import OnLoadMoreProps from './LoadMoreBtn.types';

const LoadMoreBtn: FC<OnLoadMoreProps> = ({ onLoadMore }) => {
	return (
		<button className={s.btn} type="button" onClick={onLoadMore}>
			Load more
		</button>
	);
};

export default LoadMoreBtn;
