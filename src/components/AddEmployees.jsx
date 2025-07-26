'use client';
import { useState } from 'react';
import styles from '../app/addEmp.module.css'
import { useDispatch } from 'react-redux';
import { addEmployee } from '@/app/reduxToolkit/slice';

const AddEmployees = () => {
  const [empName, setEmpName] = useState('');
  const dispatch = useDispatch();
  const dataDispatch = () =>{
    console.log(empName)
        dispatch(addEmployee(empName))
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Employees</h2>
      <input className={styles.input} type="text" placeholder="Enter Employee Data" onChange={(e)=> setEmpName(e.target.value)} />
      <button onClick={dataDispatch} className={styles.button}>Add</button>
    </div>
  );
}

export default AddEmployees;