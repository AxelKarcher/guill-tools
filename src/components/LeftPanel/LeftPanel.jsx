import {useState} from 'react'
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded'

import './LeftPanel.scss'
import aternosLogo from '../../assets/aternos.png'
import Toggle from '../Toggle/Toggle'
import Modal from '../Modal/Modal'

const LeftPanel = ({easterClick, slabsSetter, slabsStatus}) => {

  const [isModal, setIsModal] = useState(false)

  return (
    <div id='leftPanelContainer'>
      <div
        style={{fontSize: 38, fontWeight: 'bold'}}
        onClick={easterClick}
      >
        Guill' Tools
      </div>
      <Modal
        isOn={isModal}
        handleClose={() => setIsModal(false)}
      />
      <Toggle
        title='Position des dalles'
        value={slabsStatus}
        choices={[
          {label: 'HAUTE', value: 'top'},
          {label: 'BASSE', value: 'bottom'},
          {label: 'DOUBLE', value: 'double'}
        ]}
        setter={slabsSetter}
      />
      <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
        <ForwardToInboxRoundedIcon id='sendIcon' onClick={() => setIsModal(true)} />
        <img
          id='aternosLogo'
          src={aternosLogo}
          alt='aternosLogo'
          onClick={() => window.open('https://aternos.org/server/', '_blank')}
        />
      </div>
    </div>
  )
}

export default LeftPanel