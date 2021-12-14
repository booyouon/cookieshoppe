# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cookie.destroy_all
Review.destroy_all
User.destroy_all

@admin = User.create!(username: 'beans', email: 'booyouon@email.com', password: 'poopoo')

puts "#{User.count} user(s) created"

@chocolate_chip = Cookie.create!(
  name: "Chocolate Chip",
  description: "Yummy classic chocolate chip cookie",
  price: 1.99,
  img_url: "https://lospec.com/i/edis.png"
)

@mm = Cookie.create!(
  name: "M&M",
  description: "M&M's in my cookie!",
  price: 2.99,
  img_url: "https://lospec.com/i/kuwj.png"
)

@frosted_sugar = Cookie.create!(
  name: "Pink Frosted Sugar",
  description: "It's pink and has colors",
  price: 3.99,
  img_url: "https://lospec.com/i/6los.png"
)

puts "#{Cookie.count} cookie(s) created"

Review.create!(
  title: "Amazing!",
  description: "10/10 the best cookie ever",
  cookie: @chocolate_chip,
  user: @admin
)

Review.create!(
  title: "idk.",
  description: "I don't really like M&M's",
  cookie: @mm,
  user: @admin
)

Review.create!(
  title: "frosty",
  description: "wowowowow",
  cookie: @frosted_sugar,
  user: @admin
)

puts "#{Review.count} review(s) created"