import React, { useEffect } from 'react';

export default function GoogleSignIn() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = () => {
            initializeGoogleAccounts(); // Chamar a função após o carregamento do script
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const initializeGoogleAccounts = () => {
        // Agora você pode usar a biblioteca google.accounts aqui
        // por exemplo, chamar google.accounts.is.initialize()
    };

    return <div id="g_id_onload" />;
}
