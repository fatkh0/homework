import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  user: {
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
  active: {
        border: '1px solid #fff',
        color: '#fff',
        background: '#222'
      },
})


const User = (props: any) => {
  const styles = useStyles()


  const checkIsActive = () => {
    return props.activeUsers.some((user: number) => user === props.userId)
  }

  const onUserClick = (e: any) => {
    props.toggleTodos(props.userId)
  }


  return (
    <div className={checkIsActive() ? `${styles.user} ${styles.active}` : `${styles.user}`} onClick={onUserClick}>User {props.userId}</div>
  ) 
}

export default User