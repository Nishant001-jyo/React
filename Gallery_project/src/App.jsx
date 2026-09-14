// import React from 'react'
// import axios from 'axios'
// import { useState } from 'react';


// const App = () => {
//   const [userData, setUserData] = useState([]);
//   const getData=async()=>{
//     const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=25`)
//     setUserData(response.data);
//     console.log(response.data);
    
    
//   }
//   let printUserData = 'No user available';
//   if (userData.length >0 ){
//     printUserData=userData.map(function(elem){
//       return <div>
//         <a href={elem.url} target='_blank'>
//           <div className='h-40 w-44 bg-white rounded-2xl'>

//         <img className='h-full object-cover' src={elem.download_url} alt="" />
//       </div>
//       <h2 className='font-bold text-lg'>
//         {
//           elem.author
//         }
//       </h2>
//         </a>
//       </div>
//     })
//   }
//   return (
//     <div className='bg-black overflow-hidden h-screen p-4 text-white'>
//       <button onClick={getData} className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white'>get-Data</button>
//       <div className='flex flex-wrap gap-4'>
//         {printUserData}
//       </div>
//     </div>
//   )
// }

// export default App





import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  // State
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Fetch data whenever index changes
  useEffect(() => {

    const getData = async () => {

      try {
        setLoading(true)
        setError('')

        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${index}&limit=500`
        )

        setUserData(response.data)

      } catch (err) {

        console.log(err)
        setError('Something went wrong while fetching data.')

      } finally {

        setLoading(false)

      }
    }

    getData()

  }, [index])


  // Next button
  const nextHandler = () => {
    setIndex(prev => prev + 1)
  }


  // Previous button
  const prevHandler = () => {
    setIndex(prev => Math.max(prev - 1, 1))
  }


  return (
    <div className="bg-black min-h-screen p-5 text-white">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div>
          <h1 className="text-3xl font-bold">
            Picsum Gallery
          </h1>

          <p className="text-gray-400">
            Page {index}
          </p>
        </div>


        {/* Pagination */}
        <div className="flex gap-3">

          <button
            onClick={prevHandler}
            disabled={index === 1 || loading}
            className="bg-amber-500 hover:bg-amber-600
                       disabled:bg-gray-700
                       disabled:cursor-not-allowed
                       active:scale-95
                       px-5 py-2 rounded-lg
                       font-semibold text-black"
          >
            ← Prev
          </button>


          <button
            onClick={nextHandler}
            disabled={loading}
            className="bg-amber-500 hover:bg-amber-600
                       disabled:bg-gray-700
                       disabled:cursor-not-allowed
                       active:scale-95
                       px-5 py-2 rounded-lg
                       font-semibold text-black"
          >
            Next →
          </button>

        </div>

      </div>


      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center py-10">
          <h2 className="text-xl text-amber-400">
            Loading...
          </h2>
        </div>
      )}


      {/* Error */}
      {error && (
        <div className="bg-red-500/20 border border-red-500
                        text-red-400 p-4 rounded-lg mb-5">
          {error}
        </div>
      )}


      {/* Images */}
      {!loading && !error && (

        <div className="flex flex-wrap gap-6">

          {userData.length > 0 ? (

            userData.map((elem) => (

              <div
                key={elem.id}
                className="w-44"
              >

                <a
                  href={elem.url}
                  target="_blank"
                  rel="noreferrer"
                >

                  {/* Image */}
                  <div className="h-40 w-44 bg-white
                                  rounded-2xl overflow-hidden
                                  hover:scale-105
                                  transition duration-300">

                    <img
                      className="h-full w-full object-cover"
                      src={elem.download_url}
                      alt={`Photo by ${elem.author}`}
                      loading="lazy"
                    />

                  </div>


                  {/* Author */}
                  <h2 className="font-bold text-lg mt-2">
                    {elem.author}
                  </h2>

                </a>

              </div>

            ))

          ) : (

            <p className="text-gray-400">
              No images available.
            </p>

          )}

        </div>

      )}


      {/* Bottom Pagination */}
      {!loading && userData.length > 0 && (

        <div className="flex justify-center items-center
                        gap-5 mt-8">

          <button
            onClick={prevHandler}
            disabled={index === 1}
            className="bg-amber-500
                       disabled:bg-gray-700
                       px-5 py-2 rounded-lg
                       font-semibold text-black
                       active:scale-95"
          >
            ← Previous
          </button>

          <span className="text-lg font-bold">
            Page {index}
          </span>

          <button
            onClick={nextHandler}
            className="bg-amber-500
                       px-5 py-2 rounded-lg
                       font-semibold text-black
                       active:scale-95"
          >
            Next →
          </button>

        </div>

      )}

    </div>
  )
}

export default App