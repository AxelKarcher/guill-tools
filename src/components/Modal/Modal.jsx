import {useState, useEffect} from 'react'
import axios from 'axios'

import './Modal.scss'
import TextField from '../TextField/TextField'
import Button from '../Button/Button'
import Spinner from '../Spinner/Spinner'

const Modal = ({isOn, handleClose}) => {

  const [mail, setMail] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [isConfirmText, setIsConfirmText] = useState(false)

  useEffect(() => {
    setMail('')
    setMsg('')
    setLoading(false)
    setIsConfirmText(false)
  }, [isOn])

  useEffect(() => {
    if (isConfirmText) {setTimeout(() => {handleClose()}, 2000)}
  }, [isConfirmText])

  const sendMail = async () => {
    setLoading(true)
    await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: 'service_dx9fz8c',
      template_id: 'template_k7j21et',
      user_id: '1h-oZxKbv5CUYun6y',
      template_params: {mail: mail, message: msg}
    })
      .then((res) => console.log('res:', res))
    setIsConfirmText(true)
  }

  return (
    isOn &&
    <div id='modalContainer' onClick={handleClose}>
      <div id='modalBody' onClick={(e) => e.stopPropagation()}>
        {
          isConfirmText
          ?
          <div style={{fontWeight: 'bold', fontSize: 40, marginBottom: 20,
            textAlign: 'center'
          }}>
            Tu m'as envoyé un mail ! Merci de pas spam..
          </div>
          :
          <>
            <div style={{fontWeight: 'bold', fontSize: 40, marginBottom: 20}}>
              Attends, t'as un besoin ?
            </div>
            <TextField
              style={{width: 500, marginBottom: 20}}
              value={mail}
              action={(e) => setMail(e)}
              label='Mail'
              disabled={loading}
            />
            <TextField
              multiline
              rows={5}
              style={{width: 500, marginBottom: 20}}
              value={msg}
              action={(e) => setMsg(e)}
              label='Message (multi-lignes)'
              disabled={loading}
            />
            {
              loading
              ?
              <Spinner />
              :
              <Button
                label='Valider'
                action={sendMail}
                disabled={mail === '' || msg === ''}
              />
            }
          </>
        }
      </div>
    </div>
  )
}

export default Modal