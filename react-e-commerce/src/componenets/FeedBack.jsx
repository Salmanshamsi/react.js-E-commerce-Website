import React from 'react'
import ReviewCard from './ReviewCard'

const FeedBack = () => {

  return (
    <div className='w-full p-3' >
    <div className='w-full h-full flex justify-between px-4 gap-5 ' >
      <h1 className='text-4xl font-bold ' >Customer Review's</h1>
    </div>
    <div className='w-full h-full' >
        
    <section className="py-8 lg:py-16 antialiased">
    <div className="max-w-2xl mx-auto px-4">

        <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion (20)
        </h2>
        </div>
        <form className="mb-6">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border ">
            <label htmlFor="comment" className="sr-only">
            Your comment
            </label>
            <textarea
            id="comment"
            rows={6}
            className="px-0 w-full text-sm  border-0 focus:ring-0 focus:outline-none "
            placeholder="Write a comment..."
            required=""
            defaultValue={""}
            />
        </div>
        <button
            type="submit"
            className="inline-flex bg-indigo-500 text-white items-center py-2.5 px-4 text-xs font-medium text-center  bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
            Post comment
        </button>
        </form>
    </div>
    </section>

      <div className='px-12 flex flex-wrap gap-6 justify-center' >

          <ReviewCard/>

      </div>

    </div>
  </div>
  )
}

export default FeedBack