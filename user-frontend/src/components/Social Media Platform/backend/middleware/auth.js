// import jwt from 'jsonwebtoken'

// export const verifyToken=async(req,res,next)=>{//next is used  for the continuation of next function ton run 
//     try {
//         let token=jwt.header("Authorizaton")
//         if(!token){
//             return res.status(403).send('Acces Denies')
//         }
//         if(token.startsWith("Bearer ")){
//             token =token.split(' ')[1];
//             //token =token.lenght()
//         }
//         const verified=jwt.verify(token,process.env.JWT_SECRET)
//         req.user=verified
//         next();
        
//     } catch (error) {
//         res.status(500).json({msg:error.message})
//     }
    
// }
import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
