import { makeStyles } from "@material-ui/styles";
import React from "react";
import { NavLink } from 'react-router-dom'
import CheckCompletedContainer from "../../common/checkCompleted/CheckCompletedContainer";


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
		width: '15px',
		height: '15px',
		marginRight: '5px',
		cursor: 'pointer'
	}
})

const Todo = (props: any) => {
	const styles = useStyles()



	return (
		<div className={styles.todoWrapper}>
			<CheckCompletedContainer 
				userId={props.userId} 
				todoId={props.id} 
				completed={props.completed} />
				<NavLink 
				className={navData => navData.isActive ? `${styles.link} ${styles.active}`: styles.link} 
				to={`/details/user=${props.userId}/todo=${props.id}`} >
					{props.title}
				</NavLink>
		</div>
	);
}

export default Todo;