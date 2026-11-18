import { useState, useEffect } from 'react'
import axios from 'axios'

const API = 'http://localhost:5000/api/tasks'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])


  // FETCH TASKS FROM DATABASE
  const fetchTasks = async () => {
    try {
      const response = await axios.get(API)

      setTask(response.data)
    }
    catch (error) {
      console.log('Error fetching tasks:', error)
    }
  }


  // RUN WHEN APP LOADS
  useEffect(() => {
    fetchTasks()
  }, [])


  // ADD TASK
  const submitHandler = async (e) => {
    e.preventDefault()

    if (!title.trim() || !details.trim()) {
      alert('Please fill in both fields')
      return
    }

    try {
      const response = await axios.post(API, {
        title,
        details
      })

      // Update React state with saved task
      setTask([...task, response.data])

      // Clear input fields
      setTitle('')
      setDetails('')
    }
    catch (error) {
      console.log('Error adding task:', error)
      alert('Failed to add note')
    }
  }


  // DELETE TASK
  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API}/${id}`)

      // Remove task from UI
      setTask(task.filter((elem) => elem._id !== id))
    }
    catch (error) {
      console.log('Error deleting task:', error)
      alert('Failed to delete note')
    }
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>

      {/* LEFT SIDE - FORM */}

      <form
        onSubmit={submitHandler}
        className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'
      >

        <h1 className='text-4xl mb-2 font-bold'>
          Add Notes
        </h1>


        {/* TITLE INPUT */}

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />


        {/* DETAILS INPUT */}

        <textarea
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
          placeholder='Write Details here'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />


        {/* SUBMIT BUTTON */}

        <button
          type="submit"
          className='bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded'
        >
          Add Note
        </button>

      </form>


      {/* RIGHT SIDE - NOTES */}

      <div className='lg:w-1/2 lg:border-l-2 p-10'>

        <h1 className='text-4xl font-bold text-cyan-400'>
          Recent Notes
        </h1>


        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>

          {task.map((elem) => {

            return (

              <div
                key={elem._id}
                className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >

                <div>

                  <h3 className='leading-tight text-lg font-bold'>
                    {elem.title}
                  </h3>

                  <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>
                    {elem.details}
                  </p>

                </div>


                {/* DELETE BUTTON */}

                <button
                  onClick={() => deleteNote(elem._id)}
                  className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'
                >
                  Delete
                </button>

              </div>

            )

          })}

        </div>

      </div>

    </div>
  )
}

export default App