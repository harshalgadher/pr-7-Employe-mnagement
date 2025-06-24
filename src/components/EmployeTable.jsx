import React from 'react'

const EmployeTable = ({ employes }) => {
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
    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-center rtl:text-right text-gray-500">
                    <thead className="text-xs text-emerald-600 uppercase bg-gray-50">
                        <tr className="">
                            <th scope="col" className="px-6 py-3">
                                Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Employee Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Employe Salary
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Department
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employes.map((emp, idx) => (
                                <tr key={emp.id} className="bg-white border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {idx + 1}
                                    </th>
                                    <td className="px-6 py-4 text-gray-900">
                                        {emp.name}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900">
                                        ₹{Number(emp.salary).toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900">
                                        {getDepartment(Number(emp.department))}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="mx-2 text-indigo-600 font-bold hover:underline"><i className="ri-edit-fill"></i> Edit</button>
                                        <button className="mx-2 text-rose-500 font-bold hover:underline"><i className="ri-delete-bin-line"></i> Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default EmployeTable