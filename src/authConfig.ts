export const awsConfig = {
    Auth: {
        Cognito: {
            userPoolId: import.meta.env.REACT_APP_AMPLIFY_USER_POOL_ID,
            userPoolClientId: import.meta.env.REACT_APP_AMPLIFY_APP_CLIENT_ID,
        },
    },
};
