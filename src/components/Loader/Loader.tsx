import s from './Loader.module.css';
import { PropagateLoader } from 'react-spinners';
import { FC } from 'react';

const Loader: FC = () => {
	return (
		<div className={s.wrapper}>
			<PropagateLoader color="blue" />
		</div>
	);
};

export default Loader;
