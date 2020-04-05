class AddPhotoUrlToFamily < ActiveRecord::Migration[6.0]
  def change
    add_column :families, :photo_url, :string
  end
end
