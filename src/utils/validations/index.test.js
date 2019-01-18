import {
  required,
  validCard,
  validCVC,
} from './index';

const visa = '4012888888881881';
const mastercard = '5105105105105100';
const amex = '371449635398431';


describe('Validation Tests', () => {
  it('required', () => {
    expect(required('test')).toEqual(undefined);
    expect(required()).toEqual('Boş bırakılamaz');
  });

  it('check visa card number', () => {
    expect(validCard(visa)).toEqual(undefined);
    expect(validCard('123')).toEqual('Geçersiz Kart Numarası');
  });

  it('check mastercard card number', () => {
    expect(validCard(mastercard)).toEqual(undefined);
    expect(validCard('123')).toEqual('Geçersiz Kart Numarası');
  });

  it('check amex card number', () => {
    expect(validCard(amex)).toEqual(undefined);
    expect(validCard('123')).toEqual('Geçersiz Kart Numarası');
  });

  it('check amex cvc number', () => {
    expect(validCVC('0000')).toEqual(undefined);
    expect(validCVC('12345')).toEqual('Geçersiz Kod');
  });

  it('check standard cvc number', () => {
    expect(validCVC('000')).toEqual(undefined);
    expect(validCVC('12')).toEqual('Geçersiz Kod');
  });
});
