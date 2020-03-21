
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("books").truncate()
  await knex("books").insert([
    { name: "Untethered Soul" },
		{ name: "Letting Go" },
		{ name: "Being aware of awareness" },
		{ name: "Inner Engineering" },
  ])
};
