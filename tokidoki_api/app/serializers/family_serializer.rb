class FamilySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :photo_url
end
