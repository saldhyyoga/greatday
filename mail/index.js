const nodemailer = require("nodemailer");

exports.sendMail = (name, phonenumber) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PASSWORD,
		},
		tls: { rejectUnauthorized: false },
	});

	const mailOptions = {
		from: `${config.email}`,
		to: `${email}`,
		subject: "Thankyou",
		text: `Terimakasih telah mengunjungi tempat kami. Jika berkenan review tempat kami. \n
      https://nodejs-greatday-app.herokuapp.com/review?name=${name}&phonenumber=${phonenumber}
      `,
	};

	console.log("sending email");

	return transporter.sendMail(mailOptions, (err, res) => {
		if (err) {
			response.error(`${err}`);
		} else {
			console.log("email sent");
		}
	});
};
