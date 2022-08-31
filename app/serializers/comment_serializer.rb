class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :username, :can_modify
  


 def username
  self.object.user.username
 end

 def can_modify
  current_user == self.object.user
 end


end
