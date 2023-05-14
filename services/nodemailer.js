const nodemailer = require("nodemailer");
const { config } = require("../config/appConfig");

const {
	email: { appEmail, emailAppPassword, emailHost, emailPort, emailService },
} = config;

const transporter = nodemailer.createTransport({
	service: emailService,
	host: emailHost,
	port: emailPort,
	secure: true,
	auth: {
		user: appEmail,
		pass: emailAppPassword,
	},
});

const defaultMailOptions = {
	from: appEmail,
	/*
	 * to: "kirtesh1996@gmail.com",
	 * to: "kirtesh.rujani@yopmail.com",
	 */
	subject: "No Subject",
	/*
	 * text: "Test Email",
	 * html,
	 */
};

const sendEmail = ({ userEmail: to, subject = "", html = "", text = "" }) => {
	const mailOptions = {
		...defaultMailOptions,
		...(to && { to }),
		...(subject && { subject }),
		...(html && { html }),
		...(text && { text }),
	};

	return transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(`Error in sending email  ${error}`);
			return true;
		}
		console.log(`Email sent: ${info.response}`);
		return false;
	});
};

module.exports = sendEmail;
