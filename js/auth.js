async function registrar() {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { error } = await client.auth.signUp({
        email,
        password
    });

    if (error) {
        alert(error.message);
    } else {
        alert('Usuario registrado');
    }
}

async function login() { 

    const email = document.getElementById('email').value; //Busca el input HTML que tiene el id email lo mismo en pass
    const password = document.getElementById('password').value;

    const { error } = await client.auth.signInWithPassword({ // aca supabase crea el usuario //error devuelve la info por ejemlplo  si salio bioen o no
        email,
        password
    });

    if (error) {
        alert(error.message);
    } else {
        alert('Bienvenido');
        window.location.href = 'inventario.html';
    }
}

async function logout() { //Cerrar sesion

    await client.auth.signOut();

    window.location.href = 'login.html';
}
