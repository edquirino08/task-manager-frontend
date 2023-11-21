import React from 'react'

const TaskManagerForm = () => {
    return <div>
        <h2>Criar tarefa:</h2>
        <form>
            <input type="text" placeholder='Digite o título' />
            <select>
                <option value="">Selecione uma Categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
}

export default TaskManagerForm