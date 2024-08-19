exports.seed = function(knex, Promise) {
    return knex('recruiters').del()
        .then(function() {
            return knex('recruiters').insert([
                { name: "Emil Hasanov", email: 'emil.r.hasanov@gmail.com', password: "password", id: 2 },
            ]);
        });
};