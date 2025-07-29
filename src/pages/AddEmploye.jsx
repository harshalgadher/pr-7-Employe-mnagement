import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddEmploye = () => {

  const [input, setInput] = useState({
    name: '',
    department: '',
    salary: '',
    description: '',
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempError = {};;


    if (input.name.trim() == ""){
      
    } toast.error("Please Enter Name...")

    if (input.department == "") toast.error("Selact Department...")

    if (input.salary.trim() == "") toast.error("Enter Salary...")

    else if (input.salary.length > 100000) toast.error("It's too much salaryy...!")


    const employeDetail = { id: Date.now(), ...input }
    console.log(employeDetail);

    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employeDetail);

    localStorage.setItem("employees", JSON.stringify(employees));
    setInput({
      name: '',
      department: '',
      salary: '',
      description: '',
    })
    navigate('/employe')
  }

  return (
    <>
      <section className="bg-white">
        <div className="mt-10 rounded-lg pb-8 pt-10 px-6 mx-auto max-w-2xl  lg:pb-16 lg:pt-10 border-2 shadow-lg shadow-emerald-200 border-emerald-400">
          <h2 className="mb-6 text-3xl font-bold text-emerald-600">Add New Employee</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="w-full">
                <label htmlFor="name" className="block mb-2 text-md font-bold text-gray-900 ">Employe Name :-</label>
                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 out text-md rounded-lg focus:ring-2 focus:ring-emerald-300 focus:border-emerald-300 block w-full p-2.5 " placeholder="Type product name" value={input.name} onChange={handleChange} />
              </div>
              <div className="w-full">
                <label htmlFor="salary" className="block mb-2 text-md font-bold text-gray-900 ">Salary :-</label>
                <input type="number" value={input.salary} onChange={handleChange} name="salary" id="salary" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-2 focus:ring-emerald-300 focus:border-emerald-300 block w-full p-2.5 " placeholder="$ Enter Salary" />
              </div>
              <div className="sm:col-span-2 text-center">
                <label htmlFor="Department" className="block mb-2 text-md font-bold text-gray-900 ">Select Department :-</label>
                <select id="department" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-emerald-300 focus:border-emerald-300 block w-full p-3" value={input.department} onChange={handleChange}>
                  <option value="">---Selact Department---</option>
                  <option value="1">FrontEnd dev..</option>
                  <option value="2">BackEnd dev..</option>
                  <option value="3">Designing..</option>
                  <option value="4">Tester..</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="description" className="block mb-2 text-md font-bold text-gray-900 ">Description :-</label>
                <textarea id="description" rows="8" className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-300 focus:border-emerald-300 " value={input.description} onChange={handleChange} placeholder="More detail about Employee"></textarea>
              </div>
            </div>
            <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-md font-bold text-center text-white  bg-emerald-700 rounded-lg active:ring-4 active:ring-emerald-200">
              Add Employee
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default AddEmploye