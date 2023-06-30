import {useEffect, useState} from 'react';
import CourseCard from '../../components/private/courses/CourseCard.jsx';
import clienteFrontend from '../../config/axios.jsx';

const Profile = () => {
    
    // useStates
    const [user, setUser] = useState({});
    const [courses, setCourses] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [changePass, setChangePass] = useState(false);
    const [passwords, setPasswords] = useState({
        "currentPassword": "",
        "password": "",
        "repeatPassword": ""
    });
    const [newUser, setNewUser] = useState({
        "firstName": user.firstName,
        "lastName": user.lastName,
        "email": user.email
    });

    // useEffect
    useEffect(()=>{
        // Cambio del titulo de la seccion
        document.querySelector(".title-section").textContent = "Perfil";

        // Función para encontrar al usuario
        const findUser = async() =>{
            fetch('/')
                .then(data => data.json())
                .then(res => {
                    for(let i=0; i < res.length; i++){
                        if(parseInt(res[i].id) === 3){
                            setUser(res[i]);
                            setNewUser({
                                "firstName": user.firstName,
                                "lastName": user.lastName,
                                "email": user.email
                            });
                            window.title = `${res[i].firstName} - CompUnerg Community`
                        }
                    }
                })
                .catch(err => console.log(err))

            let id = 1;
            const {data} = await clienteFrontend(`/users/${id}`);
            console.log(data);
        }

        // Función para encontrar los cursos ya solicitados
        const findCourses = () =>{
            fetch('')
                .then(data => data.json())
                .then(res => {
                    var cours = [];
                    for(let i = 0; i < 3; i++){
                        cours.push(res[i]);
                    }
                    setCourses(cours);
                })
                .catch(err => console.log(err))            
        }

        // Llamada de las funciones
        findUser();
        findCourses();
    }, [])

    const discardChanges = ()=>{
        // Quitando el modo de edicion
        setEditMode(false);
        setChangePass(false);

        // Reseteando campos
        setPasswords({
            "currentPassword": "",
            "password": "",
            "repeatPassword": ""
        });
        setNewUser({
            "firstName": user.firstName,
            "lastName": user.lastName,
            "email": user.email
        });
    }

    const saveProfile = async() =>{

        // Variables a utilziar
        let values = [];
        let data = {};

        // Si esta editando los datos de la persona
        if(editMode){
            setChangePass(false);
            // Se obtienen los datos del usuario y se almacenan en un array para luego ser evaluados
            values = Object.values(newUser);
            // Se realiza la estructura de los datos a enviar
            data = {...newUser};
        }else if(changePass){
            setEditMode(false);
            // Se obtienen los datos del usuario y se almacenan en un array para luego ser evaluados
            values = Object.values(passwords);
            // Se realiza la estructura de los datos a enviar
            data = {...passwords};
        }else{
            return
        }

        // Validar inputs
        // Si hay campos vacios
        if(values.includes("")){
            return alert("Todos los datos son obligatorios")
        }

        // Si se esta evaluando la contraseña
        if(changePass){
            // Si las contraseñas nuevas no coinciden
            if(data.password !== data.repeatPassword){
                return alert("Las nuevas contraseñas no coinciden")
            }
        }

        // Envio de los datos
        try {
            let id = 1;
            // Aqui va la linea de codigo de envio a la base de datos para acutalizar los datos con la variable data
            const { data } = await clienteFrontend.patch(`/users/${id}`);
            console.log(data);

            // Si se actualizaron los datos del usuario
            if(editMode){
                // Actualizacion de los datos de lectura
                setUser({
                    "firstName": newUser.firstName,
                    "lastName": newUser.lastName,
                    "email": newUser.email
                });
            }

            // Quitando el modo de editor
            setEditMode(false);
        } catch (error) {
            // Mostrando error
            console.log(error.message);
        }
    }

    return (
        <>
            <section className="profile-section">
                <div className="profile-background"></div>
                <div className="profile-content">
                    <div className="fields-section">
                        <div className="fields-div">
                            <img src="/public/svg/person.svg" alt="person" width={"70"}/>
                            <div className="fields-content">
                                <form className={`profile-form`}>
                                    {/* Datos Personales */}
                                    <div className={`${!editMode || changePass ? 'hidden':''}`}>
                                        <div>
                                            <label htmlFor="firstName">Nombre</label>
                                            <input type="text" id="firstName" className="field-profile" value={newUser.firstName} onChange = {(e) => setNewUser({
                                                ...newUser,
                                                "firstName": e.target.value
                                            })}/>
                                        </div>
                                        <div>
                                            <label htmlFor="lastName">Apellido</label>
                                            <input type="text" id="lastName" className="field-profile" value={newUser.lastName} onChange = {(e) => setNewUser({
                                                ...newUser,
                                                "lastName": e.target.value
                                            })}/>
                                        </div>
                                        <div>
                                            <label htmlFor="email">Correo Electronico</label>
                                            <input type="text" id="email" className="field-profile" value={newUser.email} onChange = {(e) => setNewUser({
                                                ...newUser,
                                                "email": e.target.value
                                            })}/>
                                        </div>
                                    </div>
                                    {/* Contraseña */}
                                    <div className={`${editMode || !changePass ? 'hidden':''}`}>
                                        <div>
                                            <label htmlFor="currentPassword">Contraseña Actual</label>
                                            <input type="password" id="currentPassword" className="field-profile" value={passwords.currentPassword} onChange = {(e) => setPasswords({
                                                ...passwords,
                                                "currentPassword": e.target.value
                                            })}/>
                                        </div>
                                        <div>
                                            <label htmlFor="password">Nueva Contraseña</label>
                                            <input type="password" id="password" className="field-profile" value={passwords.password} onChange = {(e) => setPasswords({
                                                ...passwords,
                                                "password": e.target.value
                                            })}/>
                                        </div>
                                        <div>
                                            <label htmlFor="repeatPass">Repite Nueva Contraseña</label>
                                            <input type="password" id="repeatPass" className="field-profile" value={passwords.repeatPassword} onChange = {(e) => setPasswords({
                                                ...passwords,
                                                "repeatPassword": e.target.value
                                            })}/>
                                        </div>
                                    </div>
                                </form>
                                <div className={`${editMode || changePass ? 'hidden': ''}`}>
                                    <div className="">
                                        {/* Campos de Nombre y Apellido */}
                                        <p className="name">
                                            {user.firstName} {user.lastName}
                                        </p>
                                    </div>
                                    <div className="">
                                        {/* Email */}
                                        <p className="email">
                                            {user.email}
                                        </p>
                                    </div>
                                    <div className="">
                                        {/* Password */}
                                        <p>
                                            {/* {user.} */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-content">
                            <button 
                                id="editProfileBtn"
                                className={`${editMode || changePass ? 'hidden':''}`}
                                onClick={() => {
                                    setEditMode(true);
                                    setChangePass(false);
                                }}
                            >
                                <img src="/public/svg/pen.svg" alt="" width="30"/>
                                Editar Perfil
                            </button>
                            <button 
                                className={`${editMode || changePass ? '':'hidden'}`}
                                onClick={()=> saveProfile()}
                            >
                                <img src="/public/svg/pen.svg" alt="" width="30"/>
                                Guardar Cambios
                            </button>
                            <button 
                                className={`cancelBtn ${editMode || changePass ? '':'hidden'}`}
                                onClick={() => discardChanges()}
                            >
                                <img src="/public/svg/cancel.svg" alt="" width="30"/>
                                Descartar Cambios
                            </button>
                            <button 
                                id="editProfileBtn"
                                className={`${editMode || changePass ? 'hidden':''}`}
                                onClick={() => {
                                    setChangePass(true);
                                    setEditMode(false);
                                }}
                            >
                                <img src="/public/svg/pen.svg" alt="" width="30"/>
                                Cambiar Contraseña
                            </button>
                        </div>
                    </div>
                    {/* Cursos */}
                    <div className="courses">
                        <h4>
                            Cursos Vistos
                        </h4>
                        <div className="courses-content">
                            {
                                courses.map( (course, i) => {
                                    return <CourseCard key={i} course={course}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile