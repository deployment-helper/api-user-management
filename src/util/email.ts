import SGMail from "@sendgrid/mail";
import { Config } from "../config";
SGMail.setApiKey(Config.SEND_GRID_API_KEY);
export class Email {
  static sendMail(
    to: string,
    from: string,
    subject: string,
    templateId: string,
    data: object
  ) {
    return SGMail.send({
      to,
      from,
      subject,
      templateId,
      dynamicTemplateData: data,
    });
  }
  static sendForgotPasswordEmail(to: string, resetLink: string) {
    return Email.sendMail(
      to,
      Config.SEND_GRID_FROM_EMAIL,
      "Forgot Password",
      "d-b4549442389a43a98afb2076f946951a",
      {
        forgot_password_url: resetLink,
      }
    );
  }
}
