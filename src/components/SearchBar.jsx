import React from 'react'

const SearchBar = () => {
  return (
    <div className="mb-5">
            <label className="block font-bold uppercase text-gray-700">
    
            <input 
            type="text" 
            placeholder='Buscar Paciente'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            // onChange={handleChange}
            // onBlur={handleBlur}
            />
            </label>
        {/* {errors.name && <p className="text-red-500 ml-1">{errors.name}</p>} */}
        </div>
  )
}

export default SearchBar