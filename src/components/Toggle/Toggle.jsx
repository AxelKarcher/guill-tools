import './Toggle.scss'

const Toggle = ({title, choices, value, setter}) => {
  return (
    <div id='toggleContainer'>
      {title && <div style={{marginBottom: 10, fontWeight: 'bold'}}>{title}</div>}
      <div id='choices' style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
        {
          choices?.map((_elem, i) => (
            <div
              className='toggleElem'
              style={{marginRight: 10, backgroundColor: value === choices[i].value ? 'white' : '',
                borderColor: value === choices[i].value ? 'white' : ''}}
              onClick={() => setter(choices[i].value)}
            >
              {choices[i].label}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Toggle