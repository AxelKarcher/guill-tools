import './List.scss'

const List = ({items}) => {
  return (
    <div id='listContainer'>
      <div style={{fontSize: 50, fontWeight: 'bold', marginBottom: 20}}>Liste</div>
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
  )
}

export default List