class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :family
      t.string :description
      t.string :release_year
      t.string :photo_url
      t.references :series, foreign_key: true

      t.timestamps
    end
  end
end
