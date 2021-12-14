class RemoteReferenceUserFromReviews < ActiveRecord::Migration[6.1]
  def change
    remove_reference(:reviews, :user, index: true)
  end
end
