import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeTable from '../components/EmployeTable';
import { toast } from 'react-toastify';

const Employe = () => {

  const [employes, setEmployes] = useState([])
  const [filteredEmployees, setFilteredEmployees] = useState("")
  const [filteredDepartment, setFilteredDepartment] = useState("")

  const navigate = useNavigate();
  console.log(filteredEmployees);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || []
    setEmployes(data);
  }, [])

  const deleteEmployee = (id) => {
    const updatedEmployes = employes.filter((emp) => {
      return emp.id != id
    })
    setEmployes(updatedEmployes)
    localStorage.setItem("employees", JSON.stringify(updatedEmployes));
    toast.success("Employee Deleted successfully...");
  }

  const EmployeeByName = employes.filter((emp) => {
    return emp.name.toLowerCase().includes(filteredEmployees.toLowerCase())
  }).filter((emp) => {
    return filteredDepartment == "" ? true : emp.department == filteredDepartment
  })


  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <div className="flex items-center justify-around">
        <h1 className="text-4xl font-semibold text-emerald-500 align-middle underline">Employes Details...</h1>
        <div className="flex gap-10">
          <select
            id="department"
            className="border-2 border-gray-300 text-gray-400 font-semibold text-sm rounded-lg  focus:ring-emerald-500 focus:border-emerald-500  p-3"
            onChange={(e) => { setFilteredDepartment(e.target.value)  }}>
            <option value="">---Selact Department---</option>
            <option value="1">FrontEnd dev..</option>
            <option value="2">BackEnd dev..</option>
            <option value="3">Designing..</option>
            <option value="4">Tester..</option>
          </select>
          <input type="email" name="email" id="email" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 " placeholder="Search-employees" required="" onChange={(e) => { setFilteredEmployees(e.target.value) }} />
          <button onClick={() => navigate('/addEmploye')} type="button" className="text-white font-bold px-10 bg-emerald-500 hover:bg-emerald-500-700  focus:outline-none  rounded-lg text-sm  py-2 text-center"><i className="ri-add-fill"></i>Add Employe</button>
        </div>
      </div>

      <div className="mt-16">
        <EmployeTable employes={EmployeeByName} deleteEmployee={deleteEmployee} />
      </div>

    </div>
  )
}

export default Employe