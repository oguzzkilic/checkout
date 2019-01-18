import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Row, Col } from 'react-simple-flex-grid';
import AuthField from '../../components/AuthField';
import AuthMessage from '../../components/AuthMessage';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Label from '../../components/Label';
import Card from '../../components/Card';
import { months, years } from '../../utils/helper';
import { required, validCard, validCVC } from '../../utils/validations';
import 'react-simple-flex-grid/lib/main.css';

class Payment extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      flipCVC: false,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.cardFlipOn = this.cardFlipOn.bind(this);
    this.cardFlipOff = this.cardFlipOff.bind(this);
  }

  handleFormSubmit(values) {
    console.log(values);
    alert('🎉 Success');
  }

  cardFlipOn() {
    this.setState({
      flipCVC: true,
    });
  }

  cardFlipOff() {
    this.setState({
      flipCVC: false,
    });
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    const { errorMessage, flipCVC } = this.state;
    return [
      <form onSubmit={handleSubmit(this.handleFormSubmit)} key="ef-1">
        <Col span="5">
          <Row>
            <Field
              name="ccNumber"
              component={AuthField}
              label="Kart Numarası"
              type="text"
              autocomplete="off"
              validate={[required, validCard]}
              mask="9999 9999 9999 9999"
            />

            <Field
              name="chName"
              component={AuthField}
              label="Kart Üzerindeki Ad Soyad"
              type="text"
              autocomplete="off"
              maxlength="20"
              validate={required}
            />
          </Row>

          <Row>
            <Col span="8">
              <Label>Son Kullanma Tarihi</Label>
              <Col span="6">
                <Field
                  name="month"
                  validate={required}
                  component={props => (
                    <Select
                      name="month"
                      placeholder="Ay"
                      options={months}
                      value={props.input.value}
                      onChange={props.input.onChange}
                      onBlur={() => props.input.onBlur(props.input.value)}
                      size="small"
                      meta={props.meta}
                    />
                  )}
                />
              </Col>

              <Col span="6">
                <Field
                  name="year"
                  validate={required}
                  component={props => (
                    <Select
                      name="year"
                      placeholder="Yıl"
                      options={years}
                      value={props.input.value}
                      onChange={props.input.onChange}
                      onBlur={() => props.input.onBlur(props.input.value)}
                      meta={props.meta}
                      size="small"
                    />
                  )}
                />
              </Col>
            </Col>

            <Col span="4">
              <Field
                name="cvc"
                component={AuthField}
                label="Güvenlik Kodu"
                type="text"
                autocomplete="off"
                min="0"
                max="9999"
                validate={[required, validCVC]}
                onClickEvent={this.cardFlipOn}
                onCloseEvent={this.cardFlipOff}
                mask="999"
              />
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <Button type="submit" status="default" disabled={submitting}>
                Submit
              </Button>
            </Col>
          </Row>
        </Col>

        <Col span="5">
          <Card flip={flipCVC} />
        </Col>

        <AuthMessage status="danger">
          {errorMessage && errorMessage}
        </AuthMessage>
      </form>,
    ];
  }
}

export default compose(
  reduxForm({
    form: 'paymentForm',
  }),
  connect(),
)(Payment);
