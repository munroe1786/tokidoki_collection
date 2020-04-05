class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :description
      t.string :series
      t.string :release_year
      t.string :photo_url
      t.references :family, foreign_key: true

      t.timestamps
    end
  end
end
