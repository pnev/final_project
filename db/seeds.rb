# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

topic1 = Topic.create({name: 'Affordable Care Act'})
topic2 = Topic.create({name: 'Self-Employment'})
topic3 = Topic.create({name: 'Saving for the Future'})
topic4 = Topic.create({name: 'Deductions'})
topic5 = Topic.create({name: 'Student Loan Interest'})
topic6 = Topic.create({name: 'Do I need to file?'})

admin1 = Admin.create!({name: 'Admin 1', password: 'test', email: 'testuser@test.com' })
