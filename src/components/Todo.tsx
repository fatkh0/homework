import { makeStyles } from "@material-ui/styles";
import React from "react";
import { NavLink } from 'react-router-dom'


const useStyles = makeStyles({
	link: {
		color: '#222',
		textDecoration: 'none'
	},
	active: {},
	todoWrapper: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: '5px'
	},
	completed: {
		background: 'green'
	},
	notCompleted: {
		background: '#fff'
	},
	check: {
		border: '1px solid #222',
		borderRadius: '50%',
		width: '10px',
		height: '10px',
		marginRight: '5px'
		
	}
})

const Todo = (props: any) => {
	const styles = useStyles()

	const toggleCompleted = () => {
		props.toggleCompleted(props.userId, props.id)
	}

	return (
		<div className={styles.todoWrapper}>
			<div onClick={toggleCompleted} 
			className={`${styles.check} ${props.completed ? styles.completed : styles.notCompleted}`}></div>
				<NavLink 
				className={navData => navData.isActive ? `${styles.link} ${styles.active}`: styles.link} 
				to={`/details/user=${props.userId}/todo=${props.id}`} >
					{props.title}
				</NavLink>
		</div>
	);
}

export default Todo;