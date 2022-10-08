import React from 'react'
import CV from '../../assets/cv.pdf'
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import MessageIcon from '@mui/icons-material/Message';

const CTA = () => {
  return (
    <div className='cta'>
        <Button 
          style={{ width: 200, height: 80 }}
          href={CV} 
          download 
          className='btn' 
          variant="contained" 
          color="secondary" 
          endIcon={<DownloadIcon />}>
            Download CV
        </Button>

        <Button 
          style={{ width: 200, height: 80 }}
          href="#contact" 
          className='btn btn-primary' 
          variant="contained" 
          endIcon={<MessageIcon />}>
            CONTACT ME
        </Button>
    </div>
  )
}

export default CTA