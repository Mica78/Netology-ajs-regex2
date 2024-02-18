import PhoneValidator from '../index';

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
])(
  ('testing %s'),
  (phoneNumber, expected) => {
    const res = PhoneValidator.validatePhoneNumber(phoneNumber);
    expect(res).toEqual(expected);
  },
);
