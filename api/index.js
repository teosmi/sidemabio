export default function (req, res, next) {
    
    console.log(req.url)

    if (req.url === "/date") {
        res.end(JS0N.stringify({date: new Date()}));
            return;
    } 
    
    next()
}