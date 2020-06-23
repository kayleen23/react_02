const addContact = async contact => \
const config = {
    'content-type': 'application/json'
};

try {
    const res = await axios.post('/api/contacts', contact, config);

    dispatch{
        type: ADD_CONTACT,
        payload: res.addContact
    });
} catch (err) {
    dispatch({ type: CONTACT_ERROR});
}