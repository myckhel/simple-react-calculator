class App extends React.Component {
  constructor() {
    super()
    this.state = {
      txt : '', txt2 : '', operation: '',
    }
  }

  Styles = {
      SmallBtn: {
      color: "white",
      fontSize: `1em`,
      margin: `5pt`,
      padding: `0.25em 1em`,
      border: `2px solid palevioletred`,
      borderRadius: `3px`,
    },
    halfBtn: {
      width: '100%',
      fontSize: `1em`,
      margin: `5pt`,
      padding: `0.25em 1em`,
      border: `2px solid palevioletred`,
      borderRadius: `3px`,
    },
    display: {
      width: '100%',
      fontSize: `1em`,
      margin: `5pt`,
      padding: `0.25em 1em`,
      border: `2px solid palevioletred`,
      borderRadius: `3px`,
    }
  }

  numBtn = props => (
    <td><input className="btn btn-primary" type="button" value={props.num} onClick={() => this.setNum(props.num)} style={this.Styles.SmallBtn} /></td>
  )

  operaBtn = props => (
    <td><input className="btn btn-warning" type="button" value={props.op} onClick={() => this.setOp(props.op)} style={this.Styles.SmallBtn}/></td>
  )

  clrBtn = props => (
    <td colSpan={2} className="col-6" ><input className="btn btn-info" type="button" value={props.op} onClick={() => this.clr()} style={this.Styles, this.Styles.halfBtn} /></td>
  )

  equBtn = props => (
    <td colSpan={2} className="col-6" ><input className="btn btn-success" type="button" value={props.equ} onClick={() => this.calculate()} style={this.Styles.halfBtn} /></td>
  )

  display = props => (
    <tr>
      <td colSpan="4" >
        <input className="text-large form-control" disabled type="text" value={props.txt} style={this.Styles.display}/>
      </td>
    </tr>
  )

  Calculator = props =>  (
    <div>
    <this.display txt={props.txt} />
    <tr>
      <this.numBtn num={1} />
      <this.numBtn num={2} />
      <this.numBtn num={3} />
      <this.operaBtn op={'+'} />
    </tr>
    <tr>
      <this.numBtn num={4} />
      <this.numBtn num={5} />
      <this.numBtn num={6} />
      <this.operaBtn op={'-'} />
    </tr>
    <tr>
      <this.numBtn num={7} />
      <this.numBtn num={8} />
      <this.numBtn num={9} />
      <this.operaBtn op={'*'} />
    </tr>
    <tr>
      <this.numBtn num={'.'} />
      <this.numBtn num={0} />
      <this.operaBtn op={'%'} />
      <this.operaBtn op={'/'} />
    </tr>
    <tr>
      <this.clrBtn op={'clr'} />
      <this.equBtn equ={'='} />
    </tr>
    </div>
  )
  setNum(num){
    this.setState({
      txt: this.state.txt+num,
    })
  }

  setOp(op){
    this.setState({
      txt2: this.state.txt, txt: '', operation: op,
    })
  }

  clr(){
    this.setState({
      txt2: '', txt: '', operation: '',
    })
  }

  calculate = () => {
    let result = ''
    const operation = this.state.operation
    const txt = parseFloat(this.state.txt)
    const txt2 = parseFloat(this.state.txt2)
    switch (operation) {
      case '+':
        result = (txt2 + txt)
        break;
      case '-':
        result = (txt2 - txt)
        break;
      case '*':
        result = (txt2 * txt)
        break;
      case '/':
        result = (txt2 / txt)
        break;
      case '%':
        result = (txt2 % txt)
        break;
      default:
    }
    this.setState({
      txt: result,
    })
  }

  render(){
    return (
      <div className="">
        <table>
          <this.Calculator  txt={this.state.txt}/>
        </table>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
