import {Request, Response} from "express";
import { User } from "../entities/User";

export const getUser = async (req: Request, res: Response) => {
    try{
        const usersFound = await User.find();
        return res.json(usersFound)
    }catch(e){
        return res.status(500).json({error: e})
    }
}

export const postUser = async (req: Request, res: Response) => {
    try{
        const {firstname, lastname} = req.body;
        const newUser = new User();
        newUser.firstname = firstname;
        newUser.lastname = lastname;
        await newUser.save()
        return res.json({response: "Usuario Creado."})
    }catch(e){
        return res.status(500).json({error: e})
    }
}

export const putUser = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const {firstname, lastname} = req.body;
        const userFound = await User.findOneBy({ id: parseInt(id) });
        if(!userFound){
            return res.json({response: "Usuario no encontrado"})
        }
        userFound.firstname = firstname;
        userFound.lastname = lastname;
        await userFound.save()
        return res.json({response: "Usuario Actualizado."})
    }catch(e){
        return res.status(500).json({error: e})
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const result = await User.delete({ id: parseInt(id) });
        if(result.affected === 0){
            return res.json({response: "Usuario no encontrado"})
        }
        return res.json({response: "Usuario Eliminado."})
    }catch(e){
        return res.status(500).json({error: e})
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const userFound = await User.findOneBy({ id: parseInt(id) });
        if(!userFound){
            return res.json({response: "Usuario no encontrado"})
        }
        return res.json(userFound)
    }catch(e){
        return res.status(500).json({error: e})
    }
}