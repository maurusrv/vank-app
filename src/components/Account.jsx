function Account (props) { // props
  const { account: { id, balance }, isVisible, toggleAccountList } = props

  if (!isVisible) {
    return null
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      border: '1px solid white',
      padding: '20px',
    }}>
      <div>
        <span>Account ID:</span>
        <span>{id}</span>
      </div>
      <div>
        <span>Balance:</span>
        <span>{balance}</span>
      </div>
      <button 
      onClick={toggleAccountList}
      >{isVisible ? 'Hide' : 'Show'}</button>
    </div>
  )
}

export default Account