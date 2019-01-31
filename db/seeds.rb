# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(email: "josasdasdh@launchacademys.com", password: "password1234")
User.create!(email: "anthadfgdfony@launchacademy.com", password: "password1234")
User.create!(email: "seanrt324@launchacademy.com", password: "password1234")
User.create!(email: "aj@laufddnchacademy.com", password: "password1234")
User.create!(email: "sergei@dfgddglaunchacademy.com", password: "password1234")


CUSTOMERS = [
  {
    first_name: "Alex1",
    last_name: "Tunik",
    email: "alextucvxcznik5@mail.com",
    phone_number: "617-206-0968",
    add_phone_number: "617-206-0968",
    comment: "Hello i am moving from here to there please give me a call"
  },
  {
    first_name: "Alex2",
    last_name: "Tunik",
    email: "alextunighkhjk1@mail.com",
    phone_number: "617-206-0968",
    add_phone_number: "617-206-0968",
    comment: "Hello i am moving from here to there please give me a call"
  },
  {
    first_name: "Alex3",
    last_name: "Tunik",
    email: "alext124313unik2@mail.com",
    phone_number: "617-206-0968",
    add_phone_number: "617-206-0968",
    comment: "Hello i am moving from here to there please give me a call"
  },
  {
    first_name: "Alex4",
    last_name: "Tunik",
    email: "alextundsfsdfswqqik3@mail.com",
    phone_number: "617-206-0968",
    add_phone_number: "617-206-0968",
    comment: "Hello i am moving from here to there please give me a call"
  },
  {
    first_name: "Alex5",
    last_name: "Tunik",
    email: "alextasdaunik4@mail.com",
    phone_number: "617-206-0968",
    add_phone_number: "617-206-0968",
    comment: "Hello i am moving from here to there please give me a call"
  }
]

CUSTOMERS.each do |customer|
  Customer.create!(first_name: customer[:first_name], last_name: customer[:last_name], email: customer[:email], phone_number: customer[:phone_number], add_phone_number: customer[:add_phone_number], comment: customer[:comment])
end


JOBS = [
  {
    size_of_move: "one bedroom",
    moving_date: "10/10/2010",
    from_address: "96 Bussey st dedham ma 02026",
    to_address: "100 Washington st Bostom Ma 03034",
    house_type: "ground floor",
    crew_size: 6
  },
  {
    size_of_move: "one bedroom",
    moving_date: "10/10/2010",
    from_address: "96 Bussey st dedham ma 02026",
    to_address: "100 Washington st Bostom Ma 03034",
    house_type: "ground floor",
    crew_size: 6
  },
  {
    size_of_move: "one bedroom",
    moving_date: "10/10/2010",
    from_address: "96 Bussey st dedham ma 02026",
    to_address: "100 Washington st Bostom Ma 03034",
    house_type: "ground floor",
    crew_size: 6
  }
]
JOBS.each do |job|
  Job.create!(customer_id: Customer.order("RANDOM()").first.id, size_of_move: job[:size_of_move], moving_date: job[:moving_date], from_address: job[:from_address], to_address: job[:to_address], house_type: job[:house_type], crew_size: job[:crew_size] )
end
