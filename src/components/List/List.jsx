import {useState} from 'react'
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded'

import './List.scss'
import aternosLogo from '../../assets/aternos.png'
import Toggle from '../Toggle/Toggle'
import Modal from '../Modal/Modal'

const List = ({items, easterClick, itemClick, slabsSetter, slabsStatus}) => {

  const [isModal, setIsModal] = useState(false)

  return (
    <div id='listContainer'>
      <Modal
        isOn={isModal}
        handleClose={() => setIsModal(false)}
      />
      <div style={{display: 'flex', flexDirection : 'column', alignItems: 'center', height: '75%'}}>
        <div
          style={{fontSize: 50, fontWeight: 'bold', marginBottom: 10}}
          onClick={easterClick}
        >
          Liste
        </div>
        <div id='list'>
          {items?.map(({name}, i) => (
            <div
              key={i}
              className='listElem'
              style={{marginBottom: (i !== items?.length - 1) ? 5 : 0}}
              onClick={() => itemClick(i)}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <Toggle
        title='Position des dalles'
        value={slabsStatus}
        leftLabel='HAUTE'
        left='top'
        rightLabel='BASSE'
        right='bottom'
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

export default List