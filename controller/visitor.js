const models = require("../models");
const response = require("../response");
const dayjs = require("dayjs");
const { Op } = require("sequelize");

exports.addVisitor = async (req, res) => {
	try {
		const { name, phonenumber, address, office, email, tujuan, gender } =
			req.body;

		const result = await models.visitor.create({
			name,
			phonenumber,
			address,
			office,
			email,
			tujuan,
			gender,
		});

		return response.ok(200, result, res);
	} catch (error) {
		console.log(error);
	}
};

exports.visitorToday = async (req, res) => {
	try {
		const now = dayjs();
		console.log(now.format("YYYY-MM-DD 01:00:00"));

		const result = await models.visitor.count({
			where: {
				createdAt: {
					[Op.gte]: now.format("YYYY-MM-DD 01:00:00"),
				},
			},
		});

		return response.ok(200, result, res);
	} catch (error) {
		console.log(error.message);
	}
};

exports.listVisitorToday = async (req, res) => {
	try {
		const now = dayjs();
		console.log(now.format("YYYY-MM-DD 01:00:00"));
		const result = await models.visitor.findAll({
			where: {
				createdAt: {
					[Op.gte]: now.format("YYYY-MM-DD 01:00:00"),
				},
			},
		});

		return response.ok(200, result, res);
	} catch (error) {
		console.log(error);
	}
};
