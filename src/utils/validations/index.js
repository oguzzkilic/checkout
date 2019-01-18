import CardCheck from 'payform';

export const required = value => value ? undefined : 'Boş bırakılamaz';
export const validCard = value => CardCheck.validateCardNumber(value) ? undefined : 'Geçersiz Kart Numarası';
export const validCVC = value => CardCheck.validateCardCVC(value) ? undefined : 'Geçersiz Kod';
