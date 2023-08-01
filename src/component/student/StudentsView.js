import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import "bootstrap"
import {FaTrashAlt,FaEdit, FaEye} from "react-icons/fa"
import { Link } from 'react-router-dom';

const StudentsView = () => {

    const[students,setStudents]=useState([]);

    useEffect(()=>{
        loadStudents();
    },[])

    const loadStudents = async()=>{
        const result=await axios.get("http://localhost:8080/student",{
            validateStatus:()=>{
                return true;
            }
        });
        if(result.status == 302){
            setStudents(result.data);
        }
        
    }

    	const handleDelete = async (id) => {
		await axios.delete(
			`http://localhost:8080/student/${id}`
		);
		loadStudents();
	};

    


  return (
    <section>
        <table className='table table-bordered table-hover shadow'>
            <thead>
                <tr className='text-center'>
                    <th>Serial</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>Department</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Present Address</th>
                    <th>Permanent Address</th>
                    <th colSpan="3">Actions</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                {students.map((student,index)=>(
                    <tr key={student.id}>
                        <th scope='row' key={index}>
                            {index+1}
                        </th>
                         <td>{student.id}</td>
                         <td>{student.name}</td>
                         <td>{student.batch}</td>
                         <td>{student.department}</td>
                         <td>{student.phone}</td>
                         <td>{student.email}</td>
                         <td>{student.presentAddress}</td>
                         <td>{student.permanentAddress}</td>

                         <td className='mx-2'>
                            <Link to={`/student-profile/${student.id}`} className='btn btn-info'><FaEye/></Link>    
                        </td>

                        <td className='mx-2'>
                            <Link to={`/edit-student/${student.id}`} className='btn btn-warning'><FaEdit/></Link>    
                        </td>

                         <td className='mx-2'>
                            <button className='btn btn-danger' onClick={()=>handleDelete(student.id)}><FaTrashAlt/></button>
                        </td>
                         
                    </tr> 
                ))}
                
            </tbody>
        </table>
    </section>
  )
}

export default StudentsView
