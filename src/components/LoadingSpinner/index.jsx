import React from 'react';
import { motion } from 'framer-motion';
import { RiRefreshLine } from 'react-icons/ri';
import './loadingspinner.css'; // Arquivo de estilos CSS para estilização adicional, se necessário

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner-overlay">
            <motion.div
                className="loading-spinner-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="refresh-icon"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, loop: Infinity, ease: "linear" }}
                >
                    <RiRefreshLine size={50} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default LoadingSpinner;
