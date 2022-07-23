import './App.scss'
import List from './components/List/List'

const items = [
  'end_stone_bricks',
  'end_stone_brick_stairs',
  'end_stone_brick_slab',
  'stone_bricks',
  'stone_brick_stairs',
  'stone_brick_slab',
  'blue_terracotta',
  'cobblestone_slab',
  'polished_andesite',
  'smooth_stone',
  'smooth_stone_slab'
]

const App = () => {

  return (
    <div id='appContainer'>
      <List items={items} />
      <div id='body'>
        <div id='grid'>
          {items?.map((elem, i) => (
            <img
              key={i}
              height={75}
              className='clickable'
              onClick={() => navigator.clipboard.writeText('//set minecraft:' + elem)}
              src={require('./assets/' + elem + '.png')}
              alt='block'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
