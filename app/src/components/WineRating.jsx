import React, { useState, useEffect } from 'react'
import WineComment from './WineComment'
import logic from '../logic'

function WineRating({ wineId, expandedWine, userId }) {
  const [showPopUp, setShowPopUp] = useState(false)
  const [userRating, setUserRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [wineData, setWineData] = useState({ ...expandedWine, comments: [] })
  const [showCommentWindow, setShowCommentWindow] = useState(false)
  const [wineComment, setWineComment] = useState('')
  const [userDetails, setUserDetails] = useState(null)
  const [closeAfterSubmit, setCloseAfterSubmit] = useState(false)

  useEffect(() => {
    if (userId) {
      logic.retrieveUserWithId(userId)
        .then(data => {
          setUserDetails(data)
        })
        .catch(error => {
          console.error('Error fetching user details:', error)
        });
    } else {
      console.warn('No userId provided')
    }
  }, [userId])

  const handleClick = () => {
    setShowPopUp(true)
  }

  const handleCommentClick = () => {
    setShowCommentWindow(true)
    fetchComments()
  }

  const handleClose = () => {
    setShowPopUp(false)
    setShowCommentWindow(false)
    setCloseAfterSubmit(false)
    document.body.style.overflow = 'auto'
  }

  const handleRate = (rating) => {
    setUserRating(rating)
    console.log('User rated the wine:', rating)
  }

  const handleSubmitRating = () => {
    setIsSubmitting(true)
    logic.addNewRating(userRating, wineId)
      .then(data => {
        setMessage('Rating submitted successfully!')
        setWineData(prevData => ({ ...prevData, averageRating: data.newAverageRating }))
      })
      .catch(error => {
        alert(error)
        setMessage('Failed to submit rating. Please try again.')
      })
      .finally(() => {
        setTimeout(() => {
          handleClose()
          setIsSubmitting(false)
        }, 3000)
      })
  }

  const fetchComments = () => {
    logic.retrieveReviews(wineId)
      .then(data => {
        setWineData(prevData => ({ ...prevData, comments: data || [] }))
      })
      .catch(error => {
        console.error('Error fetching comments:', error)
      })
  }

  useEffect(() => {
    console.log('wineData:', wineData)
  }, [wineData])


  const handleSubmittedComment = () => {
    setIsSubmitting(true)
    const trimmedComment = wineComment.trim()
    logic.addNewReview(trimmedComment, wineId, userId)
      .then(data => {
        setMessage('Comment submitted successfully!')
        setCloseAfterSubmit(true)

        setWineData(prevData => ({
          ...prevData, comments: [...prevData.comments,{ comment: trimmedComment, user: { name: userDetails.name } }
          ]
        }));
        setWineComment('')
      })
      .catch(error => {
        alert(error);
        setMessage('Failed to submit comment. Please try again.')
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div>
      <br />
      <p className='font-bold'>Help WineSeeker to improve!</p>

      <div>
        <span className="text-yellow-700 text-ml font-bold italic cursor-pointer block " onClick={handleClick}>
          Rate the wine! ⭐️
        </span>
        <span className="text-yellow-700 text-ml font-bold italic cursor-pointer block mb-4 " onClick={handleCommentClick}>
          Read or leave reviews! 🖋️
        </span>
      </div>
      <div className="mt-4">
        {message && <p className="mt-4 mb-4 text-center font-bold ">{message}</p>}
      </div>
      {showPopUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded shadow-lg text-center" style={{ zIndex: 9999 }}>
            <p className="mb-8 font-semibold">Thank you for rating this 🍷:</p>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-white cursor-pointer border border-black rounded-full text-2xl mx-1 p-1 ${index < userRating ? 'bg-fuchsia-500' : 'bg-gray-200'}`}
                  onClick={() => handleRate(index + 1)}
                >
                  ★
                </span>
              ))}
            </div>

            <button
              className="bg-white hover:bg-fuchsia-200 py-2 px-16 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased"
              onClick={handleSubmitRating}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Rate'}
            </button>
          </div>
        </div>
      )}

      {showCommentWindow && (
        <div className="flex justify-center items-center min-h-screen mb-4">
          <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-lg">
            <div className="flex justify-center">
              <h2 className="text-xl font-bold mb-4">{expandedWine.wine.title}</h2>
            </div>
            <div className="flex justify-center">
              <h2 className="italic font-thin mb-4">{expandedWine.wine.description}</h2>
            </div>
            <div className="flex justify-center">
              <img src={expandedWine.wine.image} alt="wine image" />
            </div>
            <div className="mb-4">
              <WineComment comments={wineData.comments || []} userDetails={userDetails} wineId={wineId} userId={userId} userName={wineData.comments.name} />
            </div>
            <div>
              <textarea
                className="w-full p-2 border border-shadow-fuchsia-700 rounded-lg focus:outline-none focus:ring-2 focus:shadow-fuchsia-700"
                placeholder="Add a review..."
                rows="3"
                value={wineComment}
                onChange={(e) => setWineComment(e.target.value)}
              ></textarea>
              <div className="flex justify-center">
                <button
                  className="bg-white hover:bg-fuchsia-200 py-2 px-16 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased"
                  onClick={closeAfterSubmit ? handleClose : handleSubmittedComment}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : closeAfterSubmit ? 'Close' : 'Review!'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WineRating