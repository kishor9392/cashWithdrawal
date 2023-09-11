import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    value: 2000,
  }

  onWithdraw = n => {
    const {value} = this.state

    this.setState({value: value - n})
  }

  render() {
    const {value} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg">
        <div className="bg2">
          <div className="bg3">
            <div className="m1">
              <p className="p">K</p>
            </div>
            <h1 className="h1">Kishore Maddineni</h1>
          </div>

          <div className="m2">
            <p className="h2">Your Balance</p>
            <div className="g1">
              <p className="h3">{value}</p>
              <p className="p2">In Rupees</p>
            </div>
          </div>

          <div className="m3">
            <p className="h3">Withdraw</p>
            <p className="h2">CHOOSE SUM (IN RUPEES)</p>
          </div>

          <ul className="m4">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                denominationsList={each}
                onWithdraw={this.onWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
