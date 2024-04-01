const { Op } = require("sequelize");

const buildSearchCriteria = (req, model) => {
  const validColumns = Object.keys(model.getAttributes());
  const searchCriteria = {};
  for (const key in req.query) {
    if (key !== "query" && validColumns.includes(key)) {
      searchCriteria[key] = { [Op.like]: `%${req.query[key]}%` };
    } else {
        throw new Error(`Invalid search parameter: ${key}`);
    }
  }
  return searchCriteria;
};

module.exports = { buildSearchCriteria };
