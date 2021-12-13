class ChangePriceToFloatInCookies < ActiveRecord::Migration[6.1]
  def change
    change_column :cookies, :price, :float
  end
end
