import React from 'react'
import Header from './Header'
import TodoForm from './TodoForm'
import Todos from './Todos'
import Navbar from './Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <section>
                <Header />
                <TodoForm />
                <Todos />
            </section>
        </>
    )
}

export default Home