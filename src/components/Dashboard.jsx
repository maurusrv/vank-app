
const Card = () => {
  return (
    <aside style={{
      width: '100%',
      height: '100px',
      border: '1px solid white'

    }}>
      Card
    </aside>
  )
}

const WithdrawButton = () => {
  return (
    <button>
      Withdraw
    </button>
  )
}

const DepositButton = () => {
  return (
    <button>
      Deposit
    </button>
  )
}

const TransferButton = () => {
  return (
    <button>
      Transfer
    </button>
  )
}

const Dashboard = () => {
  return (
    <main>
      <Card />
      <WithdrawButton />
      <DepositButton />
      <TransferButton />
    </main>
  )
}

export default Dashboard
