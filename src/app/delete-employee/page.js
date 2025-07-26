'use client'

import { useDispatch, useSelector } from "react-redux"
import styles from '../../app/showEmp.module.css';
import { removeEmployee } from "../reduxToolkit/slice";

const DeleteEmployee = () => {
    const data = useSelector((value)=> value.employees)
    const dispatch = useDispatch();
  return (
    <>
        <h3>Delete Employee</h3>
        {
            data.map((item)=>
            <>
                <span key={item.id}>{item.name}</span>
                <button className={styles.button} onClick={()=>dispatch(removeEmployee(item.id))}>Delete</button><br/><br/>
            </>
            )
        }
    </>
  )
}

export default DeleteEmployee