class FamilySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :photo_url
  has_many :characters
end
