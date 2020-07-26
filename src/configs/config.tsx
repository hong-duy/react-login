const CONFIG = {
    GOOGLE_LOGIN_URL: 'https://accounts.google.com/o/oauth2/auth?client_id=650068002981-iivventkbtgnqjfl1cso0vs2upvkkt9t.apps.googleusercontent.com&redirect_uri=https://localhost:3000/auth/google&scope=openid profile email&response_type=code&access_type=offline&prompt=consent+select_account',
    API_POST: 'https://tinanime.com/api/news/?offset=12&limit=10',
    API_AUTH_CALLBACK: '/api/auth/callback',
    API_NEWS: 'https://tinanime.com/api/news/'
}

export default CONFIG;
