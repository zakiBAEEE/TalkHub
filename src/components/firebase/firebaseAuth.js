import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./firebaseConfig";
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);


async function register(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Error saat mendaftarkan user:", error.message);
        throw error;
    }
}

// Fungsi untuk login
async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then(function (userCredential) {
            console.log("User berhasil login:", userCredential.user);
            return userCredential.user;
        })
        .catch(function (error) {
            console.error("Error saat login:", error.message);
            throw error;
        });
}

// Fungsi untuk logout
async function logout() {
    try {
        await signOut(auth);
        console.log("User berhasil logout");
    } catch (error) {
        console.error("Error saat logout:", error.message);
        throw error;
    }
}

// Export semua fungsi agar bisa digunakan di file lain
export { auth, register, login, logout };