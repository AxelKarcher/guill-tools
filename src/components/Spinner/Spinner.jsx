import {CircularProgress} from '@mui/material'

const Spinner = ({left}) => {
  return (
    <div style={{display: 'flex', justifyContent: left ? 'flex-start' : 'center'}}>
      <CircularProgress sx={{color: 'gray'}} />
    </div>
  )
}

export default Spinner