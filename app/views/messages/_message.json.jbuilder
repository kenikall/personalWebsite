json.extract! message, :id, :to, :subject, :message, :created_at, :updated_at
json.url message_url(message, format: :json)