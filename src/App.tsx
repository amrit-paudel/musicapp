
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import React from 'react';
// import { AuthProvider } from './AuthContext'; // Import the AuthProvider
import { AuthProvider } from './AuthContext';
// import { Router } from './Router'; // Your Router component
import Router from './routes/Router';

const App = () => {
    { console.log("DEBUG INSIDE App") }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </SafeAreaView>
    );
};

export default App;
