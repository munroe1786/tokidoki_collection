class CharacterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :series, :release_year, :photo_url, :family_id
end
