class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :description, :site
end
