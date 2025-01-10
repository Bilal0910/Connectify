import React from 'react'
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import "./FeedSection.css"

const FeedSection = () => {
  return (
    <div className='feedsection'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateSharpIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default FeedSection
