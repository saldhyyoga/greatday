const models = require("../models");
const response = require("../response");
const bcrypt = require("bcrypt");

exports.signin = async (req, res) => {
	try {
		const { username, password } = req.body;

		const user = await models.user.findOne({
			where: {
				username: username,
			},
		});

		if (!user) {
			return response.error(404, "Account not found", res);
		}

		if (user && bcrypt.compareSync(password, user.password)) {
			return response.ok(
				200,
				{
					name: user.username,
					id: user.id,
				},
				res,
				true
			);
		} else {
			return response.error("Password atau email salah", res);
		}
	} catch (error) {
		console.log(error);
	}
};
