# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

families = Family.create([{ name: "Unicorno", photo_url: "https://cdn.shopify.com/s/files/1/2429/5791/files/ch-logo-3.png?v=1539599448" }, { name: "Mermicorno", photo_url: "https://cdn.shopify.com/s/files/1/2429/5791/files/ch-logo-5.png?v=1539599474"}, { name: "Cactus Friends", photo_url: "https://cdn.shopify.com/s/files/1/2429/5791/files/ch-logo-1.png?v=1539599419"}, { name: "Donutella and Her Sweet Friends", photo_url: "https://cdn.shopify.com/s/files/1/2429/5791/files/ch-logo-2.png?v=1539599434"}, { name: "Punkstar", photo_url: "https://cdn.shopify.com/s/files/1/2429/5791/files/characters_punkstar_logo_main.png?v=1548963737"}, { name: "Til Death Do Us Part", photo_url: "https://cdn.shopify.com/s/files/1/2429/5791/files/ch-logo-7.png?v=1539599496"}])

Character.create(name: "Stellina", description: "First Unicorno released. White with 2 red stars and 1 yellow star, with a rainbow mane.", series: "1", release_year: "2012", photo_url: "https://media.dollskill.com/media/EDr3wJyNepygzKGzrgQEPJBSFulm5ttX-34.jpg", family_id: 1)

Character.create(name: "Sharkbite", description: "Light grey body with darker grey tail and mane, shark image on his side and shark tooth necklace", series: "2", release_year: "2017", photo_url: "https://s3.amazonaws.com/trampt/images/products/000/301/699/Mermicorno_-_Sharkbite-Tokidoki_Simone_Legno-Mermicorno-Tokidoki-trampt-301699o.jpg?1550374381", family_id: 2)
