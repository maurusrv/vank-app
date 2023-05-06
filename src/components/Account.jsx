function Account (props) { // props
  const { account: { id, balance }, onSelectAccount, selectedAccount } = props

  // if (!isVisible) {
  //   return null
  // }

  const onSelect = () => {
    console.log('select account!', id)
    onSelectAccount(props.account)
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      border: '1px solid white',
      padding: '20px',
      backgroundColor: selectedAccount && selectedAccount.id === id ? 'white' : 'black',
      'color': selectedAccount && selectedAccount.id === id ? 'black' : 'white'
    }}>
      <div>
        <span>Account ID:</span>
        <span>{id}</span>
      </div>
      <div>
        <span>Balance:</span>
        <span>{balance}</span>
      </div>
      <button onClick={onSelect}>{selectedAccount && selectedAccount.id === id ? 'Selected' : 'Select'}</button>
    </div>
  )
}

export default Account