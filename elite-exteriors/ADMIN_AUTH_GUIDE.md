# Admin Authentication System

## Overview

The Elite Exteriors admin authentication system provides secure access to the admin dashboard at `/admin`. It uses client-side session management with configurable expiration times.

## Credentials

- **Username**: `elite_exteriors_va`
- **Email**: `info@elitexteriorsva.com`
- **Password**: `EliteVA23320`

## Features

### 🔐 Security Features

- **Session Management**: 24-hour auto-expiring sessions
- **Credential Validation**: Username or email + password authentication
- **Security Headers**: Enhanced headers for admin routes
- **Auto-logout**: Sessions expire automatically after 24 hours
- **Protected Routes**: Admin dashboard requires authentication

### 🎨 User Experience

- **Clean Login Interface**: Professional login form with validation
- **Loading States**: Visual feedback during authentication
- **Error Handling**: Clear error messages for invalid credentials
- **Password Visibility**: Toggle to show/hide password
- **Session Persistence**: Maintains login across browser sessions

### 🛡️ Technical Security

- **Client-side Session**: Stored in localStorage with expiry timestamps
- **Input Validation**: Sanitized credential checking
- **Error Prevention**: Graceful error handling and fallbacks
- **Cache Control**: No-cache headers for admin pages

## File Structure

```
src/
├── components/admin/
│   └── AdminAuth.tsx              # Login component
├── app/admin/
│   ├── page.tsx                   # Admin page entry point
│   ├── ProtectedAdminPage.tsx     # Authentication wrapper
│   └── AdminDashboard.tsx         # Main dashboard (with logout)
├── lib/
│   └── auth-utils.ts              # Authentication utilities
└── netlify.toml                   # Security headers configuration
```

## How It Works

### 1. Authentication Flow

1. User visits `/admin`
2. `ProtectedAdminPage` checks for valid session
3. If no session or expired: show `AdminAuth` login form
4. If valid session: show `AdminDashboard`
5. User can logout using the logout button

### 2. Session Management

- Sessions are stored in localStorage as JSON
- Each session has an expiry timestamp (24 hours from creation)
- Sessions are validated on each admin page load
- Expired sessions are automatically cleared

### 3. Security Headers (netlify.toml)

```toml
[[headers]]
  for = "/admin/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Cache-Control = "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0"
```

## Usage

### Accessing Admin Dashboard

1. Navigate to `https://www.elitexteriorsva.com/admin`
2. Enter username/email: `elite_exteriors_va` or `info@elitexteriorsva.com`
3. Enter password: `EliteVA23320`
4. Click "Access Dashboard"

### Logging Out

- Click the "Logout" button in the top-right corner of the dashboard
- This will clear the session and redirect to the login page

## Configuration

### Changing Credentials

Edit the credentials in `src/components/admin/AdminAuth.tsx`:

```typescript
const ADMIN_CREDENTIALS = {
  email: "info@elitexteriorsva.com",
  username: "elite_exteriors_va",
  password: "EliteVA23320",
};
```

### Session Duration

Modify the session duration in `src/lib/auth-utils.ts`:

```typescript
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours
```

## Deployment Notes

### Security Considerations

- Credentials are stored in client-side code (consider environment variables for production)
- Session management is client-side only
- For enhanced security, consider server-side authentication with JWT tokens
- HTTPS is required for secure credential transmission

### Netlify Configuration

The authentication system works seamlessly with Netlify deployment:

- Security headers are automatically applied
- No server-side configuration required
- Works with Netlify's edge network

## Troubleshooting

### Common Issues

1. **Login not working**: Check credentials match exactly (case-sensitive)
2. **Session expired**: Sessions last 24 hours, login again if expired
3. **Page not loading**: Clear localStorage and refresh browser
4. **Security errors**: Ensure HTTPS is used in production

### Manual Session Clear

To manually clear a stuck session:

```javascript
localStorage.removeItem("elite_admin_session");
```

## Future Enhancements

- [ ] Server-side session validation
- [ ] Multi-factor authentication
- [ ] Role-based access control
- [ ] Session activity logging
- [ ] Password reset functionality
- [ ] Account lockout after failed attempts
