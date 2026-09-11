import React from 'react'
import styles from './button.module.css'

const Button = ()=>{
    return (
        <div className='btn'>
            <button className={styles.btn}>Click Me</button>
        </div>
    )
}

export default Button