import { MessageComponent } from '@libs/modules';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MailService {
  private readonly logger = new Logger(this.constructor.name);

  constructor(private readonly mailerService: MailerService, private readonly i18n: MessageComponent) {}

  private async sendEmailViaSMTP(options: ISendMailOptions): Promise<void> {
    try {
      await this.mailerService.sendMail(options);
    } catch (error: unknown) {
      this.logger.error(`Can not send mail ${JSON.stringify({ options, error })}`);
    }
  }

  async sendSuccessBookingUserEmail(data: any) {
    const { email, subject, bookingDate, startTime, name, address, phone, lang, note } = data;

    await this.sendEmailViaSMTP({
      to: email,
      subject,
      template: 'user-success-booking',
      context: {
        email,
        bookingDate,
        startTime,
        name,
        address,
        phone,
        lang,
        note,
      },
    });
  }

  async sendApproveBookingUserEmail(bookingData: any, merchant: any, branch: any, user: any) {
    const { email, fullName } = user;
    const { startTime, endTime, bookingDate } = bookingData;
    const { name, address, phone } = branch;
    return this.sendEmailViaSMTP({
      to: email,
      subject: '<KMAHealthcare>Thông báo: Lịch hẹn chăm sóc sức khỏe',
      template: 'user-approved-booking',
      context: {
        email: email,
        fullName: fullName,
        bookingDate: bookingDate,
        startTime: startTime,
        endTime: endTime,
        merchantName: name,
        merchantAddress: address,
        merchantPhoneNumber: phone,
      },
    });
  }

  async sendSuccessBookingAdminBranchEmail(data: any) {
    const {
      customerEmail,
      customerName,
      startTime,
      bookingDate,
      customerPhoneNumber,
      adminBranchEmail,
      name,
      phone,
      address,
      subject,
      lang,
    } = data;
    await this.sendEmailViaSMTP({
      to: adminBranchEmail,
      subject,
      template: 'admin-success-booking',
      context: {
        customerPhoneNumber,
        customerName,
        customerEmail,
        bookingDate,
        startTime,
        name,
        address,
        phone,
        lang,
      },
    });
  }

  async sendMerchantAddEmployeeEmail(data: any) {
    const { email, name, lang, password } = data;
    await this.sendEmailViaSMTP({
      to: email,
      subject: 'Tạo tài khoản thành công',
      template: 'admin-add-employee',
      context: {
        email,
        name,
        lang,
        password,
      },
    });
  }

  async sendMerchantRegisterMerchantOtp(data: any) {
    const { email, generatedOtp } = data;
    await this.sendEmailViaSMTP({
      to: email,
      subject: 'Xác thực tài khoản cửa hàng',
      template: 'verify-otp-register-merchant',
      context: {
        email,
        generatedOtp,
      },
    });
  }
}
