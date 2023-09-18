module.exports =(fn)=>(req,res,next)=>fn(req,res).catch(err=>next(err))
//esta funcion recibe el controlador (fn ) retorna una funcion con 
//req res y next devuelve el controlador con catcth si tiene un error devuelve el error


/*  (fn)=>{
  return (req,res,next)=>{
    fn(req, res).catch(err=>{
      next(err);
    })
  }
  } */