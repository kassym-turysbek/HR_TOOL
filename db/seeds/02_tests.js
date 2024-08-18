exports.seed = function(knex, Promise) {
    return knex('tests').del()
        .then(function() {
            return knex('tests').insert([
                { name: "Belbin Test", total: 7, code: "BelbinTestCode", recruiters_id: 2, belbinSwitch: "on", id: 1 },
            ]);
        });
};
