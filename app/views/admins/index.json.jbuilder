json.array!(@admins) do |admin|
  json.extract! admin, :id, :name, :name, :email, :password
  json.url admin_url(admin, format: :json)
end
