import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Namn</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Ämne</label>
            <input type="text"></input>
            <label>Meddelande</label>
            <textarea rows="6" placeholder="Type your
             message here"/>
             <button className="btn">Skicka</button>
        </form>
    </div>
  )
}

export default Form