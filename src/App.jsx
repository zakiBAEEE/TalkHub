import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { login, register, logout, auth } from "./components/firebase/firebaseAuth";
import { onAuthStateChanged } from "firebase/auth";
import { HalamanBeranda } from './pages/HalamanBeranda'
import { HalamanFollow } from './pages/HalamanFollow'
import { HalamanDiskusi } from './pages/HalamanDiskusi';
import { DetailHalamanRuangDiskusi } from './pages/DetailHalamanDiskusi';
import { HalamanProfile } from './pages/HalamanProfile';
import { Sidebar } from './components/sidebar/Sidebar';
import { HalamanLogin } from './pages/HalamanLogin';
import { HalamanRegister } from './pages/HalamanRegister';

function App() {
  const [isSidebarOn, setIsSidebarOn] = useState(true);
  const [authedUser, setAuthedUser] = useState(null);
  const navigate = useNavigate('/')

  // Pantau perubahan status autentikasi pengguna
  useEffect(() => {
    const storedUser = sessionStorage.getItem('authedUser');
    if (storedUser) {
      setAuthedUser(JSON.parse(storedUser)); // Atur state dari sessionStorage jika ada
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        sessionStorage.setItem('authedUser', JSON.stringify(user)); // Simpan user ke sessionStorage
        setAuthedUser(user); // Perbarui state
      } else {
        sessionStorage.removeItem('authedUser'); // Hapus dari sessionStorage jika logout
        setAuthedUser(null);
      }
    });

    return () => {
      unsubscribe(); // Hentikan listener saat komponen dilepas
    };
  }, []);

  // Fungsi untuk login
  function handleLogin(email, password) {
    login(email, password)
      .then(function (user) {
        console.log("User berhasil login:", user);
        setAuthedUser(user); // Set authedUser setelah login berhasil
        sessionStorage.setItem('authedUser', JSON.stringify(user))
        navigate('/'); // Pindah ke halaman utama setelah login
      })
      .catch(function (error) {
        console.error("Login gagal:", error.message);
      });
  }

  // Fungsi untuk registrasi
  function handleRegister(email, password) {
    register(email, password)
      .then(() => {
        console.log("PENDAFTARAN USER BERHASIL");
        navigate('/'); // Pindah ke halaman utama setelah registrasi
      })
      .catch(function (error) {
        console.error("Registrasi gagal:", error.message);
      });
  }

  // Fungsi untuk logout
  function handleLogout() {
    logout()
      .then(function () {
        console.log("Logout berhasil");
        setAuthedUser(null); // Set authedUser menjadi null setelah logout
        sessionStorage.removeItem('authedUser')
        navigate('/'); // Kembali ke halaman login setelah logout
      })
      .catch(function (error) {
        console.error("Logout gagal:", error.message);
      });
  }




  // Fungsi untuk mengatur toggle sidebar
  function toggleSidebar() {
    setIsSidebarOn(function (prevState) {
      return prevState === true ? false : true;
    });
  }

  // Jika belum login, tampilkan halaman login dan register
  if (authedUser == null) {
    return (
      <div className="flex bg-blue-gray-50 min-h-[100vh] items-center justify-center">
        <Routes>
          <Route path="/*" element={<HalamanLogin onLogin={handleLogin} />} />
          <Route path="/register" element={<HalamanRegister onRegister={handleRegister} />} />
        </Routes>
      </div>
    );
  }

  // Jika sudah login, tampilkan halaman utama dengan sidebar
  return (
    <div className="flex bg-blue-gray-50 min-h-[100vh]">
      <Sidebar toggleHandler={toggleSidebar} isSidebarOn={isSidebarOn} onLogout={handleLogout} />
      <div className={`flex-1 transition-all duration-900 ease-out ${isSidebarOn ? "" : "ml-[2rem]"}`}>
        <Routes>
          <Route path="/" element={<HalamanBeranda toggleSidebar={toggleSidebar} isSidebarOn={isSidebarOn} />} />
          <Route path="/diskusi" element={<HalamanDiskusi toggleSidebar={toggleSidebar} isSidebarOn={isSidebarOn} />} />
          <Route path="/diskusi/halamanDetail/:id" element={<DetailHalamanRuangDiskusi />} />
          <Route path="/follow" element={<HalamanFollow toggleSidebar={toggleSidebar} isSidebarOn={isSidebarOn} />} />
          <Route path="/profile" element={<HalamanProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export { App };
