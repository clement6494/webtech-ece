// Import the new component
import Avatar from './Avatar'

// ...

return (
  <div className="form-widget">
    {/* Add to the body */}
    <Avatar
      uid={user.id}
      url={avatar_url}
      size={150}
      onUpload={(url) => {
        setAvatarUrl(url)
        updateProfile({ username, website, avatar_url: url })
      }}
    />
    {/* ... */}
  </div>
)