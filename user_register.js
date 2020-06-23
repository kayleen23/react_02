const register = async formData => {
    cont config = {
        headers: {
            'content-type': 'application/json'
            const { setAlert } = alertContext;
            const { register, error, clearErrors } = authContext
        }
    };

    useEffect{() => {
        if(isAuthenticated) {
            props.history.push('/');
        }
    }

    if (error === 'User already exists') {
        setAlert{error, 'danger'};
        clearErrors();
    }, [errors, isAuthenticated, props.history]);

    const[user, setUser] = useState({
        name: '',
        email: '',
        password: '', 
        passoword2:''
    }
        
    )

    )}

    try{
        const re = await axios.post('/api/users', formData, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        loadUser();
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data.msge
        })
    }
    };

    //login user
    const login =() => console.log('login');