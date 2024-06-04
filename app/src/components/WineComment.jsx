import React, { useState } from 'react'
import logic from '../logic'


function WineComment({ comments, wineId, userId, userDetails }) {
  const [isEditing, setIsEditing] = useState(null)
  const [currentText, setCurrentText] = useState('')
  const [updatedReview, setUpdatedReview] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleEditReview = (index, currentComment) => {
    setIsEditing(index)
    setCurrentText(currentComment)
  }

  const handleTextChange = (e) => {
    setCurrentText(e.target.value)
  }

  const handleSaveReview = async (index, reviewId) => {
    try {
      const encodedComment = encodeURIComponent(currentText.trim())
      console.log('Saving review:', { reviewId, encodedComment, wineId, userId })
      console.log('user details', userDetails)
      console.log('comments object', comments)
      const response = await logic.editReview(reviewId, encodedComment, wineId, userId)

      // Update the comments array with the trimmed version of the comment
      const updatedComments = [...comments]
      updatedComments[index].comment = currentText.trim()
      setIsEditing(null)

      // Update the state with the fetched updated review data
      setUpdatedReview(response)
    } catch (error) {
      alert(error)
    }
  }

  const handleCancelEdit = () => {
    setIsEditing(null)
    setCurrentText('')
    setErrorMessage('')
  }

  const isCommentOwner = (comment, userDetails) => comment.user.name === userDetails.name

  return (
    <div>
      {comments.map((comment, index) => (
        <div
          key={index}
          className="w-full p-4 border border-fuchsia-700 rounded-lg focus:outline-none focus:ring-2 focus:shadow-fuchsia-700 mb-4 relative"
        >
          <div className="mb-2">
            <p className="text-gray-700">
              <strong>{comment.user && comment.user.name ? comment.user.name : 'Unknown User'}:</strong>
              {isEditing === index ? (
                <input
                  type="text"
                  value={currentText}
                  onChange={handleTextChange}
                  className="ml-2 p-1 border border-gray-300 rounded"
                />
              ) : (
                ' ' + comment.comment.trim() 
              )}
            </p>
            <div className="text-gray-500">{comment.date}</div>
          </div>
          <div className="flex justify-end mt-2 space-x-2">
            {isEditing === index ? (
              <>
                <button
                  className="bg-white hover:bg-fuchsia-200 py-1 px-4 text-fuchsia-800 text-sm font-semibold rounded border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased"
                  onClick={() => handleSaveReview(index, comment.id)}
                >
                  Save
                </button>
                <button
                  className="bg-white hover:bg-fuchsia-200 py-1 px-4 text-fuchsia-800 text-sm font-semibold rounded border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              </>
            ) : (
              isCommentOwner(comment, userDetails) && (
                <button
                  className="bg-white hover:bg-fuchsia-200 py-1 px-4 text-fuchsia-800 text-sm font-semibold rounded border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased"
                  onClick={() => handleEditReview(index, comment.comment)}
                >
                  Edit
                </button>
              )
            )}
          </div>
        </div>
      ))}
      {errorMessage && (
        <div className="w-full p-4 border border-red-500 rounded-lg text-red-500 mb-4">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  )
}

export default WineComment