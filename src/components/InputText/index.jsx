import React from 'react';
import styles from './input-text.css'

function InputText({ onSendText, usernameToReply, onCloseText }) {
    return (
        <form className={styles.form} onSubmit={onSendText}>
            <textarea
                className={styles.text}
                name="text"
                defaultValue={(sernameToReply) ? `@${usernameToReply} ` : ''}
            >
            </textarea>
            <div className={styles.buttons}>
                <button className={styles.close} onClick={onCloseText}>Cerrar</button>
                <button className={styles.send} type="submit">Enviar</button>
            </div>
        </form>
    );
}

export default InputText;