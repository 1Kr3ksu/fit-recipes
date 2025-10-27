import React, { useState } from 'react'
import '../styles/Contact.css'

function Contact(){
	const [form, setForm] = useState({ name:'', email:'', message:'' })

	const handleChange = e => setForm(prev=>({ ...prev, [e.target.name]: e.target.value }))
	const handleSubmit = e => { e.preventDefault(); alert('Wiadomość wysłana (mock)'); setForm({name:'',email:'',message:''}) }

	return (
		<div className="contact-page">
			<div className="contact-container">
				<h1>Kontakt</h1>
				<p>Masz pytania? Napisz do nas przez formularz poniżej.</p>
				<form className="contact-form" onSubmit={handleSubmit}>
					<label>Imię</label>
					<input name="name" value={form.name} onChange={handleChange} />
					<label>Email</label>
					<input name="email" value={form.email} onChange={handleChange} />
					<label>Wiadomość</label>
					<textarea name="message" value={form.message} onChange={handleChange} />
					<button type="submit" className="btn-primary">Wyślij</button>
				</form>
			</div>
		</div>
	)
}

export default Contact