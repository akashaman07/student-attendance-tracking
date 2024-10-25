"use client"
import React, { useEffect, useState } from 'react'
import AddNewStudent from './_components/AddNewStudent'
import GlobalApi from '@/app/_services/GlobalApi'
import StudentListTable from './_components/StudentListTable';

function Student() {

  const[studentList,setStudentList]=useState([]);
  useEffect(()=>{
    GetAllStudents();
  })

  // use to Get all students
  const GetAllStudents=()=>{
    GlobalApi.GetAllStudents().then(resp=>{
      setStudentList(resp.data);
      
    })
  }
  return (
    <div className='p-7'>
        <h2 className='font-bold text-2xl flex justify-between items-center'>Student
        <AddNewStudent />
        </h2>

        <StudentListTable  studentList={studentList}/>
    </div>
  )
}

export default Student