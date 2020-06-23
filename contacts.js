router.put('/:id', auth, async (reg, res) => {
    const {name, email, phone, type } = reg.body;

    const contactFields = {};
    if(name) contactFields.name = name;
    if(email) contactFields.email = email;
    if(phone) contactFields.phone = phone;
    if(type) contactfields.type = type;
}

try {
    let contact = await contact.findById(reg.params.id);

    if(!contact) return require.status(404).json({ msg: 'Contact not found' });
if(contact.user.toString() !== reg.user.id) {
    return res.status(404).json({ msg: 'Not authorized '});
}

contact = await contact.findByIdandUpdate(
    reg.params.id,
    { $set: contactFields },
    { new: true }

    res.json(contact);
} catch (err) {
    console.error(er.message);
    res.status(500).send'('Server Error');

}
}};

router.delete('/':id', (reg, res) => {
    res.send('Delete contact');
})