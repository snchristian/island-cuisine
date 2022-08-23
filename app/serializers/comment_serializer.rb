class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :username
  
  has_many :recipe

 def username
  self.object.user.username
 end


end
