import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import BACKEND_URL from '../config';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null); // New state for success message
    const { dispatch } = useAuthContext();

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);
        setSuccessMessage(null); // Reset success message on each signup attempt

        try {
            const response = await fetch(BACKEND_URL + '/api/user/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
            } else {
                // Save user to local storage
                localStorage.setItem('user', JSON.stringify(json));

                // Update the auth context
                dispatch({ type: 'LOGIN', payload: json });

                // Set success message
                setSuccessMessage('Successfully signed up!');
            }
        } catch (error) {
            setError('Failed to sign up. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return { signup, isLoading, error, successMessage };
};
