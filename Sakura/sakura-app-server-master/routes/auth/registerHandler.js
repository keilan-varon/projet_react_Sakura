const bcrypt = require('bcrypt');
const registerUser = require('../../functions/auth/registerUser');
const getUserWithEmailOrID = require("../../functions/auth/getUserWithEmailOrID");

async function registerHandler(req, res) {
    // Récupérer les informations de l'utilsateur
    const {pseudo, email, password} = req.body;
    if(!pseudo || !email || !password) return res.status(400).json({message: "Un ou plusieurs champs sont incomplets."});

    // Vérifier mot de passe (chercher regexps correspondant a ce qu'il y a dans le front end)
    const regExpPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/;
    if(!regExpPassword.test(password)) return res.status(400).json({message: "Le mot de passe est incorrect."});

    // Vérifier que l'utilisateur n'est pas déjà inscrit 
    const user = await getUserWithEmailOrID(email);
    if(user) return res.status(400).json({message: "Un utilisateur existe déjà avec cette adresse mail."});

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Inscrire l'utilisateur dans la base de données
    const id = await registerUser(pseudo, email, hashedPassword);
    if(!id) return res.status(500).json({message: "Une erreur s'est produite, veuillez réessayer."});
    res.json({ id, pseudo, email });   
}

module.exports = registerHandler