class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :image
      t.string :description
      t.string :instruction, array: true
      t.string :cooking_time
      t.integer :servings
      t.string :cuisine

      t.timestamps
    end
  end
end
