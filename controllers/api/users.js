const User = require('../../models/user');
const jwt = require('jsonwebtoken');


async function create(req, res) {
    // console.log('[From POST handler]', req.body);
    try {
        //*Creating a new user
        const user = await User.create(req.body);
        console.log(user);
        //*creating a new JWT token
        const token = createJWT(user);
        res.json(token);
    } catch (error) {
        res.status(400).json(error)
    }
}

// * Creating a new JWT
function createJWT(user){
    return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'})
}

module.exports = {
    create
}