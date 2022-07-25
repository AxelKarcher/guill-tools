import OldTextField from '@mui/material/TextField'

const TextField = ({value, style, fullWidth, action, multiline, rows,
  label, disabled, isOptional, handleConfirm, password, maxRows}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {
        label &&
        <div style={{display: 'flex', alignItems: 'flex-end'}}>
          <div style={{fontSize: 20}}>{label}</div>
          {
            isOptional &&
            <div style={{fontSize: 11, marginLeft: 5, color: 'grey', paddingBottom: 2}}>
              (Optionnel)
            </div>}
        </div>
      }
      <OldTextField
        type={password ? 'password' : 'text'}
        rows={rows}
        disabled={disabled}
        fullWidth={fullWidth}
        maxRows={maxRows}
        autoComplete='off'
        style={{...style}}
        value={value}
        multiline={multiline}
        onChange={(e) => action(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleConfirm()}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'lightgray'
            },
            '&:hover fieldset': {
              borderColor: 'grey'
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black'
            }
          }
        }}
      />
    </div>
  )
}

export default TextField