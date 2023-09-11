import './index.css'

const DenominationItem = props => {
  const {denominationsList, onWithdraw} = props

  const {value} = denominationsList

  const Click = () => {
    onWithdraw(value)
    console.log(value)
  }

  return (
    <li className="li">
      <button className="btn" type="button" onClick={Click}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
