export default class PhoneValidator {
  static validatePhoneNumber(phoneNumber) {
    const reIfPlus = /^[+]/;
    if (reIfPlus.test(phoneNumber)) {
      const reCode = /^[+]([\D]*)([\d]*)([\D]*)(\d{3})([\D]*)(\d{3})([\D]*)(\d{2,3})([\D]*)(\d{2,4})/;
      return reIfPlus.exec(phoneNumber)
            + reCode.exec(phoneNumber)[2]
            + reCode.exec(phoneNumber)[4]
            + reCode.exec(phoneNumber)[6]
            + reCode.exec(phoneNumber)[8]
            + reCode.exec(phoneNumber)[10];
    }
    const reCode = /([\d]*)([\D]*)([\d]*)([\D]*)(\d{3})([\D]*)(\d{3})([\D]*)(\d{2,3})([\D]*)(\d{2,4})/;
    const newCode = '+7';
    return `${newCode}${reCode.exec(phoneNumber)[5]}${reCode.exec(phoneNumber)[7]}${reCode.exec(phoneNumber)[9]}${reCode.exec(phoneNumber)[11]}`;
  }
}
