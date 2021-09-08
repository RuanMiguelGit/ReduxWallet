import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions';
import '../pages/Table.css'

class Table extends React.Component {
  render() {
    const { expensesData, remover } = this.props;
    return (

      <table>
        <thead className="TableB">
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expensesData.map((item) => (
            <tr key={item.id} className='tableB'>
              <td className='tableA'>{item.description}</td>
              <td className='tableA'>{item.tag}</td>
              <td className='tableA'>{item.method}</td>
              <td className='tableA'>{item.value}</td>
              <td className='tableA'>{item.exchangeRates[item.currency].name}</td>
              <td className='tableA'>{parseFloat(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
              <td className="tableA">
                {parseFloat(item.exchangeRates[item.currency]
                  .ask * item.value).toFixed(2)}
              </td>
              <td className="tableA">Real</td>
              <td>
                <button
                  type="button"
                  className="ButtonS"
                  data-testid="delete-btn"
                  onClick={() => remover(item.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyData: state.wallet.currencies,
  expensesData: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  remover: (id) => dispatch(removeExpense(id)),
});

Table.propTypes = {
  expensesData: PropTypes.func.isRequired,
  remover: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
