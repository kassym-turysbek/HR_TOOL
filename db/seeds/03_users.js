exports.seed = function(knex, Promise) {
    return knex('users').del()
        .then(function() {
            return knex('users').insert([
                //{ name: "James Wallace", email: 'jameswallace@gmail.com', location: 'Phoenix', bio: 'Junior level Front End Developer looking for a position at a startup company', notes: [{ date: "5/21/2019", note: "Waiting to here back" }, { date: "6/1/2019", note: "Took first test and scored average to other candidates interested in Software Engineering Developer position at Google" }, { date: "6/15/2019", note: "Retook JavaScript test and scored 100%. Top candidate for Software Engineering Developer position at Google" }], recruiters_id: 1 },
            ]);
        });
};