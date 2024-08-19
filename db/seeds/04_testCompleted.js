exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('tests_completed').del()
        .then(function() {
            // Inserts seed entries
            return knex('tests_completed').insert([
                //{ test_id: 5, user_id: 5, total: 10, correct: 7, completed: true, recruiters_id: 1 }
            ]);
        });
};
