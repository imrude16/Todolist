"use client"
import React, { useState } from "react"

const page = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHnadler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { task, desc }])
    settask("")
    setdesc("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setmainTask(copyTask)
  }

  let renderTask = <h2> No Task Available </h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-2xl font-semibold"> {t.task} </h5>
            <h6 className="text-xl font-semibold"> {t.desc} </h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i)
            }}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold"> Delete </button>
        </li>
      )
    })
  }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-4xl font-bold text-center'>
        My Todolist </h1>
      <form onSubmit={submitHnadler}>
        <input type="text" className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
          placeholder='Enter Task Here '
          value={task}
          onChange={(e) => {
            settask(e.target.value)
          }}
        />
        <input type="text" className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
          placeholder='Enter Description Here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />
        <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'> Add Task </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
