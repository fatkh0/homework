import { makeStyles } from "@material-ui/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import CheckCompletedContainer from "../../common/checkCompleted/CheckCompletedContainer";


const useStyles = makeStyles({
  detailWrapper: {
    fontSize: '20px',
  },
  todoData: {
    marginBottom: '20px',
    border: '1px solid #222',
    padding: '10px',
    borderRadius: '5px',
  },
  usersButton: {
    color: '#222',
    textDecoration: 'none',
    fontSize: '20px',
    padding: '10px',
    border: '1px solid #222',
    width: '100px',
    borderRadius: '5px',
    textAlign: 'center',
    marginBottom: '5px',
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: '#222',
      color: '#fff',
    }
  },
  user: {},
  title: {
    wordWrap: 'break-word'
  },
  completedWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  completed: {},
  notCompleted: {},
  todoDataItem: {
    marginBottom: '10px',
    border: '1px solid #ccc',
    padding: '5px',
    borderRadius: '3px'
  }
})

const DetailPage = (props: any) => {

  const styles = useStyles()

  const todo = props.foundTodo[0]

  const userId: number = todo.userId
  const title: string = todo.title
  const completed: boolean = todo.completed
  const todoId: number = todo.id



 return (
    <div className={styles.detailWrapper}>
      <div className={styles.todoData}>
        <div className={styles.todoDataItem}> User: {userId}</div>
        <div className={styles.todoDataItem}>Todo: {title}</div>
        <div className={`${styles.todoDataItem} ${styles.completedWrapper}`}>
          <CheckCompletedContainer 
            userId={userId} 
            todoId={todoId} 
            completed={completed}  />
          {completed 
          ? <div className={styles.completed}>Completed</div>
          : <div className={styles.notCompleted}>Not completed</div>
          }
        </div>
      </div>
      <NavLink to={'/'} className={styles.usersButton}>Back to Users</NavLink>
    </div> 
  ) 
}

export default DetailPage


