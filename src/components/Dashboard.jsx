import { Paper, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import iconImage from "../img/teste.png";
import React from 'react';
const userData = location.state && location.state.userData;

const Dashboard = () => {
    return (
        <Paper elevation={3} style={{ position: 'relative', padding: '20px', textAlign: 'center', backgroundColor: '#f5f5dc', width: '85%', margin : '0 auto' }}>
            <img
                src={iconImage}
                alt="Login"
                style={{ marginBottom: '0.2em', width: '20%' }}
            />
            <Button
                variant="contained"
                style={{
                    position: 'absolute',
                    top: '70px',
                    right: '10px',
                    backgroundColor: '#4682b4',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <AddIcon style={{ marginRight: '8px' }} />
                Nova Tarefa
            </Button>
        </Paper>
    );
}

export default Dashboard;
