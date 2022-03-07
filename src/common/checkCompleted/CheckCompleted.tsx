import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	check: {
		border: '1px solid #222',
		borderRadius: '50%',
		width: '15px',
		height: '15px',
		marginRight: '5px',
		cursor: 'pointer'
	},
  completed: {
		background: 'green'
	},
	notCompleted: {
		background: '#fff'
	},
})

const CheckCompleted = (props: any) => {

  const styles = useStyles()

  const toggleCompleted = () => {
		props.toggleCompleted(props.userId, props.todoId)
	}

  return <div onClick={toggleCompleted} 
			className={`${styles.check} ${props.completed ? styles.completed : styles.notCompleted}`}></div>
}

export default CheckCompleted