import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const EmployeTable = ({ employes, deleteEmployee }) => {
    const navigate = useNavigate()

    const getDepartment = (id) => {
        switch (id) {
            case 1:
                return "FrontEnd dev"
            case 2:
                return "BackEnd dev"
            case 3:
                return "Designing"
            case 4:
                return "Tester"

        }
    }
    const handleDelete = (id) => {
        deleteEmployee(id);
    }

  

    return (
        <div>
            <div className="relative overflow-hidden">
                {employes.length > 0 ? <table className="w-full text-sm text-left shadow-lg rounded-lg overflow-hidden text-gray-200">
                    <thead className="text-xs text-white uppercase bg-emerald-600 font-extrabold">
                        <tr className="">
                            <th scope="col" className="px-6 py-3">
                                Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Employee Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Department
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Employe Salary
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employes.map((emp, idx) => (
                                <tr key={emp.id} className=" bg-emerald-50 transition-colors duration-200 ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {idx + 1}
                                    </th>
                                    <td className="px-6 py-4 text-gray-90  text-emerald-700 font-semibold">
                                        {emp.name}
                                    </td>
                                    <td className="px-6 py-4  text-blue-600 font-semibold">
                                        {getDepartment(Number(emp.department))}
                                    </td>
                                    <td className="px-6 py-4 font-bold text-green-600">
                                        ₹{Number(emp.salary).toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link to={`/editEmployee/${emp.id}`} className="mx-2 text-indigo-600 font-bold hover:underline" onClick={() => { }}><i className="ri-edit-fill"></i> Edit</Link>
                                        <button className="mx-2 text-rose-500 font-bold hover:underline" onClick={() => handleDelete(emp.id)} ><i className="ri-delete-bin-line"></i> Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table> :
                    <h1 role="button" onClick={() => navigate('/addEmploye')} className="text-white font-bold bg-emerald-400 shadow-emerald-400 text-4xl text-center border-2 border-emerald-400 py-4 rounded-lg">No Employee Added ...Add employee First</h1>
                }
            </div>

        </div>
    )
}

export default EmployeTable