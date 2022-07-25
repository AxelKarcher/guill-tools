import './Toggle.scss'

const Toggle = ({title, value, left, leftLabel, right,
  rightLabel, setter}) => {
  return (
    <div id='toggleContainer'>
      {title && <div style={{marginBottom: 10, fontWeight: 'bold'}}>{title}</div>}
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div
          className='toggleElem'
          style={{marginRight: 10, backgroundColor: value === left ? 'white' : '',
            borderColor: value === left ? 'white' : ''}}

          onClick={() => setter(left)}
        >
          {leftLabel || left}
        </div>
        <div
          className='toggleElem'
          style={{backgroundColor: value !== left ? 'white' : '',
            borderColor: value !== left ? 'white' : ''}}
          onClick={() => setter(right)}
        >
          {rightLabel || right}
        </div>
      </div>
    </div>
  )
}

export default Toggle