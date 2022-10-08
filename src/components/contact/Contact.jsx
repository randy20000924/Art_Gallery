import React from 'react'
import './contact.css'
import {BiMailSend} from 'react-icons/bi'
import {SiMessenger} from 'react-icons/si'
import {FaTwitterSquare} from 'react-icons/fa'
import TextField from '@mui/material/TextField';
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import SendIcon from '@mui/icons-material/Send';

const CssTextField = styled(TextField)({
  '& .MuiInputLabel-root': {
    color: 'white'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'blue',
    },
    '&:hover fieldset': {
      borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'purple',
    },
  },
});

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eqkr2wn', 'template_r2wv75f', form.current, 'DUGwFFcnhGEPu43p3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <BiMailSend className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>randy890924@gmail.com</h5>
            <a href='mailto:randy890924@gmail.com' target="_blank" rel="noreferrer noopenner">Send Mail To Me</a>
          </article>

          <article className='contact_option'>
            <SiMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>ChangYaoLunRandy</h5>
            <a href='https://m.me/ChangYaoLunRandy' target="_blank" rel="noreferrer noopenner">Send A Message</a>
          </article>

          <article className='contact_option'>
            <FaTwitterSquare className='contact_option-icon'/>
            <h4>Twitter</h4>
            <h5>RandyChang0924</h5>
            <a href='https://twitter.com/messages/compose?recipient_id=RandyChang0924'>Send A Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <CssTextField 
            label="Your Full Name" 
            id="name" 
            sx={{ input: { color: 'white' } }}
            fullWidth
          />
          <CssTextField 
            label="Your Email" 
            id="email" 
            sx={{ input: { color: 'white' } }}
            fullWidth
          />
          <CssTextField 
            className = "textfield"
            label="Your Message" 
            id="message" 
            multiline
            inputProps={{ style: { color: "white" } }}
            rows={7}
            maxRows={10}
            fullWidth
          />
          <Button 
            type='submit' 
            onClick={() => {
                alert("Email Has Send!");
            }} 
            variant="contained" 
            color="secondary" 
            endIcon={<SendIcon />}>
              Send Email
            </Button>
        </form>
      </div>
    </section>
  )
}

export default Contact