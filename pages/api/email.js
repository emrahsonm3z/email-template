import nextConnect from "next-connect";

import nodemailer from "nodemailer";
import Email from "email-templates";
import path from "path";

import { useTranslation } from "../../i18n";

const handler = nextConnect();

const root = path.resolve("emails");
const { t } = useTranslation();

handler.post((req, res) => {
  const email = new Email({
    juiceResources: {
      webResources: {
        relativeTo: path.resolve("emails"),
        images: true,
      },
    },
    transport: {
      jsonTransport: true,
    },
    // preview: true,
    // i18n: {
    //   directory: path.resolve("public/static/locales"),
    //   defaultLocale: "tr",
    //   locales: ["tr", "de"],
    // },

    // send: true,
    // transport: {
    //   host: "smtp.mailtrap.io",
    //   port: 2525,
    //   auth: {
    //     user: "ba2e2e0dea60df",
    //     pass: "af015a4a92763e",
    //   },
    //   secure: false,
    //   tls: {
    //     rejectUnauthorized: false,
    //   },
    // },
  });

  email
    .send({
      template: "evb",
      message: {
        from: "test@evb.com.tr",
        to: "emrahsonm3z@gmail.com",
      },
      locals: {
        name: "Emrah Sönmez",
        asd: t("hi"),
      },
    })
    .then((res) => {
      // console.log("res.originalMessage", res.originalMessage);
    })
    .catch(console.error);

  // return transporter.sendMail(emailVar, function (err, info) {
  //   if (err) console.log(err);
  //   else console.log(info);
  // });

  // res.statusCode = 200;
  // res.json({ name: "John Doe" });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
