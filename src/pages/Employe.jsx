import React from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeTable from '../components/EmployeTable';

const Employe = () => {

  const navigate = useNavigate();

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-emerald-700 align-middle">Employes Details...</h1>
        <button onClick={() => navigate('/addEmploye')} type="button" className="text-white font-bold bg-emerald-500 hover:bg-emerald-500-700  focus:outline-none  rounded-lg text-sm px-4 py-2 text-center"><i class="ri-add-fill"></i> Add Employe</button>
      </div>

      <div className="mt-16">
        <EmployeTable />
      </div>

    </div>
  )
}

export default Employe