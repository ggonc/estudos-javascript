const usuarios = new Map();
usuarios.set('Luiz', 'Admin');
usuarios.set('Joaquim', 'User');
usuarios.set('Larissa', 'Admin');

function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
};

console.log(getAdmins(usuarios));

