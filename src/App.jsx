import {useState, useEffect} from 'react'

import './App.scss'
import LeftPanel from './components/LeftPanel/LeftPanel'

const items = [
  {name: 'end_stone_bricks'},
  {name: 'end_stone_brick_stairs'},
  {name: 'end_stone_brick_slab', isSlab: true},
  {name: 'stone_bricks'},
  {name: 'stone_brick_stairs'},
  {name: 'stone_brick_slab', isSlab: true},
  {name: 'blue_terracotta'},
  {name: 'cobblestone_slab', isSlab: true},
  {name: 'polished_andesite'},
  {name: 'smooth_stone'},
  {name: 'smooth_stone_slab', isSlab: true},
  {name: 'dark_prismarine'}
]

const App = () => {

  const [isDefaultBg, setIsDefaultBg] = useState(true)
  const [listClickCount, setListClickCount] = useState(0)
  const [slabsStatus, setSlabsStatus] = useState('bottom')

  useEffect(() => {
    if (listClickCount >= 5) {
      setIsDefaultBg(!isDefaultBg)
      setListClickCount(0)
    }
  }, [listClickCount])

  const getCommand = (id) => {
    let item = items[id]
    let strToCopy = '//set minecraft:' + item?.name

    strToCopy += item?.isSlab ? ('[type=' + slabsStatus + ']') : ''
    navigator.clipboard.writeText(strToCopy)
  }

  return (
    <div id='appContainer' className={isDefaultBg ? 'defaultBg' : 'guillBg'}>
      <LeftPanel
        easterClick={() => setListClickCount(listClickCount + 1)}
        slabsSetter={setSlabsStatus}
        slabsStatus={slabsStatus}
      />
      <div id='body'>
        <div id='grid'>
          {items?.map(({name}, i) => (
            <img
              key={i}
              height={75}
              className='clickable'
              onClick={() => getCommand(i)}
              src={require('./assets/' + name + '.png')}
              alt='block'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
