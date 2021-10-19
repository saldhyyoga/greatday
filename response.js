const jwtConfig = require("./config/jwt.json");
const jwt = require("jsonwebtoken");

exports.ok = (code, values, res, token = false) => {
	let data = {
		status: "OK",
		data: values,
	};

	if (token) {
		const token = jwt.sign(
			{ name: values.name, id: values.id },
			jwtConfig.secret
		);

		data = { ...data, token: token };
	}
	res.status(code).json(data);
	res.end();
};

exports.error = function (code, values, res) {
	var data = {
		status: "ERROR",
		messages: values,
	};

	res.status(code).json(data);
	res.end();
};
