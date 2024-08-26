import s from './Loader.module.css'
import ThreeCircles from 'react-spinners/PropagateLoader'

const Loader = () => {
	return (
		<div className={s.wrapper}>
			<ThreeCircles
				visible={true}
				height='100'
				width='100'
				color='blue'
				ariaLabel='three-circles-loading'
				wrapperStyle={{}}
				wrapperClass=''
			/>
		</div>
	)
}

export default Loader
