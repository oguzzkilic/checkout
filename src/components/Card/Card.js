import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cardType } from '../../utils/helper';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Flipper,
  Front,
  Back,
  Cvc,
  Image,
  Logo,
  Details,
  CardNumber,
  ExpirationDate,
  CardHolder,
  CardType,
} from './style';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardValues: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    const { cardData } = this.props;
    if (cardData.values !== nextProps.cardData.values) {
      if (nextProps.cardData.values) {
        this.setState({
          cardValues: nextProps.cardData.values,
        });
      } else {
        this.setState({
          cardValues: {},
        });
      }
    }
  }

  render() {
    const { cardValues } = this.state;
    const { flip } = this.props;
    const cardLogo = cardType(cardValues.ccNumber) || undefined;
    return (
      <Wrapper>
        <Flipper flip={flip}>
          <Front>
            <Logo />
            <Details>
              <CardNumber>{cardValues.ccNumber || '1234 5678 9000 0000'}</CardNumber>
              <ExpirationDate>
                {cardValues.month ? cardValues.month.value : 'AA'}
                /
                {cardValues.year ? cardValues.year.value : 'YY'}
              </ExpirationDate>
              <CardHolder>{cardValues.chName || 'AD SOYAD'}</CardHolder>
              <CardType>
                {cardValues.ccNumber && cardLogo && <Image src={`img/${cardLogo}.png`} />}
              </CardType>
            </Details>
          </Front>

          <Back>
            <Cvc>{cardValues.cvc || 'CVC'}</Cvc>
          </Back>
        </Flipper>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({ cardData: state.form.paymentForm });

Card.defaultProps = {
  cardData: {},
};

Card.propTypes = {
  cardData: PropTypes.shape({
    values: PropTypes.object,
  }),
  flip: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Card);
