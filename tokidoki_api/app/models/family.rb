class Family < ApplicationRecord
    has_many :characters, dependent: :destroy
end
