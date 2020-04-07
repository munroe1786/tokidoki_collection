# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

families = Family.create([{ name: "Unicorno", photo_url: "" }, { name: "Mermicorno", photo_url: ""}, { name: "Cactus Friends", photo_url: ""}, { name: "Donutella and Her Sweet Friends", photo_url: ""}, { name: "Punkstar", photo_url: ""}, { name: "Til Death Do Us Part", photo_url: ""}])

Character.create(name: "Stellina", description: "First Unicorno released. White with 2 red stars and 1 yellow star, with a rainbow mane.", series: "1", release_year: "2012", photo_url: "", family_id: 1)

Character.create(name: "Sharkbite", description: "Light grey body with darker grey tail and mane, shark image on his side and shark tooth necklace", series: "2", release_year: "2017", photo_url: "", family_id: 2)
