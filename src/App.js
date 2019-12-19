import React, {Component} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Router from './Router'
import PropTypes from 'prop-types'

class App extends Component {

  static propTypes = {
    router: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch() {
    /*
    router.push({
      pathname,
      search: value ? `?${value}` : ''
    })
     */
    console.log('handleSearch search', this.state.search);

    this.context.router.push(`/store?search=${this.state.search}`)
  }

  handleChange(event) {
    this.setState({ search: event.target.value })
  }

  render() {

    const Navigation = ({cart}) => <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <NavLink to="/" className="navbar-brand">
        <img
          alt="Aston"
          title="Aston"
          src={`images/assets/aston-logo-small.png`}/>
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to='/' className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/store' className="nav-link">Store</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/cart' className={cart.length ? "nav-link" : "nav-link disabled"}>Cart
              ({cart.reduce((accumulator, item) => {
                return (accumulator + item.quantity); // Learn more about "reduce"
              }, 0)})</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/checkout' className={cart.length ? "nav-link" : "nav-link disabled"}>Check Out</NavLink>
          </li>
        </ul>
        <form className="form-inline mt-2 mt-md-0">
          <input className="form-control mr-sm-2"
                 type="text"
                 value={this.state.search}
                 onChange={this.handleChange}
                 placeholder="Search"
                 aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleSearch}>Search</button>
        </form>
      </div>
    </nav>;

    return <div className="page-container">
      <Navigation {...this.props}/>
      <Router/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default withRouter(connect(mapStateToProps)(App)); // withRouter needed to wrap redux connect with react routing

