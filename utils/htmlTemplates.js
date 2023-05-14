const { rujaniTeaURL, getRecoverPasswordURL } = require("./hyperlinks");
const { rujaniTeaClone } = require("./text");

exports.resetPasswordLinkTemplate = ({
	userId,
	secret,
}) => `<div style="font-family: Helvetica,Arial,sans-serif;max-width:100%;overflow:auto;line-height:2;align:center">
		<div style="margin:10px auto;width:80%;padding:20px 0">
			<div style="border-bottom:1px solid #eee">
				<a
					href=${rujaniTeaURL}
					style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600"
				>
					${rujaniTeaClone}
				</a>
			</div>
			<p style="font-size:1.1em">Hi,</p>
			<p>
				Follow below link to reset your customer account password at Rujani Tea clone. If you didn't request a new password, you can safely delete this email. This link is valid for 5 minutes only.
			</p>
			<a href=${`${getRecoverPasswordURL(userId, secret)}`}
                style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset
                 Password</a>
			<p style="font-size:0.9em;">
				Please copy paste the 
				<a style="color:blue" href=${`${getRecoverPasswordURL(userId, secret)}`}>${`${getRecoverPasswordURL(
	userId,
	secret
)}`}</a>
				Url in your browser if you face any issue resetting it via clicking on above button.
			</p>
			<p style="font-size:0.9em;">
				Regards,
				<br />
				${rujaniTeaClone}
			</p>
			<hr style="border:none;border-top:1px solid #eee" />
			<div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
				<p>${rujaniTeaClone}</p>
				<p>Save planet to save humans.</p>
			</div>
		</div>
	</div>`;
