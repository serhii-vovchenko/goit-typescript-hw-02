import { FC } from 'react';
import s from './ErrorMessage.module.css';

const ErrorMessage: FC = () => {
	return <p className={s.error}>Error, please try again...</p>;
};

export default ErrorMessage;
