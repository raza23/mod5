class OppurtunitySerializer < ActiveModel::Serializer
  attributes :id,:organization,:volunteers_needed,:description,:date
end
