import './List.scss'
import aternosLogo from '../../assets/aternos.png'

const List = ({items, handleClick}) => {
  return (
    <div id='listContainer'>
      <div style={{display: 'flex', flexDirection : 'column', alignItems: 'center', height: '85%'}}>
        <div
          style={{fontSize: 50, fontWeight: 'bold', marginBottom: 10}}
          onClick={handleClick}
        >
          Liste
        </div>
        <div id='list'>
          {items?.map((elem, i) => (
            <div
              key={i}
              className='listElem'
              style={{marginBottom: (i !== items?.length - 1) ? 5 : 0}}
              onClick={() => navigator.clipboard.writeText('//set minecraft:' + elem)}
            >
              {elem}
            </div>
          ))}
        </div>
      </div>
      <img
        id='aternosLogo'
        src={aternosLogo}
        alt='aternosLogo'
        onClick={() => window.open('https://aternos.org/server/', '_blank')}
      />
    </div>
  )
}

export default List