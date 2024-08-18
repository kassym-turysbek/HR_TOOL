exports.seed = function(knex, Promise) {
    return knex('questions').del()
        .then(function() {
            return knex('questions').insert([
        
        
        ]);
        });
};
