# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

series = Series.create([{ number: 1}, { number: 2}, { number: 3}, { number: 4}, { number: 5}, { number: 6}, { number: 7}, { number: 8}])

Character.create(name: "Stellina", family: "Unicorno", description: "First Unicorno released. White with 2 red stars and 1 yellow star, with a rainbow mane.", release_year: "2012", photo_url: "https://media.dollskill.com/media/EDr3wJyNepygzKGzrgQEPJBSFulm5ttX-34.jpg", series_id: 1)

Character.create(name: "Sharkbite", family: "Mermicorno", description: "Light grey body with darker grey tail and mane, shark image on his side and shark tooth necklace", release_year: "2017", photo_url: "https://s3.amazonaws.com/trampt/images/products/000/301/699/Mermicorno_-_Sharkbite-Tokidoki_Simone_Legno-Mermicorno-Tokidoki-trampt-301699o.jpg?1550374381", series_id: 2)
