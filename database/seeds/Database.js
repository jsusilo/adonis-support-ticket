"use strict";

/*
|--------------------------------------------------------------------------
| Database Seeder
|--------------------------------------------------------------------------
| Database Seeder can be used to seed dummy data to your application
| database. Here you can make use of Factories to create records.
|
| make use of Ace to generate a new seed
|   ./ace make:seed [name]
|
*/

// const Factory = use('Factory')

const Database = use('Database')

class DatabaseSeeder {
  *run() {
    yield Database.table("categories").insert([
      {
        name: "Maintenance",
        created_at: "2017-03-07 00:00:00",
        updated_at: "2017-03-07 00:00:00"
      },
      {
        name: "Request New",
        created_at: "2017-03-07 00:00:00",
        updated_at: "2017-03-07 00:00:00"
      }
    ]);
    yield Database.table("departments").insert([
      {
        name: "Maintenance",
        created_at: "2017-03-07 00:00:00",
        updated_at: "2017-03-07 00:00:00"
      },
      {
        name: "Keuangan",
        created_at: "2017-03-07 00:00:00",
        updated_at: "2017-03-07 00:00:00"
      },
      {
        name: "Sales",
        created_at: "2017-03-07 00:00:00",
        updated_at: "2017-03-07 00:00:00"
      },
      {
        name: "Umum",
        created_at: "2017-03-07 00:00:00",
        updated_at: "2017-03-07 00:00:00"
      }
    ]);
  }
}

module.exports = DatabaseSeeder;
