const axios = require('axios')

module.exports = {

    authentication: ( req, res ) => {
        axios.post( `https://${ process.env.REACT_APP_AUTH0_DOMAIN }/oauth/token`, {
                client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
                code: req.query.code,
                grant_type: 'authorization_code',
                client_secret: process.env.AUTH0_CLIENT_SECRET,
                redirect_uri: `http://${ req.headers.host }/auth/callback`
        }).then( accessTokenResponse => {
                const accessToken = accessTokenResponse.data.access_token
                    return axios.get( `https://${ process.env.REACT_APP_AUTH0_DOMAIN }/userinfo/?access_token=${ accessToken }` )
        }).then( userInfoResponse => {
                    const userData = {
                        name:userInfoResponse.data.name,
                        picture:userInfoResponse.data.picture,
                        email:userInfoResponse.data.email
                    }
                            req.session.user = userData
                            res.redirect( '/profile' )

        }).catch( err => {
            // res.status( 500 ).send(({ message: 'We\'ve run into an error!', err}))
                res.redirect( '/error' )
                    console.log( 'Server ERROR', err )
        })
    },
    profile: ( req, res ) => {
        res.json({ user: req.session.user })
    },
    logout: ( req, res ) => {
        const name = req.session.user.name
            req.session.destroy()
                res.json({ message: `You have successfully logged out, ${ name }` })
    },
}