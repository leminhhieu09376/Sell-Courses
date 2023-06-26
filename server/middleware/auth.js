import jwt from "jsonwebtoken";
const secret = "test";
const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]


    if (!token) {
        return res.status(401).json({ success: false, message: 'Access token not found' })
    }
    try {
        const decoded = jwt.verify(token, secret)

        req.customerId = decoded.id
        let decodedData;
        decodedData = jwt.verify(token, secret);
        next()
    } catch (error) {
        console.log(error)
        return res.status(403).json({ success: false, message: 'Invalid token ' })
    }
}

export default verifyToken