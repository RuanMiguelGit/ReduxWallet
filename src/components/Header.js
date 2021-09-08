import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../components/Header.css'
class Header extends React.Component {
  render() {
    const { emailDisplay, expensesData } = this.props;
    const HeaderTotal = expensesData
      .reduce((acc, cur) => acc + cur.value * cur.exchangeRates[cur.currency].ask, 0);

    return (
      <div>

        <section
          data-testid="email-field"
          className='userName'
        >
          {' '}
          Email do usuario:
          {' '}
          {emailDisplay}
        </section>

        <section
          data-testid="total-field"
          className='totalfi'
        >
          {' '}
          {(HeaderTotal)}
        </section>

        <section
          data-testid="header-currency-field"
          className='totalfi'
        >
          {' '}
          BRL
        </section>

      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  emailDisplay: state.user.email,
  expensesData: state.wallet.expenses,

});

Header.propTypes = {
  emailDisplay: PropTypes.string.isRequired,
  expensesData: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, null)(Header);
